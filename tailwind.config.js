/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Or — identité de marque. Mat et retenu, sans dégradé clinquant.
        gold: '#D4AF37',
        'gold-deep': '#A8842A',   // hover / bordures : or plus profond
        'gold-light': '#E5C158',  // réservé aux rares dégradés intentionnels
        // Noir nuancé + niveaux d'élévation pour la profondeur
        ink: '#0A0A0B',           // fond de base
        'ink-soft': '#141316',    // surface élevée (bandeaux, cartes sombres)
        'ink-raise': '#1E1C20',   // élévation supérieure
        // Sections claires — blanc chaud discret qui accompagne l'or
        cloud: '#F5F4F1',
        'cloud-soft': '#FBFAF8',
        muted: '#A1A1AA',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // Ombres teintées, jamais du noir pur
        soft: '0 1px 2px rgba(10,10,11,0.06), 0 8px 24px rgba(10,10,11,0.06)',
        lift: '0 2px 4px rgba(10,10,11,0.08), 0 24px 60px rgba(10,10,11,0.12)',
        'dark-soft': '0 1px 2px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
