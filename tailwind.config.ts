import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        black: '#080808',
        background: '#FAFAFA',
        'background-2': '#F0F0F0',
        'card-bg': '#FFFFFF',
        'text-primary': '#080808',
        'text-secondary': '#444444',
        'text-muted': '#888888',
        border: '#E0E0E0',
      },
    },
  },
  plugins: [],
}

export default config
