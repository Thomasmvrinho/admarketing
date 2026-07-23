import { motion } from 'framer-motion'
import { ArrowLeft, Target, Users, Clock, Shield, BarChart3, Handshake, TrendingUp, Zap } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Suspense } from 'react'

const gains = [
  { icon: Zap, text: "Zéro prospection à froid pour vos équipes" },
  { icon: Target, text: "Leads qualifiés sur vos critères précis" },
  { icon: Clock, text: "Gain de temps commercial significatif" },
  { icon: Handshake, text: "Rémunération flexible : fixe + succès" },
  { icon: Users, text: "Réseau partenaires multi-secteurs" },
  { icon: BarChart3, text: "Reporting mensuel transparent" },
]

const stats = [
  { value: "~40%", label: "du temps commercial absorbé par la prospection à froid" },
  { value: "2-5%", label: "de transformation sur des leads froids non qualifiés" },
  { value: "100%", label: "de leads qualifiés avant transmission" },
  { value: "x3", label: "de temps rendu à la conclusion des ventes plutôt qu'à la recherche" },
]

const steps = [
  { n: '01', title: 'Audit & ciblage client idéal (ICP)', desc: "Nous définissons ensemble votre client idéal (ICP) et vos critères de qualification : secteur, taille, zone, signaux d'achat." },
  { n: '02', title: 'Identification via réseau', desc: "Activation du réseau de partenaires ADMARKETING et prospection ciblée pour identifier les prospects réellement pertinents pour votre offre." },
  { n: '03', title: 'Qualification BANT', desc: "Chaque lead est qualifié sur les critères BANT (budget, autorité, besoin, timing) avant de vous être transmis. Aucun contact au hasard." },
  { n: '04', title: 'Mise en relation', desc: "Transmission du contact qualifié avec son contexte complet et un brief de présentation, pour un premier échange commercial optimal." },
  { n: '05', title: 'Suivi & reporting', desc: "Reporting mensuel des leads transmis, du taux de transformation et des ajustements de ciblage pour améliorer la performance en continu." },
]

const remuneration = [
  { title: 'Une part fixe maîtrisée', desc: "Un forfait clair couvre le travail d'identification et de qualification. Vous connaissez votre investissement à l'avance, sans mauvaise surprise." },
  { title: 'Une commission au succès', desc: "Une part variable n'est due qu'en cas de mise en relation aboutie sur vos critères. Nos intérêts sont alignés sur les vôtres : votre croissance." },
  { title: 'Zéro engagement caché', desc: "Modalités transparentes, définies au démarrage et formalisées par écrit. Vous gardez la main sur le rythme et le volume de leads." },
]

const secteurs = [
  { title: 'Services aux entreprises', desc: "Conseil, agences, prestataires IT, services financiers et juridiques." },
  { title: 'Industrie & BTP', desc: "Fabricants, sous-traitants, fournisseurs d'équipements et acteurs de la construction." },
  { title: 'Tech & SaaS', desc: "Éditeurs de logiciels, solutions B2B et prestataires technologiques." },
  { title: 'Immobilier & patrimoine', desc: "Promotion, gestion, investissement et conseil patrimonial." },
  { title: 'Profils décisionnaires', desc: "Dirigeants, directions commerciales, achats et opérations." },
  { title: 'PME & ETI en croissance', desc: "Structures cherchant à ouvrir de nouveaux comptes sans alourdir leur masse salariale." },
]

const faq = [
  {
    q: "Combien coûte l'apport d'affaires ?",
    a: "La rémunération combine une part fixe maîtrisée et une commission au succès. Le montant dépend de votre secteur, de la complexité de la cible et du volume souhaité. Tout est chiffré et formalisé avant de démarrer, sans coût caché.",
  },
  {
    q: "Les leads qui me sont transmis sont-ils exclusifs ?",
    a: "Oui. Un lead qualifié transmis dans le cadre de votre mission vous est réservé sur votre périmètre. Nous ne revendons pas le même contact à un concurrent direct positionné sur la même offre.",
  },
  {
    q: "Sous quel délai vais-je recevoir les premiers leads ?",
    a: "La phase d'audit et de ciblage client idéal (ICP) prend généralement quelques jours. Les premières mises en relation qualifiées interviennent ensuite progressivement, le temps d'activer le réseau et de valider chaque contact sur vos critères.",
  },
  {
    q: "Quelle garantie ai-je sur la qualité des leads ?",
    a: "Chaque lead passe par une qualification BANT (budget, autorité, besoin, timing) avant transmission. Un contact hors critères n'est pas facturé au succès. Le reporting mensuel vous permet de suivre la qualité et d'ajuster le ciblage.",
  },
  {
    q: "Suis-je engagé sur une longue durée ?",
    a: "Non. Les modalités sont définies avec vous et vous gardez la main sur le rythme et le volume. L'objectif est de créer une relation de partenariat durable, pas de vous enfermer dans un engagement contraignant.",
  },
]

export default function ApportAffaires() {
  function goHome() {
    window.location.hash = ''
    window.history.replaceState(null, '', '/')
    window.location.reload()
  }

  function goContact() {
    goHome()
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <div className="bg-ink min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 60% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto">
          <motion.a
            href="/#home"
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-inter text-sm text-white/40 hover:text-gold transition-colors mb-10 cursor-pointer"
          >
            <ArrowLeft size={15} /> Retour
          </motion.a>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-4 block">Service 01</span>
            <h1 className="font-grotesk font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Apport <span className="text-gold">d'affaires</span>
            </h1>
            <p className="font-inter text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
              Nous alimentons votre pipeline avec des prospects B2B qualifiés, prêts à entrer en conversation commerciale. Vous vous concentrez sur la conclusion des ventes, nous gérons la mise en relation et la génération de leads.
            </p>
            <motion.button
              onClick={goContact}
              className="px-8 py-4 rounded-xl font-inter font-semibold text-base bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}>
              Demander un devis
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Le Problème */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-4 block">Le Problème</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-6 leading-snug">
              La prospection prend trop de temps à vos équipes
            </h2>
            <div className="w-16 h-px bg-gold/40 mb-6" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5">
            <p className="font-inter text-white/55 text-sm leading-relaxed">
              En B2B, un commercial passe en moyenne <span className="text-gold font-semibold">40% de son temps</span> à prospecter, pour un taux de transformation sur leads froids de <span className="text-gold font-semibold">2 à 5%</span>. C'est du temps précieux qui n'est pas consacré à la vente.
            </p>
            <p className="font-inter text-white/55 text-sm leading-relaxed">
              ADMARKETING externalise cette phase et vous livre des leads déjà qualifiés, ce qui libère vos commerciaux pour ce qu'ils font de mieux : convaincre et conclure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Chiffres clés</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Les repères qui changent la donne</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl text-center"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                <div className="font-grotesk font-bold text-3xl md:text-4xl mb-2"
                  style={{ color: '#D4AF37' }}>{s.value}</div>
                <p className="font-inter text-white/45 text-xs leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/35 text-xs text-center mt-8">
            Repères indicatifs. Vos objectifs sont définis ensemble lors du cadrage.
          </motion.p>
        </div>
      </section>

      {/* Ce que vous gagnez */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Ce que vous gagnez</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Des résultats concrets, sans prospection à froid</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gains.map((gain, i) => {
              const Icon = gain.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-5 rounded-xl"
                  style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <Icon size={15} color="#D4AF37" />
                  </div>
                  <span className="font-inter text-white/70 text-sm leading-relaxed mt-1">{gain.text}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Secteurs & profils couverts */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Notre Réseau</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Secteurs & profils couverts</h2>
            <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
            <p className="font-inter text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Un réseau de partenaires B2B multi-secteurs, orienté décideurs. Votre cible n'y figure pas ? Nous activons une prospection dédiée à votre marché.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {secteurs.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <Users size={15} color="#D4AF37" />
                </div>
                <h3 className="font-grotesk font-bold text-white text-base mb-1">{s.title}</h3>
                <p className="font-inter text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Notre Méthode</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Le déroulé en 5 étapes</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 items-start p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <span className="font-grotesk font-bold text-2xl flex-shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }}>
                  {step.n}
                </span>
                <div>
                  <h3 className="font-grotesk font-bold text-white mb-1">{step.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Le modèle de rémunération */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Rémunération</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Un modèle transparent : fixe + succès</h2>
            <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
            <p className="font-inter text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Pas de boîte noire. Notre rémunération est pensée pour aligner nos intérêts sur votre croissance : nous gagnons vraiment quand vous générez de nouvelles opportunités.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {remuneration.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <TrendingUp size={17} color="#D4AF37" />
                </div>
                <h3 className="font-grotesk font-bold text-white mb-2">{r.title}</h3>
                <p className="font-inter text-white/45 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-start gap-3 p-6 rounded-2xl"
            style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <Shield size={15} color="#D4AF37" />
            </div>
            <p className="font-inter text-white/55 text-sm leading-relaxed mt-1">
              Les conditions exactes sont définies ensemble lors du cadrage et formalisées par écrit avant tout démarrage. Vous savez précisément ce que vous payez, et pourquoi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Questions fréquentes</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Vos objections, nos réponses</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <h3 className="font-grotesk font-bold text-white mb-2">{item.q}</h3>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-4 block">Prêt à accélérer ?</span>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Transformez votre développement commercial dès maintenant
            </h2>
            <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Un premier échange de 30 minutes pour comprendre vos enjeux et identifier les leviers les plus impactants pour votre croissance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={goContact}
                className="px-8 py-4 rounded-xl font-inter font-semibold text-sm bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}>
                Demander un devis gratuit
              </motion.button>
              <motion.button
                onClick={() => { goHome(); setTimeout(() => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' }), 400) }}
                className="px-8 py-4 rounded-xl font-inter font-semibold text-sm border border-white/15 text-white/90 transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}>
                Estimer mon potentiel de CA
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}