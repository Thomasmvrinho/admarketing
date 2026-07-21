import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorFollower from './components/CursorFollower'
import ScrollProgress from './components/ScrollProgress'
import MentionsLegales from './components/MentionsLegales'

const Marquee = lazy(() => import('./components/Marquee'))
const Services = lazy(() => import('./components/Services'))
const Process = lazy(() => import('./components/Process'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Stats = lazy(() => import('./components/Stats'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing = lazy(() => import('./components/Pricing'))
const ROICalculator = lazy(() => import('./components/ROICalculator'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function getPage() {
  return window.location.hash === '#mentions-legales' ? 'mentions' : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHash = () => {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (page === 'mentions') {
    return (
      <>
        <CursorFollower />
        <MentionsLegales />
      </>
    )
  }

  return (
    <div>
      <CursorFollower />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <Services />
          <Process />
          <Portfolio />
          <Stats />
          <Testimonials />
          <Pricing />
          <ROICalculator />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
