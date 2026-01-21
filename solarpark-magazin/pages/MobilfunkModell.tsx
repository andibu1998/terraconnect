import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { ConversionBox } from '../components/ConversionBox';
import { getDynamicDate } from '../utils/date';
import { CheckCircle2, TrendingUp, ArrowRight, ArrowDownLeft, Building2, Coins, Landmark, CalendarClock, TrendingDown, Scale, ShieldCheck, FileSignature, MapPin } from 'lucide-react';

export const MobilfunkModell: React.FC = () => {
  const publishDate = getDynamicDate(4);

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
              <span className="block text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2">MARKT-KOMMENTAR</span>
              
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
                Liquiditätsprobleme trotz jährlicher Pacht? Wie Solar-Verpächter ihr gebundenes Kapital sofort verflüssigen
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
                Ihr Kapital steckt fest, während Investitionschancen vorbeigehen, Kreditzinsen laufen und die Familie wartet. Die Lösung: Ein etabliertes Finanzmodell macht Pachtverträge sofort liquide – wie es funktioniert.
              </h2>
            </div>

            {/* HERO IMAGE */}
            <figure className="my-6 md:my-8 mb-8">
                <img 
                src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69709d0aeb392b6a1d4117bc.webp" 
                alt="Finanzielle Freiheit" 
                className="w-full h-auto rounded-lg shadow-md"
                />
                <figcaption className="mt-3 text-left text-sm text-gray-600 italic">
                  Nachgerechnet: Lohnt sich das Warten auf die jährliche Pacht wirklich, wenn man mit einer Einmalzahlung sofort teure Betriebskredite ablösen könnte?
                </figcaption>
            </figure>

            {/* Meta Data */}
            <div className="flex items-center text-sm text-gray-500 mb-8 font-semibold">
                <span className="uppercase tracking-wide">Frankfurt am Main</span>
                <span className="mx-2 text-brand-orange">•</span>
                <time>Lesezeit: 6 Min</time>
            </div>

            {/* Body Text - UPDATED: Increased spacing and font size */}
            <div className="text-lg md:text-[20px] leading-[1.85] space-y-8 text-gray-800">
                
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-green first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:leading-[0.8]">
                  Der Nachbarhof steht zum Verkauf. 8 Hektar erstklassiges Ackerland für 480.000 Euro. Eine Gelegenheit, die vielleicht nicht wiederkommt.
                </p>

                <p>
                  Sie haben das Geld – theoretisch. In Ihrem Solarpark-Pachtvertrag stecken über 500.000 Euro. Aber heute, wenn Sie zuschlagen müssten, haben Sie keinen Zugriff.
                  Das ist kein Einzelfall. Tausende Solar-Verpächter sitzen auf sechsstelligem Vermögen, können aber nicht agieren, wenn es darauf ankommt.
                </p>

                <p className="font-medium text-gray-900">
                  Ein etabliertes Finanzmodell aus dem Infrastruktur-Markt löst genau dieses Problem.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Die Lösung: Vertrag verkaufen, Land behalten, Kapital sofort verfügbar
                </h3>

                <p>
                  Ihr Solarpark-Pachtvertrag ist mehr als ein Stück Papier. Er ist ein finanzielles Asset mit aktuellem Marktwert.
                  Die Mechanik ist simpel:
                </p>

                <div className="bg-brand-green/5 p-6 rounded-lg border border-brand-green/20 my-8">
                  <p className="text-gray-900 font-medium mb-4 text-lg">
                     Sie verkaufen nicht Ihr Land. Sie verkaufen nicht die Solaranlage. Sie verkaufen ausschließlich Ihr Recht auf die zukünftigen Pachtzahlungen an einen institutionellen Investor.
                  </p>
                  <p>Im Gegenzug erhalten Sie:</p>
                  <ul className="space-y-2 mt-4 text-lg">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" /> Eine Einmalzahlung</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" /> Sofortigen Zugriff auf das gesamte Kapital</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" /> Vollständiges Grundeigentum (bleibt zu 100% bei Ihnen)</li>
                  </ul>
                </div>

                {/* VISUAL: The Mechanism - UPDATED: Font Sizes */}
                <div className="grid md:grid-cols-3 gap-4 my-8 text-center">
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm">
                        <MapPin className="w-10 h-10 mx-auto text-brand-green mb-3" />
                        <h4 className="font-bold text-gray-900 text-base uppercase mb-2">Sie behalten</h4>
                        <p className="font-bold text-brand-dark text-lg">Ihr Land</p>
                        <p className="text-sm text-gray-500 mt-1">(100% Eigentum)</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm">
                        <FileSignature className="w-10 h-10 mx-auto text-brand-orange mb-3" />
                        <h4 className="font-bold text-gray-900 text-base uppercase mb-2">Sie verkaufen</h4>
                        <p className="font-bold text-brand-dark text-lg">Pacht-Anspruch</p>
                        <p className="text-sm text-gray-500 mt-1">(Zukünftige Raten)</p>
                    </div>
                     <div className="bg-gray-50 p-6 rounded border border-gray-200 shadow-sm">
                        <Coins className="w-10 h-10 mx-auto text-brand-green mb-3" />
                        <h4 className="font-bold text-gray-900 text-base uppercase mb-2">Sie erhalten</h4>
                        <p className="font-bold text-brand-dark text-lg">Einmalzahlung</p>
                        <p className="text-sm text-gray-500 mt-1">(Sofort verfügbar)</p>
                    </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Wie das konkret aussieht
                </h3>
                <p>Beispiel: Standardvertrag über 10 Hektar mit 20 Jahren Restlaufzeit.</p>
                
                <div className="my-8 space-y-4">
                    {/* Scenario 1 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2 text-lg">
                            <TrendingDown className="w-6 h-6 text-red-500" /> Szenario 1: Schuldenabbau
                        </div>
                        <div className="p-5 bg-white text-lg">
                            <p className="mb-2"><strong>Situation:</strong> 200.000 Euro Betriebskredit zu 7% Zinsen tilgen.</p>
                            <div className="pl-4 border-l-4 border-brand-green mt-2">
                                <p className="text-brand-green font-bold">→ 14.000 Euro jährliche Zinsersparnis</p>
                                <p className="text-gray-900 font-bold">→ 140.000 Euro gespart über 10 Jahre</p>
                            </div>
                        </div>
                    </div>

                    {/* Scenario 2 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2 text-lg">
                            <TrendingUp className="w-6 h-6 text-brand-green" /> Szenario 2: Expansion
                        </div>
                        <div className="p-5 bg-white text-lg">
                            <p className="mb-2"><strong>Situation:</strong> Nachbarland für 320.000 Euro kaufen (heute).</p>
                            <div className="pl-4 border-l-4 border-brand-green mt-2">
                                <p className="text-brand-green font-bold">→ Statt in 2 Jahren für 380.000 Euro</p>
                                <p className="text-gray-900 font-bold">→ 60.000 Euro durch rechtzeitigen Zugriff gespart</p>
                            </div>
                        </div>
                    </div>

                     {/* Scenario 3 */}
                     <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2 text-lg">
                            <Building2 className="w-6 h-6 text-blue-500" /> Szenario 3: Familie
                        </div>
                        <div className="p-5 bg-white text-lg">
                            <p className="mb-2"><strong>Situation:</strong> Sohn beim Hausbau mit 100.000 Euro unterstützen.</p>
                            <div className="pl-4 border-l-4 border-brand-green mt-2">
                                <p className="text-brand-green font-bold">→ Heute, wenn Baupreise noch bezahlbar sind</p>
                                <p className="text-gray-900 font-bold">→ Nicht in 5 Jahren, wenn das Haus 40% teurer ist</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Das Vorbild: Mobilfunk-Verpächter nutzen das Modell seit einem Jahrzehnt
                </h3>

                <p>
                  Falls Ihnen dieses Modell ungewöhnlich vorkommt: Im Markt für Funkmasten ist es seit über einem Jahrzehnt Standard.
                  Tausende deutsche Grundstückseigentümer mit Mobilfunkmasten – Telekom, Vodafone, O2 – haben ihre Pachtverträge bereits monetarisiert.
                </p>

                <figure className="my-6">
                    <img 
                    src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0533c665c1f1b2c0d.webp" 
                    alt="Mobilfunkmast auf Ackerland" 
                    className="w-full h-auto rounded-lg shadow-md grayscale-[20%]"
                    />
                    <figcaption className="mt-2 text-left text-sm text-gray-500 italic">
                      Das Prinzip ist identisch. Nur die Assetklasse ist anders: Statt Mobilfunkmast jetzt Solarpark.
                    </figcaption>
                </figure>

                 {/* QUOTE BLOCK */}
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 my-8">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696517c798efbd84f91e96da.webp" 
                      alt="Maurits Engelsman"
                      className="w-24 h-24 rounded-full object-cover border-2 border-brand-green/20 shadow-sm shrink-0"
                    />
                    <blockquote className="text-left">
                      <p className="font-serif text-xl italic text-gray-800 mb-2 leading-relaxed">
                        "Wir wenden dasselbe rechtssichere Modell auf Solarparks an. Der Prozess ist erprobt. Die rechtliche Basis ist klar. Ein Risiko für Verpächter ist nicht vorhanden."
                      </p>
                      <cite className="block text-base font-bold text-brand-green not-italic uppercase tracking-wide">
                        — Maurits Engelsman, Partner bei TerraConnect Capital
                      </cite>
                    </blockquote>
                  </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Warum institutionelle Investoren Pachtverträge kaufen
                </h3>
                <p>Die Win-Win-Logik basiert auf unterschiedlichen Zielen:</p>

                <div className="grid md:grid-cols-2 gap-6 my-6 text-lg">
                   <div className="bg-gray-50 p-5 rounded border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-300 pb-2">Sie als Verpächter brauchen:</h4>
                      <p className="text-gray-700"><strong>Kapital heute.</strong> Für Wachstum, Investitionen, Schuldenabbau. Sie wollen Chancen nutzen, wenn sie sich bieten.</p>
                   </div>
                   <div className="bg-gray-50 p-5 rounded border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-300 pb-2">Pensionsfonds brauchen:</h4>
                      <p className="text-gray-700"><strong>Sichere Einnahmen über Jahrzehnte.</strong> Für Rentenzahlungen in 20-30 Jahren. Keine Volatilität, keine Überraschungen.</p>
                   </div>
                </div>
                <p>
                   Das Ergebnis: Der Fonds zahlt Ihnen heute eine Einmalzahlung. Sie erhalten Liquidität. Der Fonds erhält garantierte Cashflows über 20 Jahre. Beide erreichen ihre Ziele.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Der Prozess: Von der Bewertung bis zur Auszahlung
                </h3>
                
                <ol className="relative border-l border-brand-green/30 ml-3 space-y-8 mt-8 mb-12">
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">1</span>
                        <h4 className="font-bold text-gray-900 text-lg">Unverbindliche Bewertung (48 Stunden)</h4>
                        <p className="text-gray-600 text-lg">Grunddaten zum Vertrag eingeben. Kostenlos, keine Verpflichtung.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">2</span>
                        <h4 className="font-bold text-gray-900 text-lg">Konkretes Angebot</h4>
                        <p className="text-gray-600 mb-2 text-lg">Detaillierte Vertragsprüfung anhand transparenter Kriterien:</p>
                        <div className="grid grid-cols-2 gap-2 text-base text-gray-500 bg-gray-50 p-3 rounded">
                           <span>• Restlaufzeit</span>
                           <span>• Bonität Betreiber</span>
                           <span>• Jahrespacht</span>
                           <span>• Kapitalmarktzinsen</span>
                        </div>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">3</span>
                        <h4 className="font-bold text-gray-900 text-lg">Notarielle Abwicklung</h4>
                        <p className="text-gray-600 text-lg">Alle Kosten (Notar, Grundbuch, Rechtsprüfung) trägt der Käufer. Sie zahlen nichts.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">4</span>
                        <h4 className="font-bold text-gray-900 text-lg">Auszahlung (60-90 Tage)</h4>
                        <p className="text-gray-600 text-lg">Das Geld landet auf Ihrem Konto.</p>
                    </li>
                </ol>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded border-l-4 border-gray-400 italic text-gray-600 mb-8 text-lg">
                    <FileSignature className="w-8 h-8 shrink-0 mt-1" />
                    <p>"Der Standard-Prozess dauert von der Anfrage bis zur Auszahlung etwa drei Monate. Schneller als jeder Bankkredit – und ohne Bonitätsprüfung, weil wir den Vertrag kaufen, nicht den Verpächter bewerten."</p>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Was mit Ihrem Grundeigentum passiert
                </h3>
                <p className="mb-4 font-bold text-gray-900 text-lg">Das ist die häufigste Frage: "Verliere ich mein Land?" — <span className="text-brand-green">Nein.</span></p>
                <p className="mb-4">Sie verkaufen ausschließlich die Pachtforderung. Das Grundeigentum bleibt vollständig bei Ihnen.</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-lg">
                    <li>Sie können das Land <strong>vererben</strong> (wie bisher).</li>
                    <li>Sie können es <strong>selbst nutzen</strong> (nach Vertragsende).</li>
                    <li>Sie können es <strong>später verkaufen</strong> (Ihre Entscheidung).</li>
                </ul>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Drei häufige Bedenken
                </h3>
                
                <div className="space-y-4 mb-8">
                     <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-2 text-lg"><Scale className="w-5 h-5 text-brand-orange" /> "Bekomme ich einen fairen Preis?"</h4>
                        <p className="text-base text-gray-600">Die Bewertung basiert auf transparenten Kapitalmarkt-Kriterien. Sie ist 100% nachvollziehbar. Im Mobilfunkmarkt funktioniert dasselbe Modell seit Jahren mit zufriedenen Verkäufern.</p>
                     </div>
                     <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-2 text-lg"><CalendarClock className="w-5 h-5 text-brand-orange" /> "Was passiert langfristig?"</h4>
                        <p className="text-base text-gray-600">TerraConnect verwaltet Verträge selbst über die komplette Laufzeit. Kein Weiterverkauf an Dritte. Sie haben auch in 10 Jahren denselben Ansprechpartner.</p>
                     </div>
                     <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-2 text-lg"><ShieldCheck className="w-5 h-5 text-brand-orange" /> "Ist das sicher?"</h4>
                        <p className="text-base text-gray-600">Notarielle Abwicklung nach deutschem Recht. Klare Grundbucheintragung. Alle Risiken (Betreiber-Insolvenz, EEG-Änderungen) gehen auf den Käufer über. Sie sind nach Auszahlung komplett raus.</p>
                     </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Warum jetzt handeln?
                </h3>
                <p>Drei Faktoren machen 2026 zu einem günstigen Zeitpunkt:</p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="bg-green-50 p-4 rounded text-center">
                        <strong className="block text-brand-green mb-1 text-lg">ESG-Druck</strong>
                        <p className="text-sm text-gray-600">Investoren brauchen "grüne Assets". Hohe Nachfrage = Verkäufermarkt.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded text-center">
                        <strong className="block text-brand-green mb-1 text-lg">Hohe Zinsen</strong>
                        <p className="text-sm text-gray-600">Arbitrage-Chance: Kredite mit 7-8% tilgen spart massiv Geld.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded text-center">
                        <strong className="block text-brand-green mb-1 text-lg">Markt-Reife</strong>
                        <p className="text-sm text-gray-600">Der Markt ist etabliert. Abläufe sind sicher und standardisiert.</p>
                    </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                   Die Kernfrage
                </h3>
                <p className="text-lg text-gray-800 font-medium">
                    Sie müssen heute nichts verkaufen. Aber Sie sollten wissen: <strong>Was ist Ihr Vertrag heute wert?</strong>
                </p>
                <p className="mt-4">
                    Denn wenn in sechs Monaten eine Investitionschance entsteht, ein Kredit refinanziert werden muss oder Ihre Familie Unterstützung braucht, ist diese Information entscheidend. Eine kostenlose Bewertung verschafft Ihnen diese Klarheit. Ohne Risiko. Ohne Verpflichtung.
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