const items = [
  "Apport d'Affaires", 'Formation Commerciale', 'Développement Commercial',
  'Mise en Relation', 'Leads B2B Qualifiés', 'Prospection', 'Structuration de la Vente', 'Audit Commercial',
  "Apport d'Affaires", 'Formation Commerciale', 'Développement Commercial',
  'Mise en Relation', 'Leads B2B Qualifiés', 'Prospection', 'Structuration de la Vente', 'Audit Commercial',
]

export default function Marquee() {
  return (
    <div className="bg-ink-soft py-5 overflow-hidden border-y border-white/5">
      <div className="flex items-center gap-8 whitespace-nowrap"
        style={{ width: 'max-content', animation: 'marquee 35s linear infinite', willChange: 'transform' }}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-syne font-semibold uppercase tracking-widest text-sm text-white/30">
              {item}
            </span>
            <span className="text-gold text-base select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
