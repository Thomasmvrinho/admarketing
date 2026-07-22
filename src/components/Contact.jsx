import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, User, Handshake, ChevronDown } from 'lucide-react'

const labelClass = 'font-inter text-xs font-medium text-white/55 mb-2 block'
const fieldClass = 'w-full px-5 py-3.5 rounded-xl font-inter text-sm bg-white/5 border border-white/10 text-white placeholder-white/25 outline-none focus:border-gold transition-colors duration-200'
const selectClass = `${fieldClass} appearance-none cursor-pointer pr-11`

const initialForm = {
  name: '', email: '', phone: '', company: '',
  effectif: '', secteur: '', service: '', echeance: '', budget: '', website: '', message: '',
  botField: '',
}

const services = ['Apport d’affaires', 'Formation commerciale', 'Développement commercial', 'Plusieurs / je ne sais pas encore']
const effectifs = ['1 à 10', '11 à 50', '51 à 200', 'Plus de 200']
const echeances = ['Dès que possible', 'Sous 1 mois', 'Sous 3 mois', 'Simple prise d’information']
const budgets = ['À définir ensemble', 'Moins de 5 000 €', '5 000 à 15 000 €', '15 000 à 50 000 €', 'Plus de 50 000 €']

function Select({ label, name, value, onChange, options, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <div className="relative">
        <select
          id={name} name={name} value={value} onChange={onChange} required={required}
          style={{ colorScheme: 'dark' }}
          className={`${selectClass} ${value ? 'text-white' : 'text-white/25'}`}>
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((o) => <option key={o} value={o} className="text-white bg-ink-soft">{o}</option>)}
        </select>
        <ChevronDown size={16} strokeWidth={2} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form }),
      })
      if (!res.ok) throw new Error('request failed')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-ink-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Contact</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-3">Demandez votre devis</h2>
          <p className="font-inter text-white/45 max-w-md mx-auto text-sm">Plus votre demande est précise, plus notre réponse le sera. Premier échange gratuit et sans engagement, réponse sous 24h.</p>
          <div className="mx-auto mt-5 w-16 h-px bg-gold/40" />
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-14">
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl py-16"
                style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
                <Handshake size={44} strokeWidth={1.75} className="text-gold" />
                <h3 className="font-grotesk font-bold text-white text-xl">Demande reçue !</h3>
                <p className="font-inter text-white/50 text-sm max-w-xs">Merci. Nous revenons vers vous sous 24h pour préparer votre devis.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                {/* Honeypot anti-spam : caché, jamais rempli par un humain */}
                <input type="text" name="botField" value={form.botField} onChange={handleChange}
                  tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div>
                  <label htmlFor="name" className={labelClass}>Nom complet *</label>
                  <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jean Dupont" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email professionnel *</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jean@entreprise.fr" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Téléphone *</label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="06 12 34 56 78" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Entreprise *</label>
                  <input id="company" type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Nom de votre société" className={fieldClass} />
                </div>

                <Select label="Effectif de l'entreprise (optionnel)" name="effectif" value={form.effectif} onChange={handleChange} options={effectifs} placeholder="Sélectionnez" />
                <div>
                  <label htmlFor="secteur" className={labelClass}>Secteur d'activité (optionnel)</label>
                  <input id="secteur" type="text" name="secteur" value={form.secteur} onChange={handleChange} placeholder="Ex : industrie, conseil, immobilier..." className={fieldClass} />
                </div>

                <Select label="Service concerné *" name="service" value={form.service} onChange={handleChange} options={services} placeholder="Sélectionnez un service" required />
                <Select label="Échéance du projet (optionnel)" name="echeance" value={form.echeance} onChange={handleChange} options={echeances} placeholder="Sélectionnez" />

                <Select label="Budget envisagé (optionnel)" name="budget" value={form.budget} onChange={handleChange} options={budgets} placeholder="Sélectionnez une fourchette" />
                <div>
                  <label htmlFor="website" className={labelClass}>Site web (optionnel)</label>
                  <input id="website" type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://votre-site.fr" className={fieldClass} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>Votre besoin et vos objectifs *</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Décrivez votre situation, ce que vous cherchez à atteindre, et tout élément utile pour cadrer votre devis." className={`${fieldClass} resize-none`} />
                </div>

                {error && <p className="sm:col-span-2 font-inter text-red-400 text-sm text-center">Une erreur est survenue. Réessayez ou écrivez-nous à contact@ad-marketing.pro.</p>}

                <motion.button type="submit" disabled={loading}
                  className="sm:col-span-2 w-full py-4 rounded-xl font-inter font-semibold bg-gold text-ink hover:bg-gold-deep transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={{ y: loading ? 0 : -2 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}>
                  <Send size={17} />
                  {loading ? 'Envoi en cours...' : 'Demander mon devis'}
                </motion.button>
                <p className="sm:col-span-2 font-inter text-white/30 text-xs text-center">
                  Vos informations sont utilisées uniquement pour traiter votre demande.
                </p>
              </form>
            )}
          </motion.div>
          <motion.div className="flex flex-col justify-center gap-9"
            initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {[
              { Icon: User, label: 'Contact', value: 'Adrien Lafarge', href: null },
              { Icon: Mail, label: 'Email', value: 'contact@ad-marketing.pro', href: 'mailto:contact@ad-marketing.pro' },
              { Icon: Phone, label: 'Téléphone', value: '06 67 40 53 51', href: 'tel:+33667405351' },
              { Icon: MapPin, label: 'Localisation', value: 'France - Intervention nationale & internationale', href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <Icon size={19} color="#D4AF37" />
                </div>
                <div>
                  <div className="font-syne font-semibold text-white/40 text-[11px] uppercase tracking-widest mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-inter text-white/80 hover:text-gold transition-colors text-sm">{value}</a>
                  ) : (
                    <span className="font-inter text-white/80 text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}
            <div>
              <div className="font-syne font-semibold text-white/40 text-[11px] uppercase tracking-widest mb-4">Réseaux sociaux</div>
              <div className="flex gap-3">
                <motion.a href="https://www.linkedin.com/in/adrien-lafarge-91585b319/"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white/40 hover:text-gold transition-colors"
                    style={{ border: '1px solid rgba(212,175,55,0.15)' }}
                    whileHover={{ scale: 1.1, y: -2 }} aria-label="LinkedIn">
                    <Linkedin size={19} />
                  </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
