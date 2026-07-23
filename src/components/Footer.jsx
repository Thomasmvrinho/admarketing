import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const footerLinks = [
  { label: 'Accueil', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Réalisations', href: '/#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tarifs', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <a href="/#home" aria-label="ADMARKETING, accueil">
            <img src={`${import.meta.env.BASE_URL}logo-admarketing.svg`} alt="ADMARKETING" className="h-14 w-auto lg:h-16 object-contain" />
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="font-inter text-sm text-white/55 hover:text-gold transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <motion.a href="https://www.linkedin.com/in/adrien-lafarge-91585b319/"
              target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white/45 hover:text-gold transition-colors"
              style={{ border: '1px solid rgba(212,175,55,0.15)' }}
              whileHover={{ scale: 1.12, y: -2 }} aria-label="LinkedIn (nouvel onglet)">
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
        <div className="h-px mb-6 bg-white/10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-white/50 text-sm">© 2026 ADMARKETING - Tous droits réservés</span>
          <a href="/#mentions-legales"
            className="font-inter text-white/55 text-sm hover:text-gold transition-colors duration-200">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}
