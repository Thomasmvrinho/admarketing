import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info } from 'lucide-react'

const BUDGET_STEPS = [500, 1000, 1500, 2000, 3000, 5000]

function formatTick(v) {
  if (v === 1500) return '1.5k€'
  if (v >= 1000) return `${v / 1000}k€`
  return `${v}€`
}

function formatBudgetDisplay(v) {
  return v.toLocaleString('fr-FR') + ' €'
}

export default function ROICalculator() {
  const [leads, setLeads] = useState('')
  const [conversion, setConversion] = useState('')
  const [marge, setMarge] = useState('')
  const [budgetIdx, setBudgetIdx] = useState(2)
  const [result, setResult] = useState(null)
  const [tooltip, setTooltip] = useState(false)

  const budget = BUDGET_STEPS[budgetIdx]
  const fillPct = (budgetIdx / (BUDGET_STEPS.length - 1)) * 100

  function calculate() {
    const l = parseFloat(leads)
    const t = parseFloat(conversion)
    const m = parseFloat(marge)
    if (!l || !t || !m) return

    const converted = l * (t / 100)
    const revenue = converted * m
    const gain = revenue - budget
    const roi = ((revenue - budget) / budget) * 100

    setResult({ converted, revenue, gain, roi })
  }

  function fmt(n) {
    if (Math.abs(n) >= 1000) return `${(n / 1000).toFixed(1)}k`
    return n.toFixed(0)
  }

  return (
    <section id="roi" className="py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Calculateur ROI</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
            Estimez votre <span className="text-gold">retour sur investissement</span>
          </h2>
          <div className="mx-auto w-20 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }} />
          <p className="font-inter text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            Entrez vos chiffres actuels et découvrez le gain que vous pouvez réaliser avec ADmarketing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-2 block">
                Leads générés / mois
              </label>
              <input
                type="number" min="0" placeholder="Ex : 50"
                value={leads}
                onChange={e => { setLeads(e.target.value); setResult(null) }}
                className="w-full px-4 py-4 rounded-xl font-inter text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200"
                style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.15)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.45)'}
                onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.15)'}
              />
            </div>
            <div>
              <label className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-2 block">
                Taux de conversion (%)
              </label>
              <input
                type="number" min="0" max="100" placeholder="Ex : 10"
                value={conversion}
                onChange={e => { setConversion(e.target.value); setResult(null) }}
                className="w-full px-4 py-4 rounded-xl font-inter text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200"
                style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.15)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.45)'}
                onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.15)'}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="mb-6">
            <label className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-2 flex items-center gap-2">
              Marge moyenne par client (€)
              <span className="relative" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>
                <Info size={13} className="text-white/30 hover:text-gold transition-colors" style={{ cursor: 'none' }} />
                <AnimatePresence>
                  {tooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg z-20 whitespace-nowrap"
                      style={{ background: '#1c1c1c', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                      <p className="font-inter text-white/60 text-xs normal-case tracking-normal font-normal">
                        Bénéfice moyen que vous réalisez sur chaque client signé.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            </label>
            <input
              type="number" min="0" placeholder="Ex : 2 000"
              value={marge}
              onChange={e => { setMarge(e.target.value); setResult(null) }}
              className="w-full px-4 py-4 rounded-xl font-inter text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200"
              style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.15)' }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.45)'}
              onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.15)'}
            />
          </div>

          {/* Budget slider */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.12)' }}>
            <div className="flex items-center justify-between mb-5">
              <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold">Budget mensuel envisagé</span>
              <span className="font-grotesk font-bold text-xl" style={{ color: '#D4AF37' }}>
                {formatBudgetDisplay(budget)}
                <span className="font-inter text-xs font-normal text-white/35 ml-1">/mois</span>
              </span>
            </div>

            <input
              type="range" min={0} max={BUDGET_STEPS.length - 1} step={1}
              value={budgetIdx}
              onChange={e => { setBudgetIdx(Number(e.target.value)); setResult(null) }}
              className="roi-slider w-full"
              style={{ '--fill': `${fillPct}%` }}
            />

            <div className="flex justify-between mt-2.5">
              {BUDGET_STEPS.map((v, i) => (
                <span key={v} className="font-inter text-xs transition-colors duration-200"
                  style={{ color: i === budgetIdx ? '#D4AF37' : 'rgba(255,255,255,0.22)', fontWeight: i === budgetIdx ? '600' : '400' }}>
                  {formatTick(v)}
                </span>
              ))}
            </div>

            <p className="font-inter text-white/25 text-xs italic mt-4">
              C'est ce que vous payez à ADmarketing chaque mois pour la prestation.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <motion.button
              onClick={calculate}
              className="px-12 py-4 rounded-xl font-grotesk font-bold text-base"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: '#050505' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 36px rgba(212,175,55,0.4)' }}
              whileTap={{ scale: 0.97 }}>
              Calculer mon ROI
            </motion.button>
          </div>

          {/* Results */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="mt-10 rounded-2xl p-px"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}>
                <div className="rounded-[14px] p-8" style={{ background: '#0d0d0d' }}>
                  <h3 className="font-grotesk font-bold text-white text-lg text-center mb-7">
                    Votre estimation ROI
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Clients / mois', value: result.converted.toFixed(1), suffix: '' },
                      { label: 'CA généré', value: fmt(result.revenue), suffix: '€' },
                      {
                        label: 'Gain net',
                        value: (result.gain >= 0 ? '+' : '') + fmt(result.gain),
                        suffix: '€',
                        colored: true,
                        positive: result.gain >= 0,
                      },
                      {
                        label: 'ROI',
                        value: (result.roi >= 0 ? '+' : '') + result.roi.toFixed(0),
                        suffix: '%',
                        colored: true,
                        positive: result.roi >= 0,
                      },
                    ].map((stat, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.35 }}
                        className="rounded-xl p-4 text-center"
                        style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.1)' }}>
                        <div className="font-grotesk font-bold text-2xl mb-1"
                          style={{ color: stat.colored ? (stat.positive ? '#D4AF37' : '#ef4444') : '#D4AF37' }}>
                          {stat.value}{stat.suffix}
                        </div>
                        <div className="font-inter text-white/35 text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-inter text-white/25 text-xs text-center mt-6 italic">
                    Estimation indicative basée sur vos données. Les résultats réels peuvent varier selon votre secteur et votre offre.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  )
}
