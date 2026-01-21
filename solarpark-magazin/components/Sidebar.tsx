import React from 'react';
import { SidebarItem } from '../types';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

// Extend SidebarItem locally since types.ts wasn't requested for update, or assume flexible type usage.
// We add 'url' to link correctly.
interface SidebarItemWithUrl extends Omit<SidebarItem, 'id'> {
  id: number;
  url: string;
}

const popularArticles: SidebarItemWithUrl[] = [
  { 
    id: 1, 
    category: "Finanzen", 
    title: "Verborgenes Vermögen: 400.000€ im Pachtvertrag",
    url: "/asset-vs-cash"
  },
  { 
    id: 2, 
    category: "Markt", 
    title: "Liquiditätsprobleme? So funktioniert der Pachtvertrags-Ankauf",
    url: "/mobilfunk-modell"
  },
  { 
    id: 3, 
    category: "Trends", 
    title: "5 Gründe für den Tausch: Pacht vs. Einmalzahlung",
    url: "/trend-report"
  },
  { 
    id: 4, 
    category: "Report", 
    title: "Markt-Report 2026: Liquidität aus dem Boden",
    url: "/markt-report-2026" 
  },
];

export const Sidebar: React.FC = () => {
  const scrollToCalculator = (e: React.MouseEvent) => {
    // If we are on a page with the calculator, scroll to it.
    // If not, the link should probably go to the main report or handle gracefully.
    // For now, we assume the conversion element is present on all main pages or at least the ID exists.
    e.preventDefault();
    const element = document.getElementById('rechner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback if calculator is not on this page (though we added placeholder IDs)
        window.location.href = '/#/markt-report-2026#rechner';
    }
  };

  return (
    <aside className="sticky top-6 space-y-8">
      
      {/* CALCULATOR TEASER BOX */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-start gap-3 mb-3">
            <div className="bg-brand-orange/10 p-2 rounded-full mt-1 shrink-0">
                <Calculator className="w-5 h-5 text-brand-orange" />
            </div>
            <h3 className="font-bold text-lg text-brand-dark leading-tight">
                Sofort-Check: Wie viel Kapital steckt in Ihrem Pachtvertrag?
            </h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Die meisten Solar-Verpächter wissen nicht, wie viel Liquidität in ihren Verträgen gebunden ist. Finden Sie es mit wenigen Klicks heraus:
        </p>

        <a 
          href="#rechner"
          onClick={scrollToCalculator}
          className="w-full block text-center bg-brand-orange hover:bg-[#c2410c] text-white font-bold py-3 px-4 rounded shadow-sm transition-colors group"
        >
           Zum Sofort-Check <span className="inline-block transition-transform group-hover:translate-x-1">»</span>
        </a>
      </div>

      {/* Most Read Section */}
      <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
        <h4 className="font-serif font-bold text-lg mb-4 border-b-2 border-brand-green inline-block pb-1">Meistgelesene Artikel</h4>
        <div className="flex flex-col gap-4">
          {popularArticles.map((article, index) => (
            <Link key={article.id} to={article.url} className="group cursor-pointer block">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-1 block">{article.category}</span>
              <h5 className="font-sans font-medium text-gray-800 text-sm leading-snug group-hover:text-brand-green transition-colors">
                <span className="text-gray-300 mr-2 font-serif italic">#{index + 1}</span>
                {article.title}
              </h5>
            </Link>
          ))}
        </div>
      </div>
      
    </aside>
  );
};