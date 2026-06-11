import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'À propos', href: '#process' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onTouch = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('touchmove', onTouch, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-ink/95 backdrop-blur-xl shadow-sm border-b border-white/8'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-10">

        <a href="#home">
          <img src={`${import.meta.env.BASE_URL}logo-admarketing.png`} alt="ADMARKETING" className="h-20 w-96 object-contain" style={{ mixBlendMode: 'screen' }} />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-inter text-sm font-medium transition-colors hover:text-gold text-white/70"
            >
              {l.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="hidden md:block px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-ink"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 22px rgba(212,175,55,0.45)' }}
          whileTap={{ scale: 0.95 }}
        >
          Nous contacter
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Menu"
        >
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute inset-x-0 top-full bg-ink/97 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  className="font-inter text-white/80 font-medium hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-1 px-5 py-3 rounded-full font-inter font-semibold text-sm text-ink text-center"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
                onClick={() => setOpen(false)}
                initial={{ x: -14, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.06 }}
              >
                Nous contacter
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
