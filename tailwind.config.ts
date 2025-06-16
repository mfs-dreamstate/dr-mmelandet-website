import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#64748b',
        accent: {
          pink: '#ffb3d9',
          green: '#b3ffb3',
          beige: '#f5e6d3',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'gradient-text': 'gradientText 4s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'blob': 'blob 7s infinite',
        'ken-burns': 'kenBurns 20s ease-out infinite alternate',
        'particle-float': 'particleFloat linear infinite',
        'morph-blob': 'morphBlob 8s ease-in-out infinite',
        'mesh-animation': 'meshAnimation 20s ease infinite',
        'typewriter': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-word': 'fadeInWord 0.5s ease-out forwards',
        'liquid': 'liquid 10s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'parallax': 'parallax 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #646cff40' },
          'to': { boxShadow: '0 0 30px #646cff60, 0 0 40px #646cff40' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.2) translate(-5%, -5%)' },
        },
        particleFloat: {
          'from': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          'to': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        meshAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--primary)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInWord: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        liquid: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(5deg) scale(1.05)' },
          '50%': { transform: 'rotate(-5deg) scale(0.95)' },
          '75%': { transform: 'rotate(3deg) scale(1.02)' },
        },
        magnetic: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(var(--mouse-x), var(--mouse-y))' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(var(--scroll-offset))' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(60deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'glass-lg': '0 16px 48px 0 rgba(31, 38, 135, 0.5)',
        'glow': '0 0 20px rgba(100, 108, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(100, 108, 255, 0.6)',
        'glow-xl': '0 0 60px rgba(100, 108, 255, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(100, 108, 255, 0.3)',
        'neumorphic': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neumorphic-inset': 'inset 20px 20px 60px #d1d1d1, inset -20px -20px 60px #ffffff',
        '3d': '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
        '3d-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.4)',
        'long': '0 40px 80px -20px rgba(0, 0, 0, 0.25)',
        'soft': '0 2px 20px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      blur: {
        'xs': '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
      },
      rotate: {
        '360': '360deg',
        '-360': '-360deg',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
      transformOrigin: {
        'center-center': 'center center',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      filter: {
        'blur': 'blur(8px)',
        'brightness': 'brightness(1.2)',
        'contrast': 'contrast(1.2)',
        'grayscale': 'grayscale(100%)',
        'hue-rotate': 'hue-rotate(90deg)',
        'invert': 'invert(100%)',
        'saturate': 'saturate(1.5)',
        'sepia': 'sepia(100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px currentColor',
          'text-stroke': '1px currentColor',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px currentColor',
          'text-stroke': '2px currentColor',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke': `2px ${theme('colors.primary')}`,
          'text-stroke': `2px ${theme('colors.primary')}`,
        },
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to bottom, black 0%, transparent 100%)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black 0%, transparent 100%)',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config