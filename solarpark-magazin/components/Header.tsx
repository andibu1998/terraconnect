import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-brand-green relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
          
          {/* Logo Section */}
          <div className="font-serif font-black text-3xl md:text-4xl text-brand-green tracking-tighter leading-none">
            SOLARPARK <span className="text-brand-dark">MAGAZIN</span>
          </div>

          {/* Trust Subline (The "Redaktions-Vibe") */}
          <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
            Aktuelle Meldungen aus der Solarbranche
          </div>

        </div>
      </div>
    </header>
  );
};