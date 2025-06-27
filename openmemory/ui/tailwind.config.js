/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['var(--font-merriweather)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'noto-sans': ['var(--font-noto-sans)', 'sans-serif'],
      },
      colors: {
        // Echo Primary Colors
        'echo-primary-dark': '#1C2F72',
        'echo-primary-blue': '#1C8BF1', 
        'echo-primary-light': '#E1EAF9',
        
        // Echo Secondary Colors
        'echo-secondary-teal': '#25997F',
        'echo-secondary-orange': '#F26B22',
        'echo-secondary-yellow': '#FFC930',
        
        // Echo Neutral Colors
        'echo-neutral-dark': '#333333',
        'echo-neutral-warm': '#F9F5EE',
        'echo-neutral-white': '#FFFEF9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'echo-gradient': 'linear-gradient(135deg, #1C8BF1, #1C2F72)',
        'echo-warm-gradient': 'linear-gradient(135deg, #FFFEF9, #F9F5EE, #E1EAF9)',
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'echo-soft': '0 4px 12px rgba(28, 139, 241, 0.15)',
        'echo-strong': '0 8px 25px rgba(28, 47, 114, 0.20)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
