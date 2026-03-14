import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, MapPin, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Ошибка при отправке')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacts" data-testid="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Контакты</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Свяжитесь с нами</h3>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Телефон</span>
                  <a href="tel:+79601343400" className="text-xl font-bold hover:text-primary transition-colors">+7 (960) 134-34-00</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:producer.ya@mail.ru" className="text-xl font-bold hover:text-secondary transition-colors">producer.ya@mail.ru</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Социальные сети</span>
                  <div className="flex gap-4">
                    <a href="https://vk.com/producer_ya" className="text-lg font-bold hover:text-accent transition-colors">Личные VK</a>
                    <span className="text-white/20">|</span>
                    <a href="https://vk.com/i_festgo" className="text-lg font-bold hover:text-accent transition-colors">Группа VK</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 glass-card border-white/5">
               <div className="flex items-start gap-4">
                  <MapPin className="text-white/40 mt-1" />
                  <div>
                    <h5 className="font-bold mb-2">Место проведения (Апрель 2026)</h5>
                    <p className="text-white/50 text-sm">г. Сочи, Адлерский р-н, Сочи Парк Отель</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-10 relative">
            <h4 className="text-2xl font-bold mb-8">Подать заявку</h4>
            
            {isSubmitted ? (
              <div data-testid="form-success" className="text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-primary" size={40} />
                </div>
                <h5 className="text-2xl font-bold mb-4">Заявка отправлена!</h5>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 text-primary font-bold hover:underline">
                  Отправить еще одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Имя руководителя</label>
                    <input name="name" type="text" required placeholder="Иван Иванов" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Телефон</label>
                    <input name="phone" type="tel" required placeholder="+7 (___) ___-__-__" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Название коллектива / Солист</label>
                  <input name="collective" type="text" required placeholder="Театральная студия «Браво»" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Направление</label>
                    <select name="direction" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all appearance-none text-white/80">
                      <option value="theater" className="bg-dark">Театральное искусство</option>
                      <option value="cinema" className="bg-dark">Киноискусство</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Возрастная группа</label>
                    <select name="age_group" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all appearance-none text-white/80">
                      <option value="under_11" className="bg-dark">до 11 лет</option>
                      <option value="12-16" className="bg-dark">12–16 лет</option>
                      <option value="17plus" className="bg-dark">17+ лет</option>
                      <option value="mixed" className="bg-dark">Смешанная</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Номинация</label>
                  <input name="nomination" type="text" required placeholder="Драматический спектакль" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                </div>

                <div className="space-y-2 text-center pt-4">
                  <button type="submit" disabled={isSubmitting} data-testid="submit-btn" className="w-full py-4 bg-primary rounded-xl font-bold flex items-center justify-center gap-3 disabled:opacity-50">
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary" />
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Я-Fest</span>
        </div>
        <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
          © 2026 Продюсерский центр «Я». Все права защищены.
        </p>
      </footer>
    </section>
  )
}
