/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030508',
          900: '#06080f',
          850: '#0a0d16',
          800: '#0f1420',
          700: '#171f30',
          600: '#222d42',
        },
        cyber: {
          cyan: '#00f2fe',
          sky: '#38bdf8',
          blue: '#3b82f6',
          emerald: '#10b981',
          purple: '#a855f7',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(0, 242, 254, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
