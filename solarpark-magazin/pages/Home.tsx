import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="border-b border-gray-200 pb-6 mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
          Solarpark Magazin Übersicht
        </h1>
        <p className="text-xl text-gray-600 font-sans">
          Analysen, Strategien und Marktentwicklungen für Flächeneigentümer.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Featured Article Card */}
        <Link to="/markt-report-2026" className="block group">
          <div className="h-full border border-gray-200 rounded-lg p-0 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col">
            <div className="bg-brand-green/10 h-48 flex items-center justify-center relative">
               <TrendingUp className="text-brand-green w-16 h-16 opacity-50" />
               <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                 Neu
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">Finanzen & Agrar</span>
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand-green transition-colors leading-tight">
                Markt-Report 2026: Liquidität aus dem Boden
              </h2>
              <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                Warum deutsche Solarpark-Verpächter ihre Verträge jetzt zu Bargeld machen – ohne ihr Land zu verkaufen.
              </p>
              <span className="text-brand-orange font-bold flex items-center gap-2 mt-auto group-hover:translate-x-2 transition-transform">
                Jetzt lesen <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        {/* Placeholder for future articles */}
        <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50 opacity-75">
          <span className="font-serif text-xl font-bold text-gray-400 mb-2">Kommende Ausgabe</span>
          <p className="text-sm text-gray-500">Das EEG-Update 2026 und die Folgen.</p>
        </div>

      </div>
    </div>
  );
};