/**
 * Brand Theme Configuration
 * Centralized theme configuration for consistent branding across the application
 */

export const brandColors = {
  // Primary Brand Colors
  primary: '#008080',      // Teal
  secondary: '#20B2AA',    // Light Sea Green
  accent: '#FF6F61',       // Coral
  neutral: '#FFFFFF',      // White
  text: '#333333',         // Charcoal

  // Extended Palette
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
    primary: '#008080',
    light: '#40E0D0',
    dark: '#006666',
  },

  coral: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    primary: '#FF6F61',
    light: '#FF8A80',
    dark: '#E55A50',
  },

  // Semantic Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Neutral Palette
  gray: {
    50: '#F8F9FA',
    100: '#E9ECEF',
    200: '#DEE2E6',
    300: '#CED4DA',
    400: '#ADB5BD',
    500: '#6C757D',
    600: '#495057',
    700: '#343A40',
    800: '#212529',
    900: '#1A1D20',
  },
} as const;

export const brandFonts = {
  heading: "'Gordita', 'Poppins', 'Roboto', 'Hind', 'system-ui', sans-serif",
  body: "'Gordita', 'Poppins', 'Roboto', 'Hind', 'system-ui', sans-serif",
  display: "'Gordita', 'Poppins', 'Roboto', 'Hind', 'system-ui', sans-serif",
  primary: "'Gordita', 'Poppins', 'Roboto', 'Hind', 'system-ui', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  
  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 550,    // Updated to match your custom weight
    bold: 600,        // Updated to match your system
    extrabold: 800,
  },
} as const;

export const brandSpacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const;

export const brandRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const brandShadows = {
  sm: '0 1px 2px 0 rgba(0, 128, 128, 0.05)',
  md: '0 4px 6px -1px rgba(0, 128, 128, 0.1), 0 2px 4px -1px rgba(0, 128, 128, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 128, 128, 0.1), 0 4px 6px -2px rgba(0, 128, 128, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 128, 128, 0.1), 0 10px 10px -5px rgba(0, 128, 128, 0.04)',
  coral: '0 4px 12px rgba(255, 111, 97, 0.3)',
  teal: '0 4px 12px rgba(0, 128, 128, 0.3)',
} as const;

export const brandGradients = {
  primary: 'linear-gradient(135deg, #008080 0%, #40E0D0 100%)',
  accent: 'linear-gradient(135deg, #FF6F61 0%, #FF8A80 100%)',
  hero: 'linear-gradient(135deg, #008080 0%, #20B2AA 50%, #FFFFFF 100%)',
  brand: 'linear-gradient(135deg, #008080 0%, #FF6F61 100%)',
  card: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
} as const;

// CSS-in-JS theme object for styled-components or emotion
export const styledTheme = {
  colors: brandColors,
  fonts: brandFonts,
  spacing: brandSpacing,
  radius: brandRadius,
  shadows: brandShadows,
  gradients: brandGradients,
} as const;

// Tailwind class utilities for common brand patterns
export const brandClasses = {
  // Text Colors
  textPrimary: 'text-brand-primary',
  textSecondary: 'text-brand-text',
  textAccent: 'text-brand-accent',
  
  // Background Colors
  bgPrimary: 'bg-brand-primary',
  bgAccent: 'bg-brand-accent',
  bgNeutral: 'bg-brand-neutral',
  
  // Gradients
  gradientHero: 'bg-gradient-hero',
  gradientBrand: 'bg-gradient-brand',
  
  // Typography - Updated for Gordita
  headingFont: 'font-gordita font-heading',
  bodyFont: 'font-gordita font-body',
  displayFont: 'font-gordita font-display',
  primaryFont: 'font-gordita',
  
  // Font Weights for Gordita
  fontRegular: 'font-normal',     // 400
  fontMedium: 'font-medium',      // 500 - Gordita Medium
  fontSemibold: 'font-semibold',  // 600
  fontBold: 'font-bold',          // 700
  
  // Buttons - Updated with Gordita Medium
  btnPrimary: 'bg-brand-primary hover:bg-brand-primary-dark text-white font-gordita font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-teal hover:-translate-y-0.5',
  btnAccent: 'bg-brand-accent hover:bg-brand-coral-dark text-white font-gordita font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-coral hover:-translate-y-0.5',
  btnSecondary: 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-gordita font-medium py-3 px-6 rounded-lg transition-all duration-300',
  
  // Cards
  card: 'bg-white border border-brand-primary/10 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  
  // Headings with Gordita
  h1: 'font-gordita font-bold text-4xl md:text-5xl text-brand-primary',
  h2: 'font-gordita font-semibold text-3xl md:text-4xl text-brand-primary',
  h3: 'font-gordita font-semibold text-2xl md:text-3xl text-brand-primary',
  h4: 'font-gordita font-medium text-xl md:text-2xl text-brand-primary',
  h5: 'font-gordita font-medium text-lg md:text-xl text-brand-primary',
  h6: 'font-gordita font-medium text-base md:text-lg text-brand-primary',
  
  // Body text with Gordita
  bodyLarge: 'font-gordita font-normal text-lg text-brand-text',
  bodyMedium: 'font-gordita font-normal text-base text-brand-text',
  bodySmall: 'font-gordita font-normal text-sm text-brand-text',
} as const;

export default {
  colors: brandColors,
  fonts: brandFonts,
  spacing: brandSpacing,
  radius: brandRadius,
  shadows: brandShadows,
  gradients: brandGradients,
  classes: brandClasses,
};