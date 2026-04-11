<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://yafest.ru');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Антибот: проверка токена ──
// Секретный ключ (такой же используется в JS на клиенте)
$SECRET = 'yafest2026secure';

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['text'])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'No text']);
    exit;
}

// Проверка: токен = sha256(secret + дата в формате YYYY-MM-DD-HH)
// Принимаем токен текущего часа и предыдущего (на стыке часов)
$token = $input['_token'] ?? '';
$now = time();
$validTokens = [
    hash('sha256', $SECRET . date('Y-m-d-H', $now)),
    hash('sha256', $SECRET . date('Y-m-d-H', $now - 3600)),
];
if (!in_array($token, $validTokens, true)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Invalid token']);
    exit;
}

// Проверка: honeypot-поле должно быть пустым
if (!empty($input['_website'])) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Bot detected']);
    exit;
}

// Проверка: timestamp — форма должна быть заполнена минимум 5 секунд
$ts = intval($input['_ts'] ?? 0);
if ($ts > 0 && ($now - $ts) < 5) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too fast']);
    exit;
}

// Проверка: текст не должен содержать мусорные данные (случайные строки)
// Простая эвристика: если в имени/телефоне слишком много согласных подряд — спам
$text = $input['text'] ?? '';
if (preg_match('/Имя:\s*([^\n]+)/', $text, $m)) {
    $name = trim($m[1]);
    // Имя должно содержать только буквы, пробелы и дефисы
    if (!preg_match('/^[A-Za-zА-Яа-яЁё\s\-]{2,60}$/u', $name)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Invalid name']);
        exit;
    }
    // Эвристика: 5+ согласных подряд в латинице = мусор
    if (preg_match('/[bcdfghjklmnpqrstvwxyz]{5}/i', $name)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Suspicious name']);
        exit;
    }
}
if (preg_match('/Телефон:\s*([^\n]+)/', $text, $m)) {
    $phone = trim($m[1]);
    // Телефон должен содержать только цифры, пробелы, +, -, (, )
    if (!preg_match('/^[\d\s\+\-\(\)]{7,20}$/', $phone)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Invalid phone']);
        exit;
    }
}

// ── Rate-limit по IP: макс 5 заявок за 10 минут ──
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlDir = sys_get_temp_dir() . '/yafest_rl';
if (!is_dir($rlDir)) { @mkdir($rlDir, 0755, true); }
$rlFile = $rlDir . '/' . md5($ip) . '.json';

$rlData = [];
if (file_exists($rlFile)) {
    $rlData = json_decode(file_get_contents($rlFile), true) ?: [];
    // Убираем записи старше 10 минут
    $rlData = array_filter($rlData, function($t) use ($now) { return ($now - $t) < 600; });
}
if (count($rlData) >= 3) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Rate limit']);
    exit;
}
$rlData[] = $now;
file_put_contents($rlFile, json_encode(array_values($rlData)));

// ── Отправка в Telegram ──
$TOKEN = '8419160569:AAHGhFJZmDe87rUG3X4zmnLVBWtxv5eLTj4';
$CHAT_ID = '-5101371398';

$text = substr($input['text'], 0, 4000);

$ch = curl_init("https://api.telegram.org/bot{$TOKEN}/sendMessage");
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode([
        'chat_id' => $CHAT_ID,
        'text' => $text
    ]),
    CURLOPT_TIMEOUT => 10
]);
$result = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($code >= 200 && $code < 300 ? 200 : 502);
echo $result;
