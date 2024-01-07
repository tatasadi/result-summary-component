import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',

        // gradients
        'light-slate-blue-bg': 'hsl(252, 100%, 67%)', // Background
        'light-royal-blue-bg': 'hsl(241, 81%, 54%)', // Background
        'violet-blue-circle': 'hsla(256, 72%, 46%, 1)', // Circle
        'persian-blue-circle': 'hsla(241, 72%, 46%, 0)', // Circle

        // Neutral
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
    },
    fontFamily: {
      'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
