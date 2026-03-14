import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export const festivals = [
  {
    id: 'kino-teatr-sea',
    title: 'Кино и Театр у моря',
    subtitle: 'Всероссийский грантовый фестиваль',
    date: '8–11 апреля 2026',
    location: 'Сочи, Сочи Парк Отель',
    description: 'Два направления в одном событии: театральные постановки на арене и создание кино в реальном времени. Гран-при 200 000 ₽.',
    price: '27 500 ₽',
    deadline: 'до 10 марта',
    status: 'upcoming' as const,
    image: 'https://images.unsplash.com/photo-1503095396549-807039045349?q=80&w=2071&auto=format&fit=crop',
    accent: '#E91E8C'
  },
  {
    id: 'winter-theater',
    title: 'Зимний театр',
    subtitle: 'Московский этап лаборатории',
    date: '12–14 января 2026',
    location: 'Москва, КЗ «Измайлово»',
    description: 'Ежегодный смотр театральных коллективов в сердце столицы. Мастер-классы от профессоров ГИТИСа и ВГИКа.',
    price: '20 000 ₽',
    status: 'archived' as const,
    image: '/gallery/stage-dance.jpg',
    accent: '#00BCD4'
  }
]

export const Festivals = () => {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} id="festivals" data-testid="festivals" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-secondary w-5 h-5" />
              <h2 className="text-xs uppercase tracking-[0.6em] text-secondary font-bold">События Я-Fest</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Наши <span className="font-serif italic text-white/40">фестивали</span></h3>
          </motion.div>
        </div>

        <div className="space-y-32">
          {festivals.map((fest, index) => (
            <motion.div
              key={fest.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              data-testid="festival-card"
            >
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden glass border-white/10">
                   <img src={fest.image} alt={fest.title} className="w-full h-full object-cover" />
                   <div className="absolute top-8 left-8">
                      <span data-testid="festival-status" className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-xl border ${fest.status === 'upcoming' ? 'bg-primary/20 border-primary/40 text-primary' : 'bg-white/5 border-white/20 text-white/40'}`}>
                        {fest.status === 'upcoming' ? 'Открыт прием заявок' : 'Архив мероприятия'}
                      </span>
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                   <h4 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{fest.title}</h4>
                   <div className="flex flex-wrap gap-6 text-sm font-medium text-white/60">
                      <div className="flex items-center gap-2"><Calendar size={18} className="text-secondary" />{fest.date}</div>
                      <div className="flex items-center gap-2"><MapPin size={18} className="text-secondary" />{fest.location}</div>
                   </div>
                </div>

                <p className="text-xl text-white/50 leading-relaxed font-light">{fest.description}</p>

                <div className="flex items-center gap-12 pt-8 border-t border-white/5">
                   <div>
                      <span className="block text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2">Оргвзнос</span>
                      <span className="text-3xl font-black" data-testid="festival-price">{fest.price}</span>
                   </div>
                   <button className={`group relative px-10 py-4 rounded-2xl font-bold ${fest.status === 'upcoming' ? 'bg-white text-dark' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}>
                      <span className="flex items-center gap-2">
                        {fest.status === 'upcoming' ? 'Принять участие' : 'Смотреть итоги'}
                        <ArrowRight size={20} />
                      </span>
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
