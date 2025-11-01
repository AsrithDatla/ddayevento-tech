/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Redesigned Brand Colors - White, Black, Teal, Gold
        brand: {
          primary: '#008B8B',      // Teal - Primary brand color
          secondary: '#20B2AA',    // Light teal - Secondary
          accent: '#FFD700',       // Gold - CTA/Accent color
          neutral: '#FFFFFF',      // White - Background
          text: '#000000',         // Black - Primary text
          // Teal variations
          'primary-50': '#F0FDFA',
          'primary-100': '#CCFBF1',
          'primary-200': '#99F6E4',
          'primary-300': '#5EEAD4',
          'primary-400': '#2DD4BF',
          'primary-500': '#008B8B',
          'primary-600': '#0D9488',
          'primary-700': '#0F766E',
          'primary-800': '#115E59',
          'primary-900': '#134E4A',
          'primary-dark': '#006666',
          'primary-light': '#20B2AA',
          // Gold variations
          'accent-50': '#FFFBEB',
          'accent-100': '#FEF3C7',
          'accent-200': '#FDE68A',
          'accent-300': '#FCD34D',
          'accent-400': '#FBBF24',
          'accent-500': '#FFD700',
          'accent-600': '#D97706',
          'accent-700': '#B45309',
          'accent-800': '#92400E',
          'accent-900': '#78350F',
          'accent-dark': '#DAA520',
          'accent-light': '#FFF8DC',
          // Neutral grays
          'neutral-50': '#F8FAFC',
          'neutral-100': '#F1F5F9',
          'neutral-200': '#E2E8F0',
          'neutral-300': '#CBD5E1',
          'neutral-400': '#94A3B8',
          'neutral-500': '#64748B',
          'neutral-600': '#475569',
          'neutral-700': '#334155',
          'neutral-800': '#1E293B',
          'neutral-900': '#0F172A',
        },
        // Semantic color aliases
        primary: '#008B8B',
        secondary: '#20B2AA',
        accent: '#FFD700',
        teal: '#008B8B',
        gold: '#FFD700',
        // WhatsApp brand color
        whatsapp: '#25D366',
        // Legacy support
        'brand-gold': '#FFD700',
        'brand-gold-dark': '#DAA520',
        'brand-gold-light': '#FFF8DC',
        'brand-teal': '#008B8B',
        'brand-teal-50': '#F0FDFA',
        'brand-coral': '#FF6B6B',
        'brand-coral-50': '#FFF5F5',
      },
      fontFamily: {
        // Modern Typography Stack - Plus Jakarta Sans
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        hero: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        // Logo font - Great Vibes
        logo: ['Great Vibes', 'cursive'],
        script: ['Great Vibes', 'cursive'],
        // Font aliases for semantic usage
        primary: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        secondary: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        // Legacy support
        gordita: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Updated font sizes to match CSS custom properties
        'xs': ['11px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'sm': ['12px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'base': ['14px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'md': ['14px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'lg': ['16px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'xl': ['18px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '2xl': ['20px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '3xl': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '4xl': ['30px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Legacy display sizes for compatibility
        'display-xl': ['30px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-lg': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['20px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['18px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      backgroundImage: {
        // Updated gradients with new brand colors (Teal & Gold)
        'gradient-hero': 'linear-gradient(135deg, #008B8B 0%, #20B2AA 50%, #FFFFFF 100%)',
        'gradient-hero-warm': 'linear-gradient(135deg, #008B8B 0%, #20B2AA 30%, #FFD700 100%)',
        'gradient-teal': 'linear-gradient(135deg, #008B8B 0%, #20B2AA 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
        'gradient-brand': 'linear-gradient(135deg, #008B8B 0%, #FFD700 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1E293B 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'scale-in-bounce': 'scale-in-bounce 0.6s ease-out',
        'scroll-left': 'scroll-left 60s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-in-bounce': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(54, 116, 181, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(54, 116, 181, 0.6)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};