import { motion } from 'framer-motion'
import { Check, ArrowLeft, Target, TrendingUp, Users, Clock, Shield, BarChart3, Handshake } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Suspense } from 'react'

const constats = [
  {
    title: "Une croissance dépendante du bouche-à-oreille",
    desc: "Vos ventes reposent sur la recommandation et les opportunités entrantes. Un modèle confortable, mais imprévisible et impossible à piloter dès que vous voulez accélérer.",
  },
  {
    title: "Aucun processus de vente formalisé",
    desc: "Chaque commercial vend à sa manière, sans étapes communes ni indicateurs partagés. Résultat : des cycles qui traînent, des affaires perdues sans savoir pourquoi.",
  },
  {
    title: "Un plafond de verre sur le chiffre",
    desc: "Vous avez atteint un palier que l'effort seul ne dépasse plus. Sans structure ni méthode, chaque nouveau client coûte de plus en plus cher à acquérir.",
  },
]

const reperes = [
  { icon: Clock, value: "3 à 6 mois", label: "Structuration complète", sub: "de l'audit au pilotage autonome" },
  { icon: Target, value: "+1 canal", label: "Acquisition maîtrisée", sub: "au-delà du bouche-à-oreille" },
  { icon: TrendingUp, value: "x2", label: "Visibilité du pipeline", sub: "sur les affaires en cours" },
  { icon: BarChart3, value: "100%", label: "Décisions pilotées", sub: "par des indicateurs suivis" },
]

const pourQui = [
  "Pas encore d'équipe commerciale dédiée",
  "Croissance basée uniquement sur le bouche-à-oreille",
  "Besoin de structurer avant de recruter",
  "Équipe existante sans processus clairs",
  "Entrée sur un nouveau marché ou lancement d'offre",
  "Croissance souhaitée sans augmenter la masse salariale",
]

const livrables = [
  { title: "Rapport d'audit commercial", desc: "Diagnostic complet de votre situation actuelle avec identification des axes prioritaires." },
  { title: "Stratégie de mise sur le marché", desc: "Cible, canaux, proposition de valeur et feuille de route 12 mois adaptés à votre marché." },
  { title: "Guide de vente", desc: "Scripts, modèles d'e-mails, réponses aux objections - tout ce qu'il faut pour vendre." },
  { title: "CRM configuré", desc: "Outil opérationnel dès le premier jour, paramétré selon vos process et vos étapes de vente." },
  { title: "Tableau de bord d'indicateurs sur-mesure", desc: "Indicateurs de performance personnalisés avec revues régulières pour piloter la croissance." },
  { title: "Accompagnement terrain", desc: "Suivi hebdomadaire au démarrage pour ancrer les nouvelles pratiques dans la durée." },
]

const phases = [
  { n: '01', title: "Audit commercial", desc: "Analyse 360° de votre situation : offre, cibles, canaux, process et résultats actuels." },
  { n: '02', title: "Stratégie de mise sur le marché", desc: "Définition des cibles prioritaires, canaux d'acquisition, proposition de valeur et tarification." },
  { n: '03', title: "Mise en place des outils", desc: "Configuration du CRM, des modèles et des outils de suivi pour industrialiser votre vente." },
  { n: '04', title: "Activation & accompagnement", desc: "Déploiement sur le terrain avec suivi hebdomadaire pour ajuster en temps réel." },
  { n: '05', title: "Pilotage & itérations", desc: "Revues KPI mensuelles et optimisations continues pour accélérer les résultats." },
]

const modalites = [
  { icon: Clock, label: "Durée type", desc: "Un accompagnement de 3 à 6 mois selon la maturité de votre organisation et l'ampleur des chantiers à mener." },
  { icon: Users, label: "Format", desc: "Un binôme de travail rapproché : ateliers réguliers, points hebdomadaires au démarrage puis mensuels en pilotage." },
  { icon: Handshake, label: "Engagement", desc: "Un cadre clair défini dès le départ : objectifs, livrables et jalons partagés, sans clause d'exclusivité contraignante." },
  { icon: Shield, label: "Réversibilité", desc: "Vous restez propriétaire de vos outils, données et méthodes. Tout est documenté pour une internalisation totale à terme." },
]

const inclus = [
  "Diagnostic et cadrage initial offerts",
  "Accès à nos cadres et méthodes de vente",
  "Configuration des outils sur votre environnement",
  "Formation de vos équipes aux nouvelles pratiques",
  "Revues de performance régulières",
  "Documentation complète pour l'autonomie",
]

const faq = [
  {
    q: "Combien de temps dure un accompagnement ?",
    a: "En général de 3 à 6 mois. Les premières semaines sont consacrées à l'audit et à la stratégie, le reste au déploiement des outils et à l'accompagnement terrain. La durée exacte dépend de votre point de départ et de vos objectifs.",
  },
  {
    q: "Faut-il internaliser ou externaliser sa force commerciale ?",
    a: "Notre rôle n'est pas de vous rendre dépendant. Nous structurons votre développement commercial pour que vos équipes gagnent en autonomie. Beaucoup de clients utilisent cet accompagnement comme une étape avant de recruter et de piloter en interne.",
  },
  {
    q: "Travaillez-vous avec tous les secteurs ?",
    a: "Nous intervenons principalement auprès de PME et d'entreprises B2B à cycle de vente structuré. La méthode s'adapte à votre marché : nous commençons toujours par comprendre votre offre, vos cibles et vos spécificités avant toute recommandation.",
  },
  {
    q: "Quel retour sur investissement puis-je attendre ?",
    a: "Le ROI se mesure sur la valeur créée : un pipeline plus lisible, des cycles de vente raccourcis et une acquisition moins dépendante du hasard. Nous définissons ensemble des indicateurs de suivi dès le cadrage pour objectiver les résultats.",
  },
  {
    q: "Comment mesure-t-on la progression ?",
    a: "Notre priorité est de rendre votre organisation lisible et pilotable : un pipeline clair, des process partagés et des outils opérationnels. Nous avançons par jalons définis ensemble et suivons les indicateurs à chaque étape, en concentrant l'effort sur la méthode plutôt que sur des promesses de calendrier.",
  },
]

export default function DeveloppementCommercial() {
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
            className="inline-flex items-center gap-2 font-inter text-sm text-white/40 hover:text-gold transition-colors mb-10 cursor-pointer">
            <ArrowLeft size={15} /> Retour
          </motion.a>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-4 block">Service 03</span>
            <h1 className="font-grotesk font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Développement <span className="text-gold">commercial</span>
            </h1>
            <p className="font-inter text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
              Nous co-construisons et déployons votre stratégie commerciale de A à Z. De l'audit initial au pilotage des KPI, ADMARKETING devient votre partenaire de croissance sur-mesure.
            </p>
            <motion.button
              onClick={goContact}
              className="px-8 py-4 rounded-xl font-inter font-semibold text-base bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}>
              Demander un audit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Le constat */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Le constat</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Pourquoi structurer sa vente devient vital</h2>
            <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
            <p className="font-inter text-white/45 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              La plupart des entreprises ne perdent pas des ventes par manque de talent, mais par manque de méthode. Voici les signaux qui indiquent qu'il est temps de professionnaliser votre développement commercial.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {constats.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <span className="font-grotesk font-bold text-2xl block mb-4" style={{ color: 'rgba(212,175,55,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-grotesk font-bold text-white mb-2 leading-snug">{c.title}</h3>
                <p className="font-inter text-white/45 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Pour qui ?</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Ce service est fait pour vous si…</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pourQui.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 p-5 rounded-xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold">
                  <Check size={11} strokeWidth={3} color="#0A0A0B" />
                </div>
                <span className="font-inter text-white/70 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche en chiffres */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Notre approche en chiffres</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Des repères pour se projeter</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {reperes.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="text-center p-7 rounded-2xl"
                  style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.12)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}>
                    <Icon size={18} color="#D4AF37" strokeWidth={1.8} />
                  </div>
                  <div className="font-grotesk font-bold text-3xl mb-2" style={{ color: '#D4AF37' }}>{r.value}</div>
                  <div className="font-grotesk font-semibold text-white text-sm mb-1">{r.label}</div>
                  <div className="font-inter text-white/35 text-xs leading-relaxed">{r.sub}</div>
                </motion.div>
              )
            })}
          </div>
          <p className="font-inter text-white/20 text-xs text-center mt-6 italic">
            Repères indicatifs. Objectifs définis ensemble lors du cadrage.
          </p>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Livrables</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Ce que vous recevez concrètement</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {livrables.map((l, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-5 items-start p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold">
                  <Check size={11} strokeWidth={3} color="#0A0A0B" />
                </div>
                <div>
                  <h3 className="font-grotesk font-bold text-white mb-1">{l.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Notre Méthode</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">5 phases pour structurer votre croissance</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {phases.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 items-start p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <span className="font-grotesk font-bold text-2xl flex-shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }}>
                  {p.n}
                </span>
                <div>
                  <h3 className="font-grotesk font-bold text-white mb-1">{p.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités d'accompagnement */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Modalités d'accompagnement</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Un cadre clair, sans engagement piégeux</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {modalites.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 items-start p-6 rounded-2xl"
                  style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}>
                    <Icon size={18} color="#D4AF37" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="font-syne font-bold text-xs uppercase tracking-widest text-gold block mb-2">{m.label}</span>
                    <p className="font-inter text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-7 rounded-2xl"
            style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.12)' }}>
            <span className="font-syne font-bold text-xs uppercase tracking-widest text-gold block mb-5">Ce qui est inclus</span>
            <div className="grid sm:grid-cols-2 gap-3">
              {inclus.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold">
                    <Check size={11} strokeWidth={3} color="#0A0A0B" />
                  </div>
                  <span className="font-inter text-white/55 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Questions fréquentes</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Tout ce que vous vous demandez</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <h3 className="font-grotesk font-bold text-white mb-2 leading-snug">{f.q}</h3>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{f.a}</p>
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
                className="px-8 py-4 rounded-xl font-inter font-semibold text-sm text-white/90 border border-white/15 transition-colors duration-300 hover:border-gold/60 hover:text-gold"
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
