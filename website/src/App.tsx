import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const FestivalPage = lazy(() => import('./pages/FestivalPage').then(m => ({ default: m.FestivalPage })))

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center" data-testid="page-loading">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg" data-testid="skip-link">
        Перейти к содержимому
      </a>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
