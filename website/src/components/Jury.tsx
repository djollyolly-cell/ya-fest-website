import { motion } from 'framer-motion'
import { Star, GraduationCap } from 'lucide-react'

export const juryMembers = [
  {
    name: 'Вениамин Фильштинский',
    role: 'Профессор РГИСИ',
    description: 'Легендарный театральный педагог, воспитавший плеяду звезд.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    color: 'border-primary/30'
  },
  {
    name: 'Дмитрий Чеботарёв',
    role: 'Актер театра и кино',
    description: 'Актер электротеатра «Станиславский». Звезда фильмов «Майор Гром».',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    color: 'border-secondary/30'
  },
  {
    name: 'Стася Толстая',
    role: 'Режиссер, актриса',
    description: 'Выпускница ГИТИСа. Режиссер актуальных театральных постановок.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    color: 'border-primary/30'
  },
  {
    name: 'Сергей Черкасский',
    role: 'Профессор РГИСИ',
    description: 'Доктор искусствоведения, лауреат премии Станиславского.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    color: 'border-secondary/30'
  },
  {
    name: 'Антонина Кузнецова',
    role: 'Народная артистка РФ',
    description: 'Профессор ГИТИСа, мастер художественного слова.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    color: 'border-primary/30'
  },
  {
    name: 'Радда Новикова',
    role: 'Кинорежиссер',
    description: 'Режиссер популярных сериалов и кино.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    color: 'border-secondary/30'
  }
]

export const Jury = () => {
  return (
    <section id="jury" data-testid="jury" className="py-24 px-6 relative bg-[#0F0F1E]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Звездный состав</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Наше жюри и эксперты</h3>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Мастера ведущих театральных и кино-вузов страны: ГИТИС, ВГИК, РГИСИ.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {juryMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-0 group overflow-hidden border ${member.color}`}
              data-testid="jury-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 flex gap-2">
                   <div className="glass p-2 rounded-full text-primary"><Star size={16} fill="currentColor" /></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-secondary text-sm font-medium flex items-center gap-2">
                    <GraduationCap size={16} />{member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
