import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Lock, CalendarClock, Zap } from 'lucide-react';

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
        
        {/* --- REALER ARTIKEL --- */}
        <Link to="/markt-report-2026" className="block group col-span-1 md:col-span-2 lg:col-span-1">
          <div className="h-full border-2 border-brand-green/20 rounded-lg p-0 hover:shadow-xl hover:border-brand-green transition-all duration-300 bg-white overflow-hidden flex flex-col relative">
            <div className="bg-brand-green/10 h-52 flex items-center justify-center relative overflow-hidden">
               <TrendingUp className="text-brand-green w-20 h-20 opacity-40 transform group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                 Jetzt verfügbar
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">Finanzen & Agrar</span>
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand-green transition-colors leading-tight">
                Markt-Report 2026: Liquidität aus dem Boden
              </h2>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                Warum deutsche Solarpark-Verpächter ihre Verträge jetzt zu Bargeld machen – ohne ihr Land zu verkaufen. Eine Analyse der aktuellen Barwert-Optionen.
              </p>
              <span className="text-white bg-brand-green py-3 px-4 rounded text-center font-bold flex items-center justify-center gap-2 mt-auto group-hover:bg-brand-orange transition-colors shadow-sm">
                Zum Artikel <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </Link>

        {/* --- PLATZHALTER 1 --- */}
        <div className="border border-gray-200 rounded-lg p-0 bg-gray-50 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
          <div className="bg-gray-200 h-48 flex items-center justify-center relative">
             <CalendarClock className="text-gray-400 w-12 h-12" />
             <div className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
               <Lock size={10} /> Demnächst
             </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-2">Recht & Steuern</span>
            <h3 className="font-serif text-xl font-bold mb-3 text-gray-500">
              EEG-Novelle 2026: Was auf Grundstückseigentümer zukommt
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              Die geplanten Änderungen im Erneuerbare-Energien-Gesetz und die Auswirkungen auf bestehende Pachtverträge.
            </p>
            <span className="text-gray-400 text-sm font-semibold mt-auto cursor-not-allowed flex items-center gap-2">
              Erscheint in Kürze
            </span>
          </div>
        </div>

        {/* --- PLATZHALTER 2 --- */}
        <div className="border border-gray-200 rounded-lg p-0 bg-gray-50 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
          <div className="bg-gray-200 h-48 flex items-center justify-center relative">
             <Zap className="text-gray-400 w-12 h-12" />
             <div className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
               <Lock size={10} /> Demnächst
             </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-2">Technologie</span>
            <h3 className="font-serif text-xl font-bold mb-3 text-gray-500">
              Agri-PV vs. Freifläche: Der Rendite-Vergleich
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              Lohnt sich die Doppelnutzung wirklich? Wir vergleichen Ernteausfälle mit Stromerträgen.
            </p>
            <span className="text-gray-400 text-sm font-semibold mt-auto cursor-not-allowed flex items-center gap-2">
              Erscheint in Kürze
            </span>
          </div>
        </div>

        {/* --- PLATZHALTER 3 --- */}
        <div className="border border-gray-200 rounded-lg p-0 bg-gray-50 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
          <div className="bg-gray-200 h-48 flex items-center justify-center relative">
             <TrendingUp className="text-gray-400 w-12 h-12" />
             <div className="absolute top-4 left-4 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
               <Lock size={10} /> Demnächst
             </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-2">Markt & Politik</span>
            <h3 className="font-serif text-xl font-bold mb-3 text-gray-500">
              Der große Pacht-Atlas Deutschland
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              In welchen Bundesländern die Pachtpreise stagnieren und wo sie weiter steigen.
            </p>
            <span className="text-gray-400 text-sm font-semibold mt-auto cursor-not-allowed flex items-center gap-2">
              Erscheint in Kürze
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};