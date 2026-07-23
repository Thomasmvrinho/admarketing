import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const sections = [
  {
    title: 'Éditeur du site',
    content: [
      'Le site ad-marketing.pro est édité par :',
      '',
      'AD MARKETING',
      '88 Cours de la Martinique',
      '33000 Bordeaux - France',
      'SIREN : 102 519 725',
      'E-mail : contact@ad-marketing.pro',
      'Téléphone : 06 67 40 53 51',
      '',
      'Directeur de la publication : Adrien Lafarge',
      'Conception et réalisation technique : Thomasmvrinho',
    ],
  },
  {
    title: 'Hébergement',
    content: [
      'Le site est hébergé par :',
      '',
      'Vercel Inc.',
      '340 S Lemon Ave #4133',
      'Walnut, CA 91789 - États-Unis',
      'Site : vercel.com',
    ],
  },
  {
    title: 'Responsable du traitement',
    content: [
      'Le responsable du traitement des données personnelles collectées sur le site ad-marketing.pro est :',
      '',
      'AD MARKETING',
      '88 Cours de la Martinique',
      '33000 Bordeaux - France',
      'SIREN : 102 519 725',
      'E-mail : contact@ad-marketing.pro',
      'Téléphone : 06 67 40 53 51',
    ],
  },
  {
    title: 'Données collectées',
    content: ["Dans le cadre de l'utilisation du site, les données suivantes peuvent être collectées :"],
    rights: [
      'Nom et prénom',
      'Adresse e-mail',
      'Numéro de téléphone',
      "Nom de l'entreprise",
      'Contenu des messages envoyés via les formulaires',
      'Adresse IP',
      'Données de navigation et statistiques de visite',
    ],
  },
  {
    title: 'Finalités du traitement',
    content: ['Les données personnelles sont collectées afin de :'],
    rights: [
      'Répondre aux demandes de contact',
      'Établir des devis',
      'Assurer le suivi commercial des prospects et clients',
      'Améliorer les services proposés',
      'Réaliser des statistiques de fréquentation du site',
      'Respecter les obligations légales et réglementaires',
    ],
  },
  {
    title: 'Base légale du traitement',
    content: ['Les traitements réalisés reposent sur :'],
    rights: [
      "Le consentement de l'utilisateur",
      "L'exécution de mesures précontractuelles à la demande de l'utilisateur",
      "L'intérêt légitime de AD MARKETING pour le développement de son activité",
    ],
  },
  {
    title: 'Destinataires des données',
    content: [
      'Les données collectées sont exclusivement destinées à AD MARKETING.',
      '',
      "Elles peuvent également être traitées par des prestataires techniques intervenant pour l'hébergement du site ou les outils de mesure d'audience, dans le strict cadre de leurs missions.",
      '',
      "Aucune donnée personnelle n'est vendue ou cédée à des tiers.",
    ],
  },
  {
    title: 'Durée de conservation',
    content: ['Les données sont conservées :'],
    rights: [
      "Jusqu'à 3 ans après le dernier contact pour les prospects",
      'Pendant la durée de la relation commerciale puis conformément aux obligations légales pour les clients',
    ],
  },
  {
    title: 'Sécurité des données',
    content: [
      'AD MARKETING met en œuvre toutes les mesures techniques et organisationnelles raisonnables afin de garantir la sécurité et la confidentialité des données personnelles collectées.',
    ],
  },
  {
    title: 'Vos droits',
    content: ['Conformément au RGPD, vous disposez des droits suivants :'],
    rights: [
      "Droit d'accès",
      'Droit de rectification',
      "Droit à l'effacement",
      "Droit d'opposition",
      'Droit à la limitation du traitement',
      'Droit à la portabilité des données',
    ],
    after: [
      'Pour exercer ces droits :',
      '',
      'contact@ad-marketing.pro',
      '',
      "Une réponse sera apportée dans un délai maximal d'un mois.",
    ],
  },
  {
    title: 'Réclamation auprès de la CNIL',
    content: [
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à :",
      '',
      "CNIL (Commission Nationale de l'Informatique et des Libertés)",
      '3 Place de Fontenoy, TSA 80715',
      '75334 Paris Cedex 07',
      'Site : www.cnil.fr',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Le site utilise uniquement des cookies techniques strictement nécessaires à son bon fonctionnement.',
      '',
      "La mesure d'audience est assurée par Vercel Analytics, un outil respectueux de la vie privée qui ne dépose aucun cookie et ne collecte pas de données identifiantes ni à des fins publicitaires.",
      '',
      "Aucun cookie publicitaire ou de suivi tiers n'est utilisé. En l'absence de cookies non essentiels, aucun bandeau de consentement n'est requis.",
      '',
      'Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer les cookies.',
    ],
  },
]

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.a
          href="#home"
          onClick={() => { window.location.hash = '' }}
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-12 font-inter text-sm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft size={16} />
          Retour au site
        </motion.a>

        <motion.h1
          className="font-syne text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Mentions légales &{' '}
          <span className="text-gold">confidentialité</span>
        </motion.h1>

        <motion.div
          className="h-px w-16 mb-12 bg-gold/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <h2 className="font-grotesk text-lg font-semibold text-gold mb-4">
                {section.title}
              </h2>
              <div className="rounded-xl p-6 space-y-1 bg-ink-soft border border-white/10">
                {section.content.map((line, j) =>
                  line === '' ? (
                    <div key={j} className="h-3" />
                  ) : (
                    <p key={j} className="font-inter text-sm text-white/70 leading-relaxed">
                      {line}
                    </p>
                  )
                )}
                {section.rights && (
                  <ul className="space-y-1 pl-4 my-2">
                    {section.rights.map((right) => (
                      <li key={right} className="font-inter text-sm text-white/70 flex items-start gap-2">
                        <span className="text-gold mt-1.5 text-xs">▸</span>
                        {right}
                      </li>
                    ))}
                  </ul>
                )}
                {section.after?.map((line, j) =>
                  line === '' ? (
                    <div key={j} className="h-3" />
                  ) : (
                    <p key={j} className="font-inter text-sm text-white/70 leading-relaxed">
                      {line}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <span className="font-inter text-white/25 text-sm">© 2026 ADMARKETING - Tous droits réservés</span>
        </div>
      </div>
    </div>
  )
}
