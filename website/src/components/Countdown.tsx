import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

// Дедлайн ранней цены: 10 марта 2026, 23:59:59 МСК
const DEADLINE = new Date('2026-03-10T23:59:59+03:00').getTime()

export const EARLY_PRICE = '27 500'
export const LATE_PRICE = '30 000'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(): TimeLeft | null {
  const diff = DEADLINE - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return {
    timeLeft,
    isExpired: timeLeft === null,
    currentPrice: timeLeft ? EARLY_PRICE : LATE_PRICE,
  }
}

function Pad({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black tabular-nums" data-testid="countdown-value">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
    </div>
  )
}

export const Countdown = ({ compact = false }: { compact?: boolean }) => {
  const { timeLeft, isExpired, currentPrice } = useCountdown()

  if (isExpired) {
    return (
      <div data-testid="countdown-expired" className="glass rounded-2xl px-6 py-4 text-center">
        <p className="text-sm text-white/60">Регистрация продолжается</p>
        <p className="text-2xl font-black mt-1">{currentPrice} ₽</p>
      </div>
    )
  }

  if (compact) {
    return (
      <div data-testid="countdown-compact" className="flex items-center gap-3 glass rounded-full px-5 py-2 text-sm">
        <Clock size={16} className="text-primary" />
        <span className="text-white/60">Ранняя цена:</span>
        <span className="font-bold text-primary">{currentPrice} ₽</span>
        <span className="text-white/30">|</span>
        <span className="font-mono text-xs">
          {timeLeft.days}д {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      data-testid="countdown"
      className="glass rounded-3xl p-8 text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock size={20} className="text-primary" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
          До повышения цены
        </span>
      </div>

      <div className="flex justify-center gap-6 md:gap-8 mb-6">
        <Pad value={timeLeft.days} label="дней" />
        <span className="text-3xl font-light text-white/20 self-start mt-1">:</span>
        <Pad value={timeLeft.hours} label="часов" />
        <span className="text-3xl font-light text-white/20 self-start mt-1">:</span>
        <Pad value={timeLeft.minutes} label="минут" />
        <span className="text-3xl font-light text-white/20 self-start mt-1">:</span>
        <Pad value={timeLeft.seconds} label="секунд" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <div>
          <span className="text-[10px] text-white/30 uppercase tracking-widest block">Текущая цена</span>
          <span className="text-3xl font-black text-primary" data-testid="countdown-price">{currentPrice} ₽</span>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <span className="text-[10px] text-white/30 uppercase tracking-widest block">После 10 марта</span>
          <span className="text-xl font-bold text-white/30 line-through">{LATE_PRICE} ₽</span>
        </div>
      </div>
    </motion.div>
  )
}
