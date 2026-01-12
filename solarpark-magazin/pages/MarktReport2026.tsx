import React from 'react';
import { ArticleContent } from '../components/ArticleContent';
import { Sidebar } from '../components/Sidebar';

export const MarktReport2026: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
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
  );
};