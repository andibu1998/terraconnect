import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const MobilfunkModell: React.FC = () => {
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('rechner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Article */}
          <div className="lg:col-span-8 font-sans text-brand-dark leading-relaxed">
            
            {/* Header Info */}
            <div className="mb-8 border-b border-gray-200 pb-6">
              <span className="block text-brand-green font-bold text-sm tracking-widest uppercase mb-2">MARKT-KOMMENTAR</span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
                Vom Mobilfunk lernen: Warum immer mehr Solar-Verpächter jetzt auf das "Telekom-Modell" umsteigen
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                Was bei Grundstückseigentümern mit Funkmasten seit 10 Jahren Standard ist, erreicht jetzt den Solarmarkt: Wie Sie durch eine simple Entscheidung 20 Jahre Wartezeit überspringen – und sofort über Ihr gesamtes Kapital verfügen.
              </h2>
            </div>

            {/* Placeholder Body */}
            <div className="bg-gray-50 border border-gray-200 rounded p-12 text-center text-gray-500 italic">
              <p>Der vollständige Artikel folgt in Kürze...</p>
            </div>

             {/* Placeholder for Calculator Anchor */}
             <div id="rechner" className="mt-12 p-4 border-t border-dashed border-gray-300 text-center text-sm text-gray-400">
              [Hier erscheint der Rechner]
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Content */}
          <div className="lg:hidden block space-y-8 mt-8 pt-8 border-t border-gray-200">
             <Sidebar />
          </div>

        </div>
      </div>

      {/* MOBILE STICKY FOOTER */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between items-center gap-4">
        <div className="font-serif text-brand-green font-bold leading-tight text-sm">
          Wie viel Kapital steckt in Ihrem Pachtvertrag?
        </div>
        <button 
          onClick={scrollToCalculator}
          className="bg-brand-orange hover:bg-[#c2410c] text-white font-bold py-2 px-4 text-sm rounded whitespace-nowrap shadow-sm transition-colors"
        >
          Zum Sofort-Check
        </button>
      </div>
    </div>
  );
};