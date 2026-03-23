import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  eyebrow, 
  title, 
  subtitle,
  centered = false,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {eyebrow && (
        <h3 className={`text-gold text-sm tracking-widest mb-4 ${!centered && 'border-l-2 border-gold pl-3 inline-block'}`}>
          {eyebrow}
        </h3>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif-tc font-bold tracking-widest leading-relaxed mb-6 ${isDark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`tracking-widest leading-relaxed text-sm md:text-base max-w-2xl ${isDark ? 'text-gray-300' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
