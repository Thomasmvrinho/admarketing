import { useState, useEffect, useRef, lazy, Suspense } from 'react'
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
  if (path.startsWith('/blog/')) {
    let slug = path.slice(6)
    try { slug = decodeURIComponent(slug) } catch { /* URL malformee : on garde le slug brut */ }
    return { page: 'article', slug }
  }

  const h = window.location.hash
  if (h === '#mentions-legales') return { page: 'mentions' }
  if (h === '#apport-affaires') return { page: 'apport-affaires' }
  if (h === '#formation-commerciale') return { page: 'formation-commerciale' }
  if (h === '#developpement-commercial') return { page: 'developpement-commercial' }
  return { page: 'home' }
}

// Defile vers l'element cible du hash s'il existe. Renvoie true si trouve.
function scrollToHash() {
  const id = window.location.hash.slice(1)
  if (!id) return false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    return true
  }
  return false
}

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const prevPage = useRef(route.page)

  useEffect(() => {
    const onNav = () => {
      const next = getRoute()
      const pageChanged = next.page !== prevPage.current
      prevPage.current = next.page
      setRoute(next)
      if (pageChanged) {
        // Vrai changement de page : on remonte en haut
        window.scrollTo(0, 0)
      } else if (window.location.hash) {
        // Meme page, ancre de section interne : on defile vers la cible
        scrollToHash()
      }
    }
    window.addEventListener('hashchange', onNav)
    window.addEventListener('popstate', onNav)
    return () => {
      window.removeEventListener('hashchange', onNav)
      window.removeEventListener('popstate', onNav)
    }
  }, [])

  // Deep-link au chargement : si l'URL pointe vers une section de l'accueil,
  // on defile une fois la section lazy montee (petite serie de tentatives).
  useEffect(() => {
    if (route.page !== 'home' || !window.location.hash) return
    if (scrollToHash()) return
    let tries = 0
    const t = setInterval(() => {
      tries += 1
      if (scrollToHash() || tries > 20) clearInterval(t)
    }, 100)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
