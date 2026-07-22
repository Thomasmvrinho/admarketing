import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import MentionsLegales from './components/MentionsLegales'
import ApportAffaires from './components/ApportAffaires'
import FormationCommerciale from './components/FormationCommerciale'
import DeveloppementCommercial from './components/DeveloppementCommercial'

const Marquee = lazy(() => import('./components/Marquee'))
const Services = lazy(() => import('./components/Services'))
const Process = lazy(() => import('./components/Process'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Stats = lazy(() => import('./components/Stats'))
const PerformanceScore = lazy(() => import('./components/PerformanceScore'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing = lazy(() => import('./components/Pricing'))
const ROICalculator = lazy(() => import('./components/ROICalculator'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function getPage() {
  const h = window.location.hash
  if (h === '#mentions-legales') return 'mentions'
  if (h === '#apport-affaires') return 'apport-affaires'
  if (h === '#formation-commerciale') return 'formation-commerciale'
  if (h === '#developpement-commercial') return 'developpement-commercial'
  return 'home'
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
        <MentionsLegales />
      </>
    )
  }

  if (page === 'apport-affaires') {
    return (
      <>
        <ScrollProgress />
        <ApportAffaires />
      </>
    )
  }

  if (page === 'formation-commerciale') {
    return (
      <>
        <ScrollProgress />
        <FormationCommerciale />
      </>
    )
  }

  if (page === 'developpement-commercial') {
    return (
      <>
        <ScrollProgress />
        <DeveloppementCommercial />
      </>
    )
  }

  return (
    <div>
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
          <PerformanceScore />
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
