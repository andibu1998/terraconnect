import React from 'react';
import { SidebarItem } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

const popularArticles: SidebarItem[] = [
  { id: 1, category: "Recht", title: "Neue EEG-Novelle: Was Grundstückseigentümer wissen müssen" },
  { id: 2, category: "Finanzen", title: "Pachtpreise 2025: Die regionale Karte für Deutschland" },
  { id: 3, category: "Betrieb", title: "Rückbau-Verpflichtung: Wer zahlt wirklich, wenn der Betreiber pleite geht?" },
  { id: 4, category: "Markt", title: "Agri-PV: Doppelte Ernte, doppelte Rendite?" },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-6 space-y-8">
      {/* Most Read Section */}
      <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
        <h4 className="font-serif font-bold text-lg mb-4 border-b-2 border-brand-green inline-block pb-1">Meistgelesene Artikel</h4>
        <div className="flex flex-col gap-4">
          {popularArticles.map((article, index) => (
            <div key={article.id} className="group cursor-pointer">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-1 block">{article.category}</span>
              <h5 className="font-sans font-medium text-gray-800 text-sm leading-snug group-hover:text-brand-green transition-colors">
                <span className="text-gray-300 mr-2 font-serif italic">#{index + 1}</span>
                {article.title}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* "Fake" Ad for TerraConnect */}
      <div>
        <div className="bg-gray-50 border border-gray-200 p-2 rounded text-center mb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Anzeige</span>
        </div>
        <div className="bg-gradient-to-br from-brand-dark to-gray-800 text-white p-6 rounded shadow-lg text-center relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <ExternalLink size={60} />
          </div>
          
          <div className="font-serif text-2xl font-bold mb-2 leading-tight">
            TerraConnect
          </div>
          <div className="w-12 h-1 bg-brand-orange mx-auto mb-4"></div>
          
          <h3 className="font-bold text-lg mb-4">
            Ihr Pachtvertrag ist mehr wert, als Sie denken.
          </h3>
          
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Nutzen Sie das aktuelle Hochzins-Fenster für eine steueroptimierte Einmalzahlung.
          </p>
          
          <button className="w-full bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-bold py-3 px-4 rounded transition-all flex items-center justify-center gap-2">
            Jetzt Wert prüfen <ArrowRight size={16} />
          </button>
          
          <div className="mt-4 text-[10px] text-gray-400">
            Kostenlos & Unverbindlich
          </div>
        </div>
      </div>
    </aside>
  );
};