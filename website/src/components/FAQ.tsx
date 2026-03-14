import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const faqItems = [
  {
    q: 'Кто может принять участие в фестивале?',
    a: 'Театральные коллективы, солисты, студии, студенческие театры и кино-команды из любого города России. Возрастные категории: до 11 лет, 12–16 лет, 17+ лет.',
  },
  {
    q: 'Что входит в оргвзнос?',
    a: 'Проживание в Сочи Парк Отель (3–4 местные номера), питание (шведский стол), трансфер аэропорт – отель – аэропорт, участие во всех мероприятиях фестиваля, мастер-классы, работа с жюри.',
  },
  {
    q: 'Какие номинации есть в театральном направлении?',
    a: 'Драматический спектакль, заявка на спектакль, художественное слово. Оцениваются актёрское мастерство, режиссура, сценография и оригинальность.',
  },
  {
    q: 'Какие номинации есть в кинонаправлении?',
    a: 'Кинозабег (создание фильма на месте), лучший игровой короткометражный фильм, лучший документальный фильм, лучшая актёрская работа в кино.',
  },
  {
    q: 'Какой размер гранта можно получить?',
    a: 'Гран-при фестиваля составляет 200 000 ₽. Также вручаются специальные призы жюри и дипломы лауреатов.',
  },
  {
    q: 'Есть ли скидки или бесплатные места?',
    a: 'Да! 21-й участник в коллективе едет бесплатно. При раннем бронировании (до 10 марта) действует льготная цена 27 500 ₽ вместо 30 000 ₽.',
  },
  {
    q: 'Как подать заявку?',
    a: 'Заполните форму на сайте или свяжитесь с нами по телефону +7 (960) 134-34-00. После подачи заявки мы свяжемся с вами для подтверждения и уточнения деталей.',
  },
]

function AccordionItem({ item, isOpen, toggle }: { item: typeof faqItems[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0" data-testid="faq-item">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
        data-testid="faq-toggle"
      >
        <span className="text-lg font-bold pr-8 group-hover:text-primary transition-colors">{item.q}</span>
        <ChevronDown
          size={20}
          className={`text-white/40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/50 leading-relaxed" data-testid="faq-answer">{item.a}</p>
      </motion.div>
    </div>
  )
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section data-testid="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle size={20} className="text-secondary" />
              <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">Частые вопросы</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold">FAQ</h3>
          </motion.div>
        </div>

        <div className="glass-card">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
