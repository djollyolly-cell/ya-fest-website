import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Users, Globe, Rocket, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export const stats = [
  { icon: <Award className="text-primary" />, value: '200 000 ₽', label: 'Максимальный грант' },
  { icon: <Users className="text-secondary" />, value: '10 000+', label: 'Участников' },
  { icon: <Globe className="text-accent" />, value: '50+', label: 'Городов России' },
  { icon: <Rocket className="text-white" />, value: '10+', label: 'Лет опыта' },
]

export const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="about" data-testid="about" className="relative min-h-screen py-32 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-primary" />
               <h2 className="text-xs uppercase tracking-[0.6em] text-primary font-bold">О продюсерском центре</h2>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tighter">
              Мы превращаем <br />
              <span className="font-serif italic text-secondary">идеи в события</span>
            </h3>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Продюсерский центр «Я» — это не просто организация фестивалей. Это экосистема для творческого роста, где каждый участник получает шанс заявить о себе на всю страну.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                Наши лаборатории «Театр у моря» и «Кино у моря» в Сочи ежегодно собирают сотни коллективов, предоставляя им доступ к экспертизе лучших мастеров ГИТИСа и ВГИКа.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4" data-testid="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: 'spring' }}
                  className={`glass-card p-6 aspect-square flex flex-col justify-between group overflow-hidden ${index % 2 !== 0 ? 'translate-y-12' : ''}`}
                  data-testid="stat-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 leading-none">{stat.label}</div>
                  </div>
                  <Sparkles className="absolute top-4 right-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
