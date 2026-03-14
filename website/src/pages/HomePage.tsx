import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { About } from "../components/About"
import { Festivals } from "../components/Festivals"
import { Jury } from "../components/Jury"
import { Gallery } from "../components/Gallery"
import { Contact } from "../components/Contact"
import { Loader } from "../components/Loader"
import { SEO } from "../components/SEO"

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Я-Fest",
  description: "Продюсерский центр «Я» — организатор всероссийских грантовых фестивалей театрального и кинематографического искусства.",
  url: "https://ya-fest.ru",
  telephone: "+79601343400",
  email: "producer.ya@mail.ru",
}

export const HomePage = () => {
  return (
    <main id="main-content" className="min-h-screen bg-dark overflow-hidden relative">
      <SEO
        title="Я-Fest — Фестивали театра и кино"
        description="Всероссийские грантовые фестивали-лаборатории театрального и кинематографического искусства. Гран-при 200 000 ₽. Сочи, Апрель 2026."
        jsonLd={homeJsonLd}
      />
      <Loader />
      <div className="fixed inset-0 -z-50 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full gradient-mesh" />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="festivals">
          <Festivals />
        </div>
        <div id="jury">
          <Jury />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contacts">
          <Contact />
        </div>
      </div>
    </main>
  )
}
