import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import MentionsLegales from './components/MentionsLegales'
import ApportAffaires from './components/ApportAffaires'
import FormationCommerciale from './components/FormationCommerciale'
import DeveloppementCommercial from './components/DeveloppementCommercial'
import Blog from './components/Blog'
import Article from './components/Article'

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

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/blog') return { page: 'blog' }
  if (path.startsWith('/blog/')) return { page: 'article', slug: decodeURIComponent(path.slice(6)) }

  const h = window.location.hash
  if (h === '#mentions-legales') return { page: 'mentions' }
  if (h === '#apport-affaires') return { page: 'apport-affaires' }
  if (h === '#formation-commerciale') return { page: 'formation-commerciale' }
  if (h === '#developpement-commercial') return { page: 'developpement-commercial' }
  return { page: 'home' }
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onNav = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onNav)
    window.addEventListener('popstate', onNav)
    return () => {
      window.removeEventListener('hashchange', onNav)
      window.removeEventListener('popstate', onNav)
    }
  }, [])

  if (route.page === 'blog') {
    return (
      <>
        <ScrollProgress />
        <Blog />
      </>
    )
  }

  if (route.page === 'article') {
    return (
      <>
        <ScrollProgress />
        <Article slug={route.slug} />
      </>
    )
  }

  if (route.page === 'mentions') {
    return (
      <>
        <MentionsLegales />
      </>
    )
  }

  if (route.page === 'apport-affaires') {
    return (
      <>
        <ScrollProgress />
        <ApportAffaires />
      </>
    )
  }

  if (route.page === 'formation-commerciale') {
    return (
      <>
        <ScrollProgress />
        <FormationCommerciale />
      </>
    )
  }

  if (route.page === 'developpement-commercial') {
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
