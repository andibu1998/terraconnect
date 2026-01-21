import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ConversionBox } from '../components/ConversionBox';
import { getDynamicDate } from '../utils/date';
import { CheckCircle2, TrendingDown, ArrowRight, XCircle, AlertTriangle, Clock, Leaf, Users, ShieldCheck, HelpCircle, LineChart, Banknote } from 'lucide-react';

export const TrendReport: React.FC = () => {
  const publishDate = getDynamicDate(5);
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
            
            {/* Header Info - OPTIMIZED: Compact Above the Fold */}
            <div className="mb-6 border-b border-gray-200 pb-4">
              <span className="block text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2">AGRAR-WIRTSCHAFT | TRENDS 2026</span>
              
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
                5 Gründe, warum immer mehr Solar-Verpächter ihre jährliche Pacht gegen Einmalzahlungen tauschen
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
                Die Zahl steigt: Hunderte deutsche Grundbesitzer wandeln ihre Solarpark-Pachtverträge in sofortige Einmalzahlungen um. Was treibt diesen Wechsel? Eine Analyse der fünf häufigsten Beweggründe – und für wen sich der Tausch rechnet.
              </h2>
            </div>

            {/* HERO IMAGE */}
            <figure className="my-6 md:my-8 mb-8">
                <img 
                src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69709d0afc6c3284cb015134.webp" 
                alt="Solar Verpächter Strategie" 
                className="w-full h-auto rounded-lg shadow-md"
                />
                <figcaption className="mt-3 text-left text-sm text-gray-600 italic">
                  Ob Kreditablösung, Landkauf oder die Unterstützung der Kinder: Die Motive für den Wechsel sind vielfältig – doch diese fünf strategischen Vorteile überzeugen aktuell immer mehr Eigentümer.
                </figcaption>
            </figure>

            {/* Meta Data */}
            <div className="flex items-center text-sm md:text-base text-gray-500 mb-10 font-semibold border-b border-gray-100 pb-2">
                <span className="uppercase tracking-wide">Berlin / Frankfurt</span>
                <span className="mx-3 text-brand-orange">•</span>
                <time>Lesezeit: 7 Min</time>
            </div>

            {/* Body Text - Keeping the generous spacing requested */}
            <div className="text-lg md:text-[20px] leading-[1.85] space-y-8 text-gray-800">
                
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-green first-letter:float-left first-letter:mr-4 first-letter:mt-[-6px] first-letter:leading-[0.8]">
                  Noch vor drei Jahren war das Modell in der Solarbranche nahezu unbekannt: Den Pachtvertrag verkaufen, das Land behalten. Heute verzeichnen Investitionsfirmen wie TerraConnect einen Anstieg der Anfragen um über 200 Prozent.
                </p>

                <p>
                  "Was im Mobilfunkmarkt seit zehn Jahren Standard ist, setzt sich jetzt auch bei Solarparks durch", bestätigt Maurits Engelsman, Partner bei TerraConnect Capital.
                </p>

                <p className="font-medium text-gray-900 border-l-4 border-brand-green pl-6 py-2 italic bg-gray-50 rounded-r-lg">
                  Doch warum geben Verpächter die vermeintliche Sicherheit jährlicher Zahlungen auf? Die Antwort liegt in fünf konkreten Vorteilen, die in bestimmten Situationen schwerer wiegen als das Festhalten am Status quo.
                </p>

                {/* --- REASON 1 --- */}
                <div className="mt-16 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-green text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shrink-0 shadow-md">1</div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Sofortige Schuldenfreiheit statt jahrelanger Zinslast
                        </h3>
                    </div>
                    
                    <p className="mb-6">
                        Viele landwirtschaftliche Betriebe tragen Kredite mit 6-8% Zinsen. Gleichzeitig liegt Kapital im Pachtvertrag gebunden, das nur mit 2-3% "arbeitet".
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm mb-6">
                        <h4 className="font-bold text-gray-700 uppercase tracking-wider text-base mb-4 border-b border-gray-300 pb-2">Die Rechnung:</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <strong className="block text-red-600 text-xl mb-1">Betriebskredit</strong>
                                <p className="text-gray-700 mb-2 font-medium">200.000 Euro zu 7% Zinsen</p>
                                <ul className="text-base space-y-1 text-gray-700">
                                    <li>→ Jährliche Zinslast: <strong>14.000 €</strong></li>
                                    <li>→ Über 10 Jahre: <span className="text-red-600 font-bold">140.000 € Verlust</span> (nur Zinsen)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-brand-green text-xl mb-1">Pachtvertrag-Verkauf</strong>
                                <p className="text-gray-700 mb-2 font-medium">z.B. 450.000 Euro (sofort)</p>
                                <ul className="text-base space-y-1 text-gray-700">
                                    <li>→ Kredit sofort tilgen</li>
                                    <li>→ Über 10 Jahre: <span className="text-brand-green font-bold">140.000 € gespart</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p>
                        "Mathematisch ist das eindeutig", erklärt Engelsman. "Wer hohe Kreditzinsen zahlt, während Kapital im Vertrag gebunden ist, verliert Geld – jeden Tag."
                        <br/>
                        <span className="text-base font-bold text-gray-500 mt-2 block">Relevant für: Betriebe mit laufenden Krediten über 5% Zinsen.</span>
                    </p>
                </div>

                {/* --- REASON 2 --- */}
                <div className="mt-16 mb-12 border-t border-gray-100 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-green text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shrink-0 shadow-md">2</div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Investitionschancen nutzen, bevor sie verschwinden
                        </h3>
                    </div>

                    <p className="mb-6">
                        Ackerland wird in Deutschland nur einmal verkauft. Wenn der Nachbarhof heute verfügbar ist, gehört er in sechs Monaten schon jemand anderem.
                    </p>

                    <div className="bg-white border-l-4 border-brand-orange p-6 shadow-sm my-8">
                        <div className="flex items-start gap-4">
                            <Leaf className="w-8 h-8 text-brand-orange shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-xl mb-2">Die Realität:</h4>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li><strong>Heute:</strong> Nachbarland für 320.000 Euro zum Verkauf.</li>
                                    <li><strong>In 6 Monaten:</strong> Verkauft an Investor oder anderen Landwirt.</li>
                                    <li><strong>Die Chance:</strong> Unwiederbringlich vorbei.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p>
                        Mit Sofortkapital aus dem Pachtvertrag können Verpächter als Barzahler sofort zugreifen. Ohne Finanzierungsvorbehalt. Ohne Wartezeit.
                        <br/>
                        <span className="text-base font-bold text-gray-500 mt-2 block">Relevant für: Betriebe mit konkreten Expansionsplänen.</span>
                    </p>
                </div>

                {/* --- REASON 3 --- */}
                <div className="mt-16 mb-12 border-t border-gray-100 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-green text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shrink-0 shadow-md">3</div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Familie heute unterstützen – nicht mit teurem Fremdkapital
                        </h3>
                    </div>

                    <p className="mb-6">
                        Wenn Kinder jetzt Eigenkapital brauchen – für Hausbau, Hofübernahme oder Unternehmensgründung – können sie nicht drei Jahre warten, bis genug Pacht angespart ist.
                    </p>

                    {/* Visual Comparison Box */}
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-lg">
                                <XCircle className="w-6 h-6" /> Ohne Sofortkapital
                            </h4>
                            <p className="text-base text-gray-700 mb-2">Sohn muss Bankkredit aufnehmen.</p>
                            <ul className="text-base space-y-1 text-gray-600">
                                <li>• Kreditbedarf steigt um 80.000 €</li>
                                <li>• Bei 4,5% Zinsen</li>
                                <li>• <strong>72.000 € zusätzliche Zinslast</strong> (über 20 Jahre)</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-lg">
                                <CheckCircle2 className="w-6 h-6" /> Mit Einmalzahlung
                            </h4>
                            <p className="text-base text-gray-700 mb-2">Vater gibt 80.000 € direkt.</p>
                            <ul className="text-base space-y-1 text-gray-600">
                                <li>• Weniger Kredit nötig</li>
                                <li>• Familie spart Zinsen</li>
                                <li>• <strong>72.000 € Vermögen bleibt in der Familie</strong></li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        Diese Unterstützung ist nicht rückgängig zu machen. Wer wartet, bis das Kind bereits einen teuren Kredit aufgenommen hat, hat die Chance verpasst, Zinskosten zu vermeiden.
                        <br/>
                         <span className="text-base font-bold text-gray-500 mt-2 block">Relevant für: Verpächter mit Kindern vor wichtigen Lebensentscheidungen.</span>
                    </p>
                </div>

                {/* --- REASON 4 --- */}
                <div className="mt-16 mb-12 border-t border-gray-100 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-green text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shrink-0 shadow-md">4</div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Das EEG-Risiko auslagern – Sicherheit vor Ungewissheit
                        </h3>
                    </div>

                    <div className="float-right ml-6 mb-4 w-1/3 bg-gray-100 p-4 rounded-lg text-center hidden md:block">
                        <Clock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <span className="text-sm font-bold text-gray-500 uppercase">Jahr 2040+</span>
                        <p className="text-sm text-gray-400">Marktpreis unbekannt</p>
                    </div>

                    <p className="mb-6">
                        Nach 20 Jahren läuft die EEG-Förderung aus. Was dann mit den Strompreisen passiert, weiß niemand. Wer heute verkauft, gibt dieses Risiko komplett ab.
                    </p>
                    
                    <p className="mb-6">
                        Der Käufer übernimmt ab Tag 1:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4 font-medium text-gray-800">
                        <li>Das Strompreis-Risiko nach Förder-Ende</li>
                        <li>Das Betreiber-Insolvenzrisiko</li>
                        <li>Das Technologie-Risiko (Repowering)</li>
                    </ul>

                    <p>
                        Cash auf dem Konto ist faktenbasiert. Ein 20-Jahres-Vertrag ist eine Wette auf künftige Marktbedingungen.
                        "Niemand kann seriös vorhersagen, wie der Strommarkt nach Auslaufen der Förderung aussieht", sagt Engelsman. "Wer heute verkauft, muss sich diese Frage nicht mehr stellen."
                         <br/>
                         <span className="text-base font-bold text-gray-500 mt-2 block">Relevant für: Risikobewusste Verpächter, die Planungssicherheit bevorzugen.</span>
                    </p>
                </div>

                {/* --- REASON 5 --- */}
                <div className="mt-16 mb-12 border-t border-gray-100 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-green text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shrink-0 shadow-md">5</div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            ESG-Druck schafft Verkäufermarkt – jetzt profitieren
                        </h3>
                    </div>

                    <p className="mb-6">
                        Pensionsfonds müssen Milliarden in nachhaltige Assets investieren. Solar-Pachtverträge sind knapp. Hohe Nachfrage bedeutet: Verpächter haben Verhandlungsmacht.
                    </p>

                    <div className="flex items-center gap-4 bg-green-50 p-6 rounded-lg border border-green-200 shadow-sm my-8">
                        <TrendingDown className="w-10 h-10 text-brand-green rotate-180" />
                        <div>
                            <strong className="block text-brand-green text-xl">Verkäufermarkt 2026</strong>
                            <p className="text-gray-700 text-lg">Das Kapital sucht die Projekte, nicht umgekehrt. Aktuell zahlen Investoren Aufschläge, weil das Angebot an guten Verträgen knapp ist.</p>
                        </div>
                    </div>

                    <p>
                        Im Mobilfunkmarkt zeigte sich: Frühe Verkäufer erhielten bessere Konditionen als späte. Der Solarmarkt steht heute dort, wo Mobilfunk vor zehn Jahren stand.
                         <br/>
                         <span className="text-base font-bold text-gray-500 mt-2 block">Relevant für: Verpächter, die das Meiste aus der aktuellen Situation machen möchten.</span>
                    </p>
                </div>

                <hr className="border-gray-200 my-16" />

                {/* --- CONCLUSION SECTION --- */}
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Die ehrliche Rechnung:<br/> Wann lohnt es sich – und wann nicht?
                </h3>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                    Nicht jeder Verpächter sollte verkaufen. Die Entscheidung hängt von der individuellen Situation ab.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl border-t-4 border-green-500 shadow-lg">
                        <h4 className="font-bold text-xl text-green-700 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" /> Einmalzahlung macht Sinn, wenn Sie:
                        </h4>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> <span className="text-gray-700">Kredite mit hohen Zinsen bedienen (6%+)</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> <span className="text-gray-700">Konkrete Investitionsmöglichkeiten haben</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> <span className="text-gray-700">Familie jetzt unterstützen möchten</span></li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span> <span className="text-gray-700">Risiko-Transfer bevorzugen</span></li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl border-t-4 border-gray-400 shadow-lg bg-gray-50/50">
                        <h4 className="font-bold text-xl text-gray-700 mb-6 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> Jährliche Pacht bleibt besser, wenn Sie:
                        </h4>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3"><span className="text-gray-400 font-bold">✕</span> <span className="text-gray-600">Keine aktuelle Verwendung für Kapital haben</span></li>
                            <li className="flex items-start gap-3"><span className="text-gray-400 font-bold">✕</span> <span className="text-gray-600">Die jährliche Pacht als festes Einkommen zwingend benötigen</span></li>
                        </ul>
                    </div>
                </div>

                {/* --- FAQ SECTION --- */}
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8 mt-16">
                    Die drei häufigsten Bedenken – und die Fakten
                </h3>

                <div className="space-y-6 mb-16">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl text-brand-dark mb-2 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-brand-orange" /> "Ich bekomme doch weniger als über 20 Jahre"
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Stimmt mathematisch – aber Inflation frisst Kaufkraft. 23.200 Euro im Jahr 2040 sind real nur noch ca. 15.000 Euro wert. Die entscheidende Frage ist nicht "Bekomme ich weniger?", sondern "Was kann ich mit 450.000 Euro heute erreichen, das ich mit Ratenzahlung nicht kann?" (Opportunitätskosten).
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl text-brand-dark mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-brand-orange" /> "Die wollen mich über den Tisch ziehen"
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Die Bewertung ist 100% transparent. Sie basiert auf: Restlaufzeit, Jahrespacht, Bonität und Zinsen. "Die Bewertung ist mathematisch nachvollziehbar", sagt Engelsman. Im Mobilfunkmarkt funktioniert dasselbe Modell seit über zehn Jahren sicher.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl text-brand-dark mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-brand-orange" /> "Das klingt zu gut um wahr zu sein"
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Es ist kein Geschenk, sondern ein Geschäft auf Augenhöhe (Win-Win). Sie brauchen Kapital heute. Pensionsfonds brauchen sichere Einnahmen über Jahrzehnte. Beide erreichen ihre Ziele durch den Tausch.
                        </p>
                    </div>
                </div>

                {/* --- PROCESS SECTION --- */}
                <div className="bg-brand-green/5 rounded-2xl p-8 md:p-10 mb-12">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Wie der Prozess funktioniert</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-brand-green text-xl shadow-sm shrink-0">1</div>
                            <div>
                                <strong className="block text-gray-900 text-lg">Unverbindliche Bewertung</strong>
                                <span className="text-base text-gray-600">Ergebnis in 48 Stunden. Kostenlos.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-brand-green text-xl shadow-sm shrink-0">2</div>
                            <div>
                                <strong className="block text-gray-900 text-lg">Konkretes Angebot</strong>
                                <span className="text-base text-gray-600">Transparent nach Marktkriterien.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-brand-green text-xl shadow-sm shrink-0">3</div>
                            <div>
                                <strong className="block text-gray-900 text-lg">Notarielle Abwicklung</strong>
                                <span className="text-base text-gray-600">Alle Kosten trägt der Käufer.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-brand-green text-xl shadow-sm shrink-0">4</div>
                            <div>
                                <strong className="block text-gray-900 text-lg">Auszahlung</strong>
                                <span className="text-base text-gray-600">Nach 60-90 Tagen auf Ihrem Konto.</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-brand-green/10 text-center">
                        <p className="font-bold text-brand-green text-lg">Wichtig: Das Land bleibt zu 100% Ihr Eigentum.</p>
                    </div>
                </div>

            </div>

            {/* Conversion Section with ID for Anchor Link */}
            <div id="rechner" className="mt-16">
              <ConversionBox />
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
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
          <div className="lg:hidden block space-y-10 mt-12 pt-10 border-t border-gray-200">
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