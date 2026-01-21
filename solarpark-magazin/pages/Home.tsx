import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Lock, CalendarClock, Zap, Coins, Building2, TrendingDown } from 'lucide-react';

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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        
        {/* --- ARTICLE 1: MARKT REPORT --- */}
        <Link to="/markt-report-2026" className="block group col-span-1 md:col-span-2 lg:col-span-2">
          <div className="h-full border-2 border-brand-green/20 rounded-lg p-0 hover:shadow-xl hover:border-brand-green transition-all duration-300 bg-white overflow-hidden flex flex-col md:flex-row relative">
            <div className="bg-brand-green/10 h-64 md:h-auto md:w-2/5 flex items-center justify-center relative overflow-hidden">
               <TrendingUp className="text-brand-green w-24 h-24 opacity-40 transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                 Top Thema
               </div>
            </div>
            <div className="p-8 flex flex-col flex-grow justify-center">
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">Markt-Report</span>
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900 group-hover:text-brand-green transition-colors leading-tight">
                Liquidität aus dem Boden: Markt-Report 2026
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Warum deutsche Solarpark-Verpächter ihre Verträge jetzt zu Bargeld machen – ohne ihr Land zu verkaufen. Eine umfassende Analyse der aktuellen Optionen.
              </p>
              <span className="text-white bg-brand-green py-3 px-6 rounded text-center font-bold flex items-center justify-center gap-2 w-fit group-hover:bg-brand-orange transition-colors shadow-sm">
                Zum Hauptartikel <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </Link>

        {/* --- ARTICLE 2: ASSET VS CASH --- */}
        <Link to="/asset-vs-cash" className="block group">
          <div className="h-full border border-gray-200 rounded-lg p-0 hover:shadow-lg hover:border-brand-green/50 transition-all duration-300 bg-white overflow-hidden flex flex-col relative">
            <div className="bg-gray-100 h-52 flex items-center justify-center relative overflow-hidden group-hover:bg-green-50 transition-colors">
               <Coins className="text-gray-400 group-hover:text-brand-green w-16 h-16 transition-colors duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">Finanzen</span>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-green transition-colors">
                Verborgenes Vermögen: 400.000€ im Pachtvertrag
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                Eine Analyse zeigt: 23.200 Euro jährliche Pacht entsprechen oft über einer halben Million Euro Sofortkapital.
              </p>
              <span className="text-brand-green font-bold text-sm mt-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Mehr lesen <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        {/* --- ARTICLE 3: MOBILFUNK MODELL --- */}
        <Link to="/mobilfunk-modell" className="block group">
          <div className="h-full border border-gray-200 rounded-lg p-0 hover:shadow-lg hover:border-brand-green/50 transition-all duration-300 bg-white overflow-hidden flex flex-col relative">
            <div className="bg-gray-100 h-52 flex items-center justify-center relative overflow-hidden group-hover:bg-green-50 transition-colors">
               <Building2 className="text-gray-400 group-hover:text-brand-green w-16 h-16 transition-colors duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">Hintergrund</span>
              <h3 className="font-serif text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-green transition-colors">
                Das Mobilfunk-Modell: Liquidität trotz Pacht?
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                Was Grundstückseigentümer von Mobilfunkmasten seit 10 Jahren nutzen, erreicht jetzt den Solarmarkt.
              </p>
              <span className="text-brand-green font-bold text-sm mt-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Mehr lesen <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        {/* --- ARTICLE 4: TREND REPORT --- */}
        <Link to="/trend-report" className="block group md:col-span-2 lg:col-span-2">
          <div className="h-full border border-gray-200 rounded-lg p-0 hover:shadow-lg hover:border-brand-green/50 transition-all duration-300 bg-white overflow-hidden flex flex-col md:flex-row relative">
            <div className="bg-gray-100 md:w-1/3 flex items-center justify-center relative overflow-hidden group-hover:bg-green-50 transition-colors h-52 md:h-auto">
               <TrendingDown className="text-gray-400 group-hover:text-brand-green w-16 h-16 transition-colors duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-center">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">Trend-Analyse</span>
              <h3 className="font-serif text-2xl font-bold mb-3 text-gray-800 group-hover:text-brand-green transition-colors">
                5 Gründe für den Tausch: Jährliche Pacht vs. Einmalzahlung
              </h3>
              <p className="text-gray-600 text-base mb-4 flex-grow leading-relaxed">
                Warum immer mehr Verpächter wechseln: Von Zinsersparnis bis zur Familienunterstützung. Eine Analyse der fünf häufigsten Beweggründe.
              </p>
              <span className="text-brand-green font-bold text-sm mt-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Zum Artikel <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};