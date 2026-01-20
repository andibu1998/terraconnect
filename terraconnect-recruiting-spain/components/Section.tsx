import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'green';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-brand-beige',
    green: 'bg-brand-green text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[background]} ${className}`}>
      {/* Changed max-w-6xl to max-w-[1400px] for wider layout */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
        {children}
      </div>
    </section>
  );
};