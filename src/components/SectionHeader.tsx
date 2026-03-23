import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  eyebrow, 
  title, 
  subtitle,
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {eyebrow && (
        <h3 className={`text-gold text-sm tracking-widest mb-4 ${!centered && 'border-l-2 border-gold pl-3 inline-block'}`}>
          {eyebrow}
        </h3>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-tc text-navy font-bold tracking-widest leading-relaxed mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
