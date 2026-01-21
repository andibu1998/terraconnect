import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-brand-green relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
          
          {/* Logo Section - Reduced Size */}
          <div className="font-serif font-black text-2xl md:text-3xl text-brand-green tracking-tighter leading-none">
            SOLARPARK <span className="text-brand-dark">MAGAZIN</span>
          </div>

          {/* Trust Subline - Reduced Size */}
          <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">
            Aktuelle Meldungen aus der Solarbranche
          </div>

        </div>
      </div>
    </header>
  );
};