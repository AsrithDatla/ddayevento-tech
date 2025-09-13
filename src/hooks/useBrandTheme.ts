import { useMemo } from 'react';
import brandTheme, { brandColors, brandFonts, brandClasses } from '../config/brandTheme';

/**
 * Custom hook for accessing brand theme values in React components
 * Provides easy access to colors, fonts, and utility classes
 */
export const useBrandTheme = () => {
  const theme = useMemo(() => ({
    // Colors
    colors: brandColors,
    
    // Typography
    fonts: brandFonts,
    
    // Utility classes for Tailwind
    classes: brandClasses,
    
    // Complete theme object
    theme: brandTheme,
    
    // Helper functions
    getColor: (colorPath: string) => {
      const keys = colorPath.split('.');
      let value: any = brandColors;
      
      for (const key of keys) {
        value = value[key];
        if (value === undefined) break;
      }
      
      return value || brandColors.primary;
    },
    
    // CSS custom property helpers
    getCSSVar: (property: string) => `var(--color-${property})`,
    
    // Gradient helpers
    getGradient: (type: 'primary' | 'accent' | 'hero' | 'brand' | 'card' = 'primary') => {
      return brandTheme.gradients[type];
    },
    
    // Button class helpers
    getButtonClass: (variant: 'primary' | 'accent' | 'secondary' = 'primary') => {
      switch (variant) {
        case 'primary':
          return brandClasses.btnPrimary;
        case 'accent':
          return brandClasses.btnAccent;
        case 'secondary':
          return brandClasses.btnSecondary;
        default:
          return brandClasses.btnPrimary;
      }
    },
    
    // Typography class helpers
    getHeadingClass: (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
      const baseClass = 'font-heading font-semibold text-brand-primary';
      const sizeClasses = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl',
      };
      return `${baseClass} ${sizeClasses[size]}`;
    },
    
    // Card class helper
    getCardClass: (hover: boolean = true) => {
      return hover ? brandClasses.card : 'bg-white border border-brand-primary/10 rounded-xl shadow-md';
    },
  }), []);

  return theme;
};

export default useBrandTheme;