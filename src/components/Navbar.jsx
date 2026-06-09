import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'RÃ©alisations', href: '#portfolio' },
  { label: 'Ã€ propos', href: '#process' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const LOGO = 'https://cdn.discordapp.com/attachments/1508570229234466826/1513889123490992259/1b3fe6cd-d2f9-4f44-94f9-b258e74ff8ca.png?ex=6a295e9d&is=6a280d1d&hm=7a215b474f432b262b833d0ea154b038eee9b809416d686935f36248e906236f&'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [logoErr, setLogoErr] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-black/8'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          {!logoErr ? (
            <img
              src={LOGO}
              alt="ADMARKETING"
              className="h-10 w-auto object-contain"
              onError={() => setLogoErr(true)}
            />
          ) : (
            <span className="font-grotesk font-bold text-xl">
              <span style={{ color: '#c9a227' }}>AD</span>
              <span className={scrolled ? 'text-ink' : 'text-white'}>MARKETING</span>
            </span>
          )}
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-inter text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-ink/70' : 'text-white/80'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="hidden md:block px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-ink"
          style={{ background: 'linear-gradient(135deg, #c9a227, #D8B64A)' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 22px rgba(201,162,39,0.45)' }}
          whileTap={{ scale: 0.95 }}
        >
          Nous contacter
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? 'text-ink' : 'text-white'}`}
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
                style={{ background: 'linear-gradient(135deg, #c9a227, #D8B64A)' }}
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
