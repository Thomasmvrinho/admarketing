import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

const LOGO = 'https://cdn.discordapp.com/attachments/1508570229234466826/1513889123490992259/1b3fe6cd-d2f9-4f44-94f9-b258e74ff8ca.png?ex=6a295e9d&is=6a280d1d&hm=7a215b474f432b262b833d0ea154b038eee9b809416d686935f36248e906236f&'

const footerLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [logoErr, setLogoErr] = useState(false)
  return (
    <footer className="pt-12 pb-6 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <a href="#home">
            {!logoErr ? (
              <img src={LOGO} alt="ADMARKETING" className="h-10 w-auto object-contain"
                onError={() => setLogoErr(true)} />
            ) : (
              <span className="font-grotesk font-bold text-xl">
                <span style={{ color: '#D4AF37' }}>AD</span>
                <span className="text-white">MARKETING</span>
              </span>
            )}
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="font-inter text-sm text-white/40 hover:text-gold transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {[Instagram, Linkedin].map((Icon, i) => (
              <motion.a key={i} href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/35 hover:text-gold transition-colors"
                style={{ border: '1px solid rgba(212,175,55,0.15)' }}
                whileHover={{ scale: 1.12, y: -2 }} aria-label="Social">
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-white/25 text-sm">© 2026 ADMARKETING — Tous droits réservés</span>
          <span className="font-inter text-white/25 text-sm">Fait avec passion 🖤🏆</span>
        </div>
      </div>
    </footer>
  )
}
