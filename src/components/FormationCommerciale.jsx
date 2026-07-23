import { motion } from 'framer-motion'
import { ArrowLeft, Users, GraduationCap, Handshake, Clock, Award, BookOpen, Target } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Suspense } from 'react'

const constats = [
  { title: "Des méthodes datées", desc: "Les techniques apprises sur le tas ne suivent plus les cycles de décision actuels, plus longs et plus exigeants." },
  { title: "Un discours hétérogène", desc: "Chaque commercial improvise son argumentaire : le message envoyé au marché manque de cohérence et de force." },
  { title: "Des objections qui bloquent", desc: "Faute de préparation, les objections de prix ou de timing font échouer des ventes pourtant à portée." },
  { title: "Peu de suivi terrain", desc: "Sans ancrage post-formation, les bonnes pratiques s'estompent et les acquis se perdent en quelques semaines." },
]

const audience = [
  { icon: GraduationCap, label: "Dirigeants & fondateurs", desc: "Vous portez encore la vente vous-même et souhaitez structurer un discours commercial solide avant de déléguer." },
  { icon: Users, label: "Commerciaux juniors", desc: "Vous montez en compétence rapidement : bases de la prospection, de l'argumentaire et de la signature pour être opérationnel sans délai." },
  { icon: Target, label: "Commerciaux seniors", desc: "Vous perfectionnez la négociation avancée et la conclusion sur des cycles complexes et des interlocuteurs multiples." },
  { icon: Handshake, label: "Équipes en restructuration", desc: "Vous réalignez toute la force de vente sur une méthode commune, un langage partagé et des rituels de suivi clairs." },
]

const modules = [
  { n: '01', title: 'Prospection multicanale', desc: 'LinkedIn, e-mail, téléphone, événements : maîtrisez chaque canal et créez votre séquence optimale.' },
  { n: '02', title: 'Positionnement', desc: 'Formuler une proposition de valeur percutante et différenciante en moins de 60 secondes.' },
  { n: '03', title: 'Gestion des objections', desc: 'Anticiper, comprendre et retourner les objections les plus fréquentes de votre secteur.' },
  { n: '04', title: 'Techniques de conclusion', desc: '5 techniques de conclusion modernes et éthiques pour accélérer la prise de décision.' },
  { n: '05', title: 'Négociation avancée', desc: "Défendre sa valeur, gérer les demandes de remise, trouver l'accord gagnant-gagnant." },
  { n: '06', title: 'Suivi & fidélisation', desc: "Transformer un client en ambassadeur : rituels de suivi, ventes additionnelles et recommandation active." },
]

const stats = [
  { value: '+30 à +60%', label: 'Taux de conversion', sub: 'compétences ancrées durablement' },
  { value: '-25%', label: 'Temps de signature', sub: 'sur le cycle moyen' },
  { value: '+40%', label: 'Satisfaction équipe', sub: 'sur la confiance en vente' },
]

const deroule = [
  { n: '01', title: 'Diagnostic préalable', desc: "Analyse de votre process de vente, écoute d'appels et échanges avec l'équipe pour cibler les priorités et personnaliser le programme." },
  { n: '02', title: 'Sessions de formation', desc: "Apports théoriques structurés, cadres de vente éprouvés et démonstrations concrètes, en présentiel ou en distanciel selon la modalité choisie." },
  { n: '03', title: 'Mises en situation', desc: "Jeux de rôle, simulations d'appels et d'objections filmés puis débriefés : les acquis se travaillent sur des cas issus de votre réalité terrain." },
  { n: '04', title: "Plan d'action individuel", desc: "Chaque participant repart avec des objectifs concrets, ses axes de progression et les outils pour les appliquer dès le lendemain." },
  { n: '05', title: 'Suivi 30 jours', desc: "Une session de débriefing un mois après pour mesurer l'application terrain, lever les blocages et ancrer durablement les nouvelles pratiques." },
]

const formats = [
  { label: 'Présentiel', desc: 'Sessions dans vos locaux, format demi-journée ou journée complète avec exercices pratiques.' },
  { label: 'Distanciel', desc: "Ateliers en visioconférence, jusqu'à 12 participants, outils collaboratifs inclus." },
  { label: 'Hybride', desc: 'Combine présentiel et formation en ligne pour un ancrage durable des compétences.' },
  { label: 'Suivi 30j', desc: "Session de débriefing 30 jours après pour mesurer l'application terrain et ajuster." },
]

const inclus = [
  { icon: BookOpen, title: 'Supports pédagogiques', desc: "Fiches méthode, cadres de vente et modèles réutilisables remis à chaque participant pour prolonger la formation au quotidien." },
  { icon: Users, title: 'Coaching individuel', desc: "Des temps d'accompagnement personnalisés pour lever les blocages propres à chaque profil et accélérer la progression." },
  { icon: Clock, title: 'Accès aux ressources', desc: "Une bibliothèque de scripts, séquences de prospection et réponses aux objections, accessible en continu après la session." },
  { icon: Award, title: 'Attestation de formation', desc: "Une attestation de participation remise à l'issue du programme, valorisant les compétences acquises par vos équipes." },
]

const faqs = [
  { q: "Quelle est la durée d'une formation ?", a: "Le format se cale sur vos objectifs : d'une journée intensive à un parcours réparti sur plusieurs semaines. La durée est définie ensemble lors du diagnostic préalable, en fonction du niveau de l'équipe et des modules retenus." },
  { q: "Quelle est la taille de groupe idéale ?", a: "Nous recommandons des groupes de 4 à 12 participants pour préserver l'interactivité et la qualité des mises en situation. Au-delà, nous organisons plusieurs sessions afin que chacun bénéficie d'un temps de pratique suffisant." },
  { q: "La formation est-elle réellement sur-mesure ?", a: "Oui. Le programme est construit à partir de votre secteur, de votre offre et de vos cas de vente réels. Les exercices, scripts et objections travaillés sont ceux que vos équipes rencontrent effectivement sur le terrain." },
  { q: "La formation peut-elle être prise en charge (OPCO) ?", a: "Selon votre situation, une prise en charge par votre OPCO peut être envisageable. Nous vous orientons sur les démarches et fournissons les éléments nécessaires au montage du dossier, sans garantie d'éligibilité qui dépend de votre organisme." },
  { q: "Le format distanciel est-il aussi efficace ?", a: "Le distanciel s'appuie sur des outils collaboratifs et des mises en situation en direct pour conserver un fort niveau d'engagement. Pour un ancrage maximal, le format hybride combine sessions à distance et temps présentiels." },
]

export default function FormationCommerciale() {
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
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-4 block">Service 02</span>
            <h1 className="font-grotesk font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Formation <span className="text-gold">commerciale</span>
            </h1>
            <p className="font-inter text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
              Des programmes de formation sur-mesure pour transformer vos équipes de vente. Du théorique au terrain, avec un suivi post-formation pour ancrer les bonnes pratiques.
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

      {/* Constat / problème */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Le constat</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Pourquoi former votre force de vente</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
            <p className="font-inter text-white/45 text-sm leading-relaxed max-w-2xl mx-auto mt-6">
              La vente ne s'improvise plus. Les acheteurs sont mieux informés, les cycles plus longs et la concurrence plus vive. Sans méthode partagée, même une équipe motivée laisse échapper des opportunités.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {constats.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <h3 className="font-grotesk font-bold text-white mb-2">{c.title}</h3>
                <p className="font-inter text-white/45 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À qui s'adresse cette formation */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Public concerné</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">À qui s'adresse cette formation</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-5 items-start p-6 rounded-2xl"
                  style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <Icon size={20} color="#D4AF37" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-white mb-1">{a.label}</h3>
                    <p className="font-inter text-white/45 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6 modules */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Contenu</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">6 modules, de la prospection à la signature</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-5 items-start p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <span className="font-grotesk font-bold text-xl flex-shrink-0" style={{ color: 'rgba(212,175,55,0.4)' }}>{m.n}</span>
                <div>
                  <h3 className="font-grotesk font-bold text-white mb-1">{m.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé d'une formation type */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Méthode</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Le déroulé d'une formation type</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {deroule.map((d, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 items-start p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                <span className="font-grotesk font-bold text-2xl flex-shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }}>
                  {d.n}
                </span>
                <div>
                  <h3 className="font-grotesk font-bold text-white mb-1">{d.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Format</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white">Adapté à votre contexte</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                <span className="font-syne font-bold text-xs uppercase tracking-widest text-gold">{f.label}</span>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Inclus</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Ce qui est inclus dans le programme</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {inclus.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-5 items-start p-6 rounded-2xl"
                  style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.08)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <Icon size={20} color="#D4AF37" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-white mb-1">{item.title}</h3>
                    <p className="font-inter text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Résultats attendus</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white">Des repères de progression</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.12)' }}>
                <div className="font-grotesk font-bold text-4xl mb-2" style={{ color: '#D4AF37' }}>{s.value}</div>
                <div className="font-grotesk font-semibold text-white text-sm mb-1">{s.label}</div>
                <div className="font-inter text-white/35 text-xs">{s.sub}</div>
              </motion.div>
            ))}
          </div>
          <p className="font-inter text-white/20 text-xs text-center mt-6 italic">
            Repères indicatifs. Objectifs définis ensemble lors du cadrage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#0A0A0B' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Questions fréquentes</span>
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-4">Ce que vous voulez savoir</h2>
            <div className="mx-auto w-16 h-px bg-gold/40" />
          </motion.div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-2xl"
                style={{ background: '#141316', border: '1px solid rgba(212,175,55,0.1)' }}>
                <h3 className="font-grotesk font-bold text-white mb-2">{f.q}</h3>
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
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-4 block">Prêt à accélérer ?</span>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Faites monter vos équipes en compétence dès maintenant
            </h2>
            <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Un premier échange de 30 minutes pour comprendre le niveau de votre équipe et construire le programme de formation le plus adapté à vos objectifs.
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
