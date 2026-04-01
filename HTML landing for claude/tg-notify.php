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

$TOKEN = '8419160569:AAHGhFJZmDe87rUG3X4zmnLVBWtxv5eLTj4';
$CHAT_ID = '-5101371398';

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['text'])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'No text']);
    exit;
}

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
