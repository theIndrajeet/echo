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
        'futuristic-gradient': 'linear-gradient(135deg, #F26B22, #25997F, #1C2F72)',
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 0.8s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'orb-float': 'orbFloat 12s ease-in-out infinite',
        'orb-float-reverse': 'orbFloatReverse 15s ease-in-out infinite',
        'orb-pulse': 'orbPulse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        orbFloatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(0.8)' },
          '66%': { transform: 'translate(25px, -25px) scale(1.2)' },
        },
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.5)', opacity: '0.3' },
        },
      },
      boxShadow: {
        'echo-soft': '0 4px 12px rgba(28, 139, 241, 0.15)',
        'echo-strong': '0 8px 25px rgba(28, 47, 114, 0.20)',
        'glow': '0 0 20px rgba(255, 201, 48, 0.5)',
        'glow-blue': '0 0 20px rgba(28, 139, 241, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
