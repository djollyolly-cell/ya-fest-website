import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft, Users } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Nominations } from '../components/Nominations'
import { Countdown } from '../components/Countdown'
import { FAQ } from '../components/FAQ'
import { Contact } from '../components/Contact'
import { festivals } from '../components/Festivals'
import { SEO } from '../components/SEO'

export const FestivalPage = () => {
  const { slug } = useParams<{ slug: string }>()

  const festivalMap: Record<string, typeof festivals[0]> = {
    'kino-i-teatr-u-morya': festivals[0],
    'zimniy-teatr': festivals[1],
  }

  const festival = slug ? festivalMap[slug] : null

  if (!festival) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center" data-testid="festival-not-found">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Фестиваль не найден</h1>
          <Link to="/" className="text-primary hover:underline">Вернуться на главную</Link>
        </div>
      </main>
    )
  }

  const festivalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: festival.title,
    description: festival.description,
    startDate: festival.status === 'upcoming' ? '2026-04-08' : '2026-01-12',
    location: {
      "@type": "Place",
      name: festival.location,
    },
    organizer: {
      "@type": "Organization",
      name: "Я-Fest",
      url: "https://ya-fest.ru",
    },
  }

  return (
    <main id="main-content" className="min-h-screen bg-dark overflow-hidden relative" data-testid="festival-page">
      <SEO
        title={`${festival.title} — Я-Fest`}
        description={festival.description}
        jsonLd={festivalJsonLd}
      />
      <div className="fixed inset-0 -z-50 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full gradient-mesh" />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden" data-testid="festival-hero">
          <img
            src={festival.image}
            alt={festival.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm">На главную</span>
            </Link>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span data-testid="festival-page-status" className={`inline-block px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-xl border mb-6 ${
                festival.status === 'upcoming'
                  ? 'bg-primary/20 border-primary/40 text-primary'
                  : 'bg-white/5 border-white/20 text-white/40'
              }`}>
                {festival.status === 'upcoming' ? 'Открыт приём заявок' : 'Архив мероприятия'}
              </span>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-testid="festival-page-title">
                {festival.title}
              </h1>

              <div className="flex flex-wrap gap-8 text-lg text-white/70">
                <div className="flex items-center gap-3">
                  <Calendar size={22} className="text-secondary" />
                  {festival.date}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={22} className="text-secondary" />
                  {festival.location}
                </div>
                <div className="flex items-center gap-3">
                  <Users size={22} className="text-secondary" />
                  Все возрасты
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Festival */}
        <section className="py-24 px-6" data-testid="festival-about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">О фестивале</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-6">{festival.description}</p>
            <p className="text-lg text-white/40 leading-relaxed">
              Фестиваль-лаборатория объединяет участников со всей России для обмена опытом, обучения у мастеров и творческого роста. Каждый участник получает обратную связь от членов жюри — профессоров ведущих театральных и кино-вузов страны.
            </p>
          </div>
        </section>

        {/* Nominations */}
        <Nominations />

        {/* Pricing + Countdown */}
        {festival.status === 'upcoming' && (
          <section className="py-24 px-6" data-testid="festival-pricing">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Стоимость участия</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card text-center">
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-4">Оргвзнос</span>
                  <span className="text-5xl font-black text-primary" data-testid="pricing-amount">{festival.price}</span>
                  <p className="text-white/40 mt-4 text-sm">
                    Включает: проживание, питание, трансфер, мастер-классы
                  </p>
                  <p className="text-secondary text-sm font-bold mt-3">21-й участник — бесплатно!</p>
                </div>

                <Countdown />
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQ />

        {/* Contact / Application form */}
        <div id="contacts">
          <Contact />
        </div>
      </div>
    </main>
  )
}
