import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MarktReport2026 } from './pages/MarktReport2026';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow bg-white">
          <Routes>
            {/* 
                WICHTIG: Die Startseite ('/') rendert jetzt direkt das Advertorial.
                Damit ist der Content für Besucher sofort sichtbar (wie vorher).
            */}
            <Route path="/" element={<MarktReport2026 />} />
            
            {/* Die explizite URL bleibt bestehen (für Ads/Tracking) */}
            <Route path="/markt-report-2026" element={<MarktReport2026 />} />
            
            {/* Die Magazin-Übersicht ist jetzt hier geparkt */}
            <Route path="/uebersicht" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;