import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-4 border-brand-green relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="flex justify-between items-end">
          {/* Logo Section */}
          <div className="flex-1">
            <div className="font-serif font-black text-2xl md:text-4xl text-brand-green tracking-tighter leading-none">
              SOLARPARK <span className="text-brand-dark">MAGAZIN</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-b border-gray-200 bg-white`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:items-center justify-center gap-6 py-4 font-serif font-bold text-brand-dark text-sm md:text-base">
            <li className="cursor-pointer hover:text-brand-green transition-colors py-2 md:py-0 border-b md:border-0 border-gray-100">MARKT & POLITIK</li>
            <li className="cursor-pointer text-brand-green py-2 md:py-0 border-b md:border-0 border-gray-100">FINANZEN & PACHT</li>
            <li className="cursor-pointer hover:text-brand-green transition-colors py-2 md:py-0 border-b md:border-0 border-gray-100">RECHT</li>
            <li className="cursor-pointer hover:text-brand-green transition-colors py-2 md:py-0 border-b md:border-0 border-gray-100">TECHNOLOGIE</li>
            <li className="hidden md:block ml-auto text-gray-400 cursor-pointer hover:text-brand-green"><Search size={20} /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};