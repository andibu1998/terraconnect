import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ConversionBox } from '../components/ConversionBox';
import { getDynamicDate } from '../utils/date';
import { CheckCircle2, TrendingUp, ArrowRight, Building2, Coins, Landmark, CalendarClock, TrendingDown } from 'lucide-react';

export const AssetVsCash: React.FC = () => {
  const publishDate = getDynamicDate(2);
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
          
          {/* Left Column: Article */}
          <div className="lg:col-span-8 font-sans text-brand-dark leading-relaxed">
            
            {/* Header Info */}
            <div className="mb-6 border-b border-gray-200 pb-4">
              <span className="block text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2">MARKT & FINANZEN | ANALYSE</span>
              
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
                Verborgenes Vermögen: Warum in den meisten Solar-Pachtverträgen ein sechsstelliger Kapitalbetrag steckt – und wie Verpächter darauf zugreifen
              </h1>

               {/* AUTHOR BYLINE */}
                <div className="flex flex-row items-center gap-3 mb-4">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0c7683beb42d8731a.webp" 
                    alt="Dr. Stefan Wiegand"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-200 shadow-sm shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-sans text-sm md:text-base">
                      Markt-Analyse von <strong className="font-bold">Dr. Stefan Wiegand</strong>
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 font-sans">
                      Finanz-Redaktion | Advertorial | Aktualisiert: {publishDate}
                    </span>
                  </div>
                </div>
              
              <h2 className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif">
                Die wenigsten Grundbesitzer wissen, wie viel liquides Kapital in ihren Pachtverträgen gebunden ist. Eine Analyse zeigt: 23.200 Euro jährliche Pacht entsprechen 400.000-560.000 Euro sofort verfügbarem Eigenkapital. Ohne Land zu verkaufen.
              </h2>
            </div>

            {/* HERO IMAGE */}
            <figure className="my-6 md:my-8 mb-8">
                <img 
                src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69709d0a15885ed7db39d50d.webp" 
                alt="Solarpark Vermögen" 
                className="w-full h-auto rounded-lg shadow-md"
                />
                <figcaption className="mt-3 text-left text-sm text-gray-600 italic">
                  Was viele nicht wissen: in Solar-Pachtverträgen schlummern oft mehrere Hunderttausend Euro sofort verfügbares Kapital.
                </figcaption>
            </figure>

            {/* Meta Data */}
            <div className="flex items-center text-sm text-gray-500 mb-8 font-semibold">
                <span className="uppercase tracking-wide">München / Frankfurt</span>
                <span className="mx-2 text-brand-orange">•</span>
                <time>Lesezeit: 5 Min</time>
            </div>

            {/* Body Text - UPDATED: Increased spacing and font size */}
            <div className="text-lg md:text-[20px] leading-[1.85] space-y-8 text-gray-800">
                
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-green first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:leading-[0.8]">
                  Über 50.000 landwirtschaftliche Flächen in Deutschland sind mit Solarparks verpachtet. Die Verträge laufen typischerweise 20-30 Jahre. Die jährlichen Pachtzahlungen liegen meist zwischen 3.000 € und 5.000 € pro Hektar.
                </p>

                <p>
                  Für die meisten Verpächter ist das eine klare Rechnung: Einmal im Jahr kommt die Überweisung. Sicheres Einkommen über Jahrzehnte.
                  Aber die wenigsten kennen die zweite Zahl: die <strong className="font-semibold text-gray-900">Sofortauszahlung ihres Vertrags</strong>.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Das Standardbeispiel: 23.200 Euro Jahrespacht
                </h3>

                <p>
                  Nehmen wir einen typischen Fall: 10 Hektar verpachtete Fläche, 40.000 Euro Bruttopacht, 23.200 Euro netto nach Steuern (bei ca. 42% Grenzsteuersatz).
                </p>

                {/* VISUALISIERUNG / INFOGRAFIK ERSATZ - UPDATED: Larger fonts */}
                <div className="my-10 bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                   <h4 className="font-bold text-center text-gray-700 mb-6 uppercase tracking-wider text-base">Finanzvergleich: Wartezeit vs. Barwert</h4>
                   
                   <div className="space-y-6">
                      {/* Bar 1: Jährlich */}
                      <div>
                        <div className="flex justify-between text-base font-semibold mb-2">
                            <span className="text-gray-500">Jährliche Netto-Pacht (Wartezeit)</span>
                            <span className="text-gray-700">23.200 € / Jahr</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden relative">
                             <div className="bg-gray-400 h-10 rounded-full" style={{ width: '15%' }}></div>
                             <span className="absolute inset-0 flex items-center pl-3 text-sm text-white font-bold opacity-80">Tröpfel-Einkommen</span>
                        </div>
                      </div>

                      {/* Bar 2: Sofort */}
                      <div>
                        <div className="flex justify-between text-base font-semibold mb-2">
                            <span className="text-brand-green">Möglicher Sofort-Betrag (Einmalzahlung)</span>
                            <span className="text-brand-green font-bold">~ 560.000 € Sofort</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-14 overflow-hidden relative shadow-inner">
                             <div className="bg-brand-green h-14 rounded-full flex items-center relative animate-pulse" style={{ width: '90%' }}>
                                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
                             </div>
                             <span className="absolute inset-0 flex items-center pl-4 text-white font-bold text-xl">
                                Sofort verfügbar
                             </span>
                        </div>
                      </div>
                   </div>
                   <p className="mt-4 text-sm text-gray-500 text-center italic">
                       Beispielrechnung basierend auf aktuellen Marktkonditionen für 20 Jahre Restlaufzeit. Werte variieren je nach Vertrag.
                   </p>
                </div>

                <p>
                  Was die meisten nicht wissen: Dieser Vertrag hat bereits heute einen Marktwert von <strong className="font-semibold text-gray-900">400.000 bis 560.000 Euro</strong>. Nach Steuern. Als einmalige Vollauszahlung. Sofort verfügbar.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Warum dieser Wert existiert
                </h3>

                <p>
                  Pachtverträge sind handelbare Wirtschaftsgüter. Genau wie Aktien, Anleihen oder Immobilien haben sie einen Marktwert.
                  Dieser Wert basiert auf vier Faktoren:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-lg">
                    <div className="bg-white border-l-4 border-brand-green p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                           <Coins className="w-6 h-6 text-brand-green" /> Höhe der jährlichen Pacht
                        </div>
                    </div>
                    <div className="bg-white border-l-4 border-brand-green p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                           <CalendarClock className="w-6 h-6 text-brand-green" /> Restlaufzeit des Vertrags
                        </div>
                    </div>
                    <div className="bg-white border-l-4 border-brand-green p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                           <Building2 className="w-6 h-6 text-brand-green" /> Bonität des Betreibers
                        </div>
                    </div>
                    <div className="bg-white border-l-4 border-brand-green p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                           <Landmark className="w-6 h-6 text-brand-green" /> Kapitalmarktzinsen
                        </div>
                    </div>
                </div>

                <p>
                  Institutionelle Investoren – Pensionsfonds, Versorgungswerke – kaufen solche Verträge. Sie benötigen sichere, langfristige Cashflows für ihre Rentenportfolios.
                  Sie zahlen dafür heute eine Einmalzahlung. Im Gegenzug übernehmen sie das Recht auf die zukünftigen Pachtzahlungen.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Das Mobilfunk-Modell als Blaupause
                </h3>

                <p>
                  Neu ist dieses Modell nicht. Im Telekommunikationssektor ist es seit über zehn Jahren etabliert.
                  Tausende Grundstückseigentümer mit Mobilfunkmasten – Telekom, Vodafone, O2 – haben ihre Pachtverträge bereits monetarisiert.
                </p>

                <figure className="my-6">
                    <img 
                    src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0533c665c1f1b2c0d.webp" 
                    alt="Mobilfunkmast auf Ackerland" 
                    className="w-full h-auto rounded-lg shadow-md grayscale-[20%]"
                    />
                    <figcaption className="mt-2 text-left text-sm text-gray-500 italic">
                      Das Vorbild: Im Mobilfunkmarkt ist der Verkauf von Pachtforderungen längst Standard.
                    </figcaption>
                </figure>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h4 className="font-bold text-brand-dark mb-4 text-lg">Das Prinzip:</h4>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                            <span>Verkauf des Pachtvertrags (nicht des Grundstücks)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                            <span>Einmalzahlung statt jährlicher Pacht</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                            <span>Grundeigentum bleibt bei Ihnen (Verpächter)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                            <span>Infrastruktur bleibt bestehen</span>
                        </li>
                    </ul>
                </div>

                <p>
                    Was im Mobilfunkbereich Routine ist, erreicht jetzt den Solarmarkt.
                </p>

                 {/* QUOTE BLOCK */}
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 my-8">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696517c798efbd84f91e96da.webp" 
                      alt="Maurits Engelsman"
                      className="w-24 h-24 rounded-full object-cover border-2 border-brand-green/20 shadow-sm shrink-0"
                    />
                    <blockquote className="text-left">
                      <p className="font-serif text-xl italic text-gray-800 mb-2 leading-relaxed">
                        "Wir verzeichnen einen dreistelligen prozentualen Anstieg der Anfragen. Der Markt entwickelt sich schneller als erwartet."
                      </p>
                      <cite className="block text-base font-bold text-brand-green not-italic uppercase tracking-wide">
                        — Maurits Engelsman, Partner bei TerraConnect Capital
                      </cite>
                    </blockquote>
                  </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Was die Pacht-Umwandlung ermöglicht
                </h3>

                <p className="mb-4">
                  Die Umwandlung in eine Einmalzahlung eröffnet Handlungsoptionen, die mit jährlichen Raten nicht möglich sind:
                </p>

                <ul className="space-y-4 mb-8">
                    <li className="bg-white p-5 rounded border border-gray-100 shadow-sm flex gap-4">
                        <div className="bg-brand-orange/10 p-2 rounded-full h-fit shrink-0">
                            <TrendingDown className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                            <strong className="block text-gray-900 font-bold text-lg mb-1">Schuldenabbau</strong>
                            <span className="text-gray-700">Betriebskredite mit 6-8% Zinsen tilgen. Bei 200.000 Euro Kredit entspricht das 12.000-16.000 Euro jährlicher Zinsersparnis.</span>
                        </div>
                    </li>
                    <li className="bg-white p-5 rounded border border-gray-100 shadow-sm flex gap-4">
                        <div className="bg-brand-green/10 p-2 rounded-full h-fit shrink-0">
                            <TrendingUp className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <strong className="block text-gray-900 font-bold text-lg mb-1">Investitionen</strong>
                            <span className="text-gray-700">Nachbarflächen kaufen, solange sie verfügbar sind. Zum heutigen Preis, nicht in zehn Jahren zu deutlich höheren Preisen.</span>
                        </div>
                    </li>
                    <li className="bg-white p-5 rounded border border-gray-100 shadow-sm flex gap-4">
                        <div className="bg-blue-50 p-2 rounded-full h-fit shrink-0">
                            <Building2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <strong className="block text-gray-900 font-bold text-lg mb-1">Modernisierung</strong>
                            <span className="text-gray-700">Stallbau, Maschinenpark, Digitalisierung. Investitionen, die sofort Ertrag bringen statt in zehn Jahren.</span>
                        </div>
                    </li>
                     <li className="bg-white p-5 rounded border border-gray-100 shadow-sm flex gap-4">
                        <div className="bg-purple-50 p-2 rounded-full h-fit shrink-0">
                            <Landmark className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <strong className="block text-gray-900 font-bold text-lg mb-1">Familienunterstützung</strong>
                            <span className="text-gray-700">Eigenkapital für Hausbau oder Hofübernahme. Heute, wenn es gebraucht wird.</span>
                        </div>
                    </li>
                </ul>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Das Grundstück bleibt Eigentum
                </h3>
                
                <div className="bg-brand-green/5 p-8 rounded-lg border border-brand-green/20 mb-8">
                     <p className="font-bold text-gray-900 mb-2 text-xl">Die häufigste Frage: "Muss ich mein Land verkaufen?"</p>
                     <p className="text-gray-800 mb-4 text-lg">
                        <strong className="text-brand-green">Nein.</strong> Verkauft wird ausschließlich die Pachtforderung – das Recht auf künftige Zahlungen. Das Grundeigentum bleibt vollständig beim Verpächter.
                     </p>
                     <p className="text-gray-700 text-base">
                        Das Land kann vererbt oder nach Ablauf des Pachtvertrags selbst genutzt bzw. verkauft werden. Optional bieten spezialisierte Käufer wie TerraConnect Capital auch den Ankauf des Bodens an. Die Entscheidung liegt allein beim Verpächter.
                     </p>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Bewertung und Prozess
                </h3>
                <p>Die Bewertung eines Pachtvertrags erfolgt nach transparenten Kriterien:</p>

                <ol className="relative border-l border-brand-green/30 ml-3 space-y-8 mt-8 mb-12">
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">1</span>
                        <h4 className="font-bold text-gray-900 text-lg">Eingabe der Vertragsdaten</h4>
                        <p className="text-base text-gray-600">Pachthöhe, Restlaufzeit, Betreiber</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">2</span>
                        <h4 className="font-bold text-gray-900 text-lg">Bewertung</h4>
                        <p className="text-base text-gray-600">Anhand aktueller Kapitalmarkt-Kriterien</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">3</span>
                        <h4 className="font-bold text-gray-900 text-lg">Konkretes Kaufangebot</h4>
                        <p className="text-base text-gray-600">Verbindlich und transparent</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">4</span>
                        <h4 className="font-bold text-gray-900 text-lg">Notarielle Abwicklung</h4>
                        <p className="text-base text-gray-600">Bei Zustimmung (Kosten trägt Käufer)</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">5</span>
                        <h4 className="font-bold text-gray-900 text-lg">Auszahlung</h4>
                        <p className="text-base text-gray-600">Nach 60-90 Tagen auf Ihrem Konto</p>
                    </li>
                </ol>

                <p className="italic text-gray-600 mb-8 border-l-4 border-gray-300 pl-4 py-3 bg-gray-50 text-lg">
                    "Etwa 40% der Anfragen führen nicht zu einem Verkauf. Das ist normal. Viele Verpächter wollen zunächst nur die Zahl kennen – ohne Verkaufsverpflichtung." — Maurits Engelsman
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Marktentwicklung 2025/26
                </h3>
                <p>Drei Faktoren treiben aktuell die Nachfrage:</p>
                <ul className="list-disc list-inside space-y-2 mt-4 mb-8 text-gray-800 text-lg">
                    <li><strong className="text-brand-dark">ESG-Regulierung:</strong> Pensionsfonds müssen ihre Portfolios nachhaltiger gestalten. Solar-Pachtverträge erfüllen alle Kriterien.</li>
                    <li><strong className="text-brand-dark">Kreditzinsniveau:</strong> Bei 6-8% Kreditzinsen ist die Arbitrage-Möglichkeit (Vertrag verkaufen, Schulden tilgen) besonders attraktiv.</li>
                    <li><strong className="text-brand-dark">Markt-Timing:</strong> Der Solarmarkt steht dort, wo der Mobilfunkmarkt vor zehn Jahren stand. Frühe Verkäufer profitieren von hoher Nachfrage bei begrenztem Angebot.</li>
                </ul>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Die Kernfrage
                </h3>
                <p className="text-xl font-medium text-gray-900">
                    Nicht jeder Verpächter muss verkaufen. Aber jeder sollte wissen: <span className="bg-brand-orange/20 px-1">Wie viel Kapital steckt in meinem Vertrag?</span>
                </p>
                <p className="mt-4">
                    Denn wenn in zwei Jahren eine Investitionsmöglichkeit entsteht, ein Kredit refinanziert werden muss oder die Familie Unterstützung braucht, ist diese Information entscheidend.
                </p>

            </div>

            {/* Conversion Section with ID for Anchor Link */}
            <div id="rechner">
              <ConversionBox />
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-400">
                Dieser Artikel dient ausschließlich der Information. Individuelle steuerliche und rechtliche Beratung wird empfohlen.
              </p>
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
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between items-center gap-4 transition-transform duration-300 ease-in-out ${showFooter ? 'translate-y-0' : 'translate-y-full'}`}>
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