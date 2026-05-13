
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' based on your preference
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
        mono: ['Fira Code', 'JetBrains Mono', 'Source Code Pro', 'monospace'],
      },
      colors: {
        'main-dark': '#0F172A',
        'secondary-dark': '#1E293B',
        'accent-sky': '#38BDF8',
        'accent-yellow': '#FACC15',
        'accent-red': '#F87171',
        'accent-green': '#4ADE80',
        'text-dark-main': '#E2E8F0', // Text on dark backgrounds
        'text-light-main': '#1E293B', // Text on light backgrounds
      },
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" } // Adjust color based on theme
        },
        glitch: {
          '0%': { transform: 'translate(0)', textShadow: 'none' },
          '10%': { transform: 'translate(-2px, -2px)', textShadow: '1px 1px 0 #F87171, -1px -1px 0 #38BDF8' },
          '20%': { transform: 'translate(2px, -2px)', textShadow: '-1px 1px 0 #F87171, 1px -1px 0 #38BDF8' },
          '30%': { transform: 'translate(-2px, 2px)', textShadow: '1px -1px 0 #F87171, -1px 1px 0 #38BDF8' },
          '40%': { transform: 'translate(2px, 2px)', textShadow: '-1px -1px 0 #F87171, 1px 1px 0 #38BDF8' },
          '50%': { transform: 'translate(0)', textShadow: '1px 0 0 #F87171, 0 1px 0 #38BDF8, -1px 0 0 #38BDF8, 0 -1px 0 #F87171' },
          '60%': { transform: 'translate(-1px, 1px) skewX(5deg) skewY(1deg)', textShadow: 'none' },
          '70%': { transform: 'translate(1px, -1px) skewX(-5deg) skewY(-1deg)', textShadow: '2px 2px 0px #38BDF8, -2px -2px 0px #F87171' },
          '80%': { transform: 'translate(0,0) skewX(0) skewY(0)', textShadow: '1px 1px 0 #FACC15' },
          '90%': { transform: 'translate(0,0)', textShadow: 'none' },
          '100%': { transform: 'translate(0)', textShadow: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowingEyes: {
          '0%, 100%': { boxShadow: '0 0 5px #F87171, 0 0 10px #F87171, 0 0 15px #F87171' },
          '50%': { boxShadow: '0 0 10px #F87171, 0 0 20px #F87171, 0 0 30px #F87171, 0 0 40px #ef4444' },
        }
      },
      animation: {
        typing: "typing 2s steps(20) forwards, blink .5s infinite",
        glitch: 'glitch 0.3s linear', // duration can be adjusted
        float: 'float 6s ease-in-out infinite',
        glowingEyes: 'glowingEyes 1.5s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
};