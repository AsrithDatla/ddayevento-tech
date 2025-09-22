import React from 'react';


interface BrandHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const BrandHeading: React.FC<BrandHeadingProps> = ({
  level = 2,
  size,
  gradient = false,
  className = '',
  children,
}) => {
  // const { getHeadingClass } = useBrandTheme();

  // Auto-size based on heading level if size not specified
  const autoSize = size || (['3xl', '2xl', 'xl', 'lg', 'md', 'sm'][level - 1] as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl');

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl',
  };

  const baseClass = 'font-heading font-semibold';
  const colorClass = gradient ? 'brand-text-gradient' : 'text-brand-primary';
  const sizeClass = sizeClasses[autoSize];

  const headingClass = `${baseClass} ${colorClass} ${sizeClass} ${className}`.trim();

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={headingClass}>
      {children}
    </Tag>
  );
};

export default BrandHeading;