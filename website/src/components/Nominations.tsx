import { motion } from 'framer-motion'
import { useState } from 'react'
import { Film, Drama, Clapperboard, Mic, FileVideo, Award } from 'lucide-react'

export const theaterNominations = [
  { title: 'Драматический спектакль', desc: 'Полноценные театральные постановки коллективов.', icon: <Drama size={24} /> },
  { title: 'Заявка на спектакль', desc: 'Фрагмент или эскиз будущей постановки для экспертной оценки.', icon: <Award size={24} /> },
  { title: 'Художественное слово', desc: 'Чтецкие номера, декламация, поэтические и прозаические программы.', icon: <Mic size={24} /> },
]

export const cinemaНоминации = [
  { title: 'Кинозабег', desc: 'Создание фильма на месте — от идеи до монтажа за время фестиваля.', icon: <Clapperboard size={24} /> },
  { title: 'Лучший игровой короткометражный фильм', desc: 'Готовые игровые короткометражные работы.', icon: <Film size={24} /> },
  { title: 'Лучший документальный фильм', desc: 'Документальное кино на свободную тему.', icon: <FileVideo size={24} /> },
  { title: 'Лучшая актёрская работа в кино', desc: 'Индивидуальная оценка актёрского мастерства в кинопроектах.', icon: <Award size={24} /> },
]

type Tab = 'theater' | 'cinema'

export const Nominations = () => {
  const [activeTab, setActiveTab] = useState<Tab>('theater')
  const items = activeTab === 'theater' ? theaterNominations : cinemaНоминации

  return (
    <section data-testid="nominations" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">Направления</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Номинации</h3>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('theater')}
            data-testid="tab-theater"
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
              activeTab === 'theater'
                ? 'bg-primary text-white shadow-[0_0_20px_rgba(233,30,140,0.4)]'
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            Театр
          </button>
          <button
            onClick={() => setActiveTab('cinema')}
            data-testid="tab-cinema"
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
              activeTab === 'cinema'
                ? 'bg-secondary text-white shadow-[0_0_20px_rgba(0,188,212,0.4)]'
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            Кино
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="nominations-grid">
          {items.map((nom, i) => (
            <motion.div
              key={nom.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card flex gap-5 items-start"
              data-testid="nomination-card"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'theater' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
              }`}>
                {nom.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{nom.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{nom.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
