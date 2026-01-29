import React, { useState, useEffect } from 'react';
import { ArticleContent } from '../components/ArticleContent';
import { Sidebar } from '../components/Sidebar';

export const MarktReport2026: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeige Footer erst an, wenn ca. über das Hero Image gescrollt wurde (450px)
      if (window.scrollY > 450) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          
          {/* Left Column: Article (8 cols on desktop) */}
          <div className="lg:col-span-8">
            <ArticleContent />
          </div>

          {/* Right Column: Sidebar (4 cols on desktop) */}
          <div className="lg:col-span-4 hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile Sidebar Content (displayed below article on mobile) */}
          <div className="lg:hidden block space-y-8 mt-8 pt-8 border-t border-gray-200">
             <Sidebar />
          </div>

        </div>
      </div>

      {/* MOBILE STICKY FOOTER */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between items-center gap-4 transition-transform duration-300 ease-in-out ${showFooter ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="font-serif text-brand-green font-bold leading-tight text-sm">
          Wie viel "brachliegendes" Kapital steckt in Ihrem Pachtvertrag?
        </div>
        <button 
          onClick={scrollToCalculator}
          className="bg-brand-orange hover:bg-[#c2410c] text-white font-bold py-2 px-4 text-sm rounded whitespace-nowrap shadow-sm transition-colors"
        >
          Wert berechnen
        </button>
      </div>
    </div>
  );
};