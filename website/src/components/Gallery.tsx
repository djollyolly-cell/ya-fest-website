import { motion } from 'framer-motion'
import { Image as ImageIcon, Play, Maximize2 } from 'lucide-react'

export const galleryItems = [
  { id: 1, type: 'image' as const, title: 'Сцена Я-Fest — Зимний театр', url: '/gallery/stage-presentation.jpg', size: 'large' as const },
  { id: 2, type: 'image' as const, title: 'Драматический спектакль', url: '/gallery/dark-performance.jpg', size: 'small' as const },
  { id: 3, type: 'image' as const, title: 'Вручение дипломов', url: '/gallery/award-ceremony.jpg', size: 'small' as const },
  { id: 4, type: 'image' as const, title: 'Коллектив-лауреат на сцене', url: '/gallery/group-photo.jpg', size: 'medium' as const },
  { id: 5, type: 'image' as const, title: 'Театральная постановка', url: '/gallery/theater-scene.jpg', size: 'small' as const },
  { id: 6, type: 'image' as const, title: 'Рождение звезды', url: '/gallery/solo-actress.jpg', size: 'medium' as const },
]

export const Gallery = () => {
  return (
    <section id="gallery" data-testid="gallery" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">Галерея</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Атмосфера Я-Fest</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden glass group cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''
              }`}
              data-testid="gallery-item"
            >
              <img src={item.url} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{item.type === 'video' ? 'Видео' : 'Фото'}</span>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
                    {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <Maximize2 size={20} />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
