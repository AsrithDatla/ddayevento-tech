import React from 'react';
import { useBrandTheme } from '../../hooks/useBrandTheme';

interface BrandCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick,
}) => {
  const { getCardClass } = useBrandTheme();

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClass = getCardClass(hover);
  const paddingClass = paddingClasses[padding];
  const clickableClass = onClick ? 'cursor-pointer' : '';

  const cardClass = `${baseClass} ${paddingClass} ${clickableClass} ${className}`.trim();

  return (
    <div className={cardClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default BrandCard;