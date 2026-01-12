import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MarktReport2026 } from './pages/MarktReport2026';
import { AssetVsCash } from './pages/AssetVsCash';
import { MobilfunkModell } from './pages/MobilfunkModell';
import { TrendReport } from './pages/TrendReport';
import { Home } from './pages/Home';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow bg-white">
          <Routes>
            {/* Startseite: Magazin-Übersicht */}
            <Route path="/" element={<Home />} />
            
            {/* Advertorial Pages */}
            <Route path="/markt-report-2026" element={<MarktReport2026 />} />
            <Route path="/asset-vs-cash" element={<AssetVsCash />} />
            <Route path="/mobilfunk-modell" element={<MobilfunkModell />} />
            <Route path="/trend-report" element={<TrendReport />} />
            
            {/* Fallback: Jede unbekannte URL leitet automatisch zur Startseite */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;