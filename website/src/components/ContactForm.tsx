import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationSchema, type ApplicationFormData } from '../lib/schemas'
import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      direction: 'theater',
      age_group: 'under_11',
    },
  })

  const onSubmit = async (data: ApplicationFormData) => {
    // Honeypot check
    if (data.website && data.website.length > 0) return

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Ошибка при отправке')
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        data-testid="zod-form-success"
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-primary" size={40} />
        </div>
        <h5 className="text-2xl font-bold mb-4">Заявка отправлена!</h5>
        <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-primary font-bold hover:underline"
        >
          Отправить еще одну
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="zod-contact-form" className="space-y-6" noValidate>
      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input {...register('website')} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
            Имя руководителя
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Иван Иванов"
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:border-primary outline-none transition-all ${
              errors.name ? 'border-red-500' : 'border-white/10'
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1" data-testid="error-name">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Телефон</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+7 (999) 123-45-67"
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:border-primary outline-none transition-all ${
              errors.phone ? 'border-red-500' : 'border-white/10'
            }`}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1" data-testid="error-phone">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
          Название коллектива / Солист
        </label>
        <input
          {...register('collective')}
          type="text"
          placeholder="Театральная студия «Браво»"
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:border-primary outline-none transition-all ${
            errors.collective ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {errors.collective && (
          <p className="text-red-400 text-xs mt-1" data-testid="error-collective">{errors.collective.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Направление</label>
          <select
            {...register('direction')}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all appearance-none text-white/80"
          >
            <option value="theater" className="bg-dark">Театральное искусство</option>
            <option value="cinema" className="bg-dark">Киноискусство</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Возрастная группа</label>
          <select
            {...register('age_group')}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all appearance-none text-white/80"
          >
            <option value="under_11" className="bg-dark">до 11 лет</option>
            <option value="12-16" className="bg-dark">12–16 лет</option>
            <option value="17plus" className="bg-dark">17+ лет</option>
            <option value="mixed" className="bg-dark">Смешанная</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Номинация</label>
        <input
          {...register('nomination')}
          type="text"
          placeholder="Драматический спектакль"
          className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:border-primary outline-none transition-all ${
            errors.nomination ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {errors.nomination && (
          <p className="text-red-400 text-xs mt-1" data-testid="error-nomination">{errors.nomination.message}</p>
        )}
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          data-testid="zod-submit-btn"
          className="w-full py-4 bg-primary rounded-xl font-bold flex items-center justify-center gap-3 disabled:opacity-50 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(233,30,140,0.3)]"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          {!isSubmitting && <Send size={18} />}
        </button>
        <p className="text-[10px] text-white/30 mt-4">
          Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности.
        </p>
      </div>
    </form>
  )
}
