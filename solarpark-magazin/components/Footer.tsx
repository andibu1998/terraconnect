import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-8 mt-12 border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-300 mb-2">
          &copy; 2026 Solarpark Magazin. Alle Rechte vorbehalten.
        </p>
        <p className="text-xs text-gray-500">
          <a 
            href="https://solar.terraconnectcapital.com/impressum-datenschutz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-orange transition-colors underline decoration-gray-600 underline-offset-4"
          >
            Impressum & Datenschutz
          </a>
        </p>
      </div>
    </footer>
  );
};