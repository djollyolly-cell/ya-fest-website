interface ApplicationData {
  name: string
  phone: string
  collective: string
  direction: string
  age_group: string
  nomination: string
  website?: string
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

function formatMessage(data: ApplicationData): string {
  const directionMap: Record<string, string> = {
    theater: 'Театральное искусство',
    cinema: 'Киноискусство',
  }
  const ageMap: Record<string, string> = {
    under_11: 'до 11 лет',
    '12-16': '12-16 лет',
    '17plus': '17+ лет',
    mixed: 'Смешанная',
  }

  return [
    `<b>Новая заявка на фестиваль</b>`,
    ``,
    `<b>Руководитель:</b> ${data.name}`,
    `<b>Телефон:</b> ${data.phone}`,
    `<b>Коллектив:</b> ${data.collective}`,
    `<b>Направление:</b> ${directionMap[data.direction] || data.direction}`,
    `<b>Возрастная группа:</b> ${ageMap[data.age_group] || data.age_group}`,
    `<b>Номинация:</b> ${data.nomination}`,
  ].join('\n')
}

async function sendTelegram(text: string): Promise<boolean> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  })
  return res.ok
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const data: ApplicationData = await req.json()

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const message = formatMessage(data)
    const sent = await sendTelegram(message)

    if (!sent) {
      return new Response(JSON.stringify({ error: 'Failed to send notification' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
