import React, { useState, useEffect } from 'react';
import { ConversionBox } from '../components/ConversionBox';
import { getDynamicDate } from '../utils/date';
import { CheckCircle2, TrendingUp, TrendingDown, Calculator, ArrowRight, AlertTriangle, XCircle, Coins, Lock, Info, Landmark, Calendar, Ban } from 'lucide-react';

export const Inflationsschutz: React.FC = () => {
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
    <div className="relative bg-white">
      {/* Main Content Container - MAX WIDTH 7XL (Matches Header/Logo alignment) */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 pb-24 md:pb-20">
        
        {/* Article Header - LINKSBÜNDIG (auch mobil) und STANDARD SCHRIFTGRÖSSEN */}
        <div className="mb-8 border-b border-gray-200 pb-6 text-left">
          <span className="block text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mb-3">
            Finanz-Analyse | Inflation & Pacht
          </span>
          
          {/* Schriftgröße reduziert auf Standard (2xl/4xl statt 3xl/6xl) */}
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-brand-dark">
            Solar-Pachtverträge: "Inflationsschutz" kostet über 20 Jahre durchschnittlich 180.000€ reale Kaufkraft
          </h1>

          {/* Subheadline Textgröße angepasst */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif max-w-5xl">
            Verliert auch Ihr Vertrag stillschweigend an Wert? Neue Berechnungen zeigen: VPI-indexierte Pachten steigen um 2-3%, während Ackerland- und Baupreise um das Doppelte explodieren. Experten empfehlen sofortige Barwert-Prüfung.
          </p>
        </div>

        {/* Hero Image */}
        <figure className="my-8 md:my-10">
            <img 
            src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69709d0a15885ed7db39d50d.webp" 
            alt="Solarpark Vermögen" 
            className="w-full h-auto rounded-xl shadow-lg"
            />
            <figcaption className="mt-4 text-left text-base text-gray-500 italic border-l-4 border-gray-300 pl-4">
              Ein typischer 10-Hektar-Solarpark generiert über 20 Jahre Pachteinnahmen von 600.000€. Neue Analysen zeigen jedoch: Der reale Kaufkraftverlust trotz Inflationsanpassung kann bis zu 180.000€ betragen.
            </figcaption>

             {/* Author Line - MOVED HERE (BELOW IMAGE) */}
             <div className="flex flex-row items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <img 
                  src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0c7683beb42d8731a.webp" 
                  alt="Dr. Stefan Wiegand"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-gray-200 shadow-sm shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-gray-900 font-sans text-base md:text-lg">
                    Markt-Analyse von <strong className="font-bold">Dr. Stefan Wiegand</strong>
                  </span>
                  <span className="text-sm text-gray-500 font-sans font-medium">
                    MÜNCHEN • Lesezeit: 5 Min • <span className="text-gray-500 uppercase tracking-wide text-xs font-bold px-1 border border-gray-300 rounded mx-1">Advertorial</span> • Aktualisiert: {publishDate}
                  </span>
                </div>
            </div>
        </figure>

        {/* Management Summary */}
        <div className="bg-[#f9f9f9] border border-gray-300 p-8 md:p-10 rounded-xl mb-14 shadow-sm font-sans">
          <h3 className="font-bold text-brand-dark mb-6 text-xl uppercase tracking-wide border-b border-gray-300 pb-3">Das Wichtigste in Kürze</h3>
          <ul className="space-y-5 mb-0 list-none text-gray-800 text-xl leading-relaxed">
            <li className="flex gap-4">
              <span className="text-brand-orange font-bold text-2xl mt-[-4px]">•</span>
              <span>
                <strong className="text-brand-dark">Inflations-Schere:</strong> VPI-indexierte Solar-Pachten steigen um 2-3% jährlich, während Ackerland- und Baupreise um das Doppelte explodieren. Der reale Kaufkraftverlust kann über 20 Jahre bis zu 180.000€ betragen.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-brand-orange font-bold text-2xl mt-[-4px]">•</span>
              <span>
                <strong className="text-brand-dark">Pacht-Kapitalisierung:</strong> Ein etabliertes Verfahren aus dem Mobilfunk-Sektor ermöglicht es Verpächtern, ihre zukünftigen Zahlungsströme sofort als Einmalzahlung zu erhalten – ohne Landverkauf.
              </span>
            </li>
             <li className="flex gap-4">
              <span className="text-brand-orange font-bold text-2xl mt-[-4px]">•</span>
              <span>
                <strong className="text-brand-dark">Gute Zeiten für Verpächter:</strong> Pensionsfonds und institutionelle Anleger zahlen aktuell historische Höchstbewertungen für langfristige Pachtverträge.
              </span>
            </li>
          </ul>
        </div>

        {/* Article Body - FULL WIDTH (max-w-none inside the 7xl container) */}
        <div className="text-xl md:text-[21px] leading-[1.8] space-y-10 text-gray-800 font-sans">
          
          <p>
            Wenn Sie eine Photovoltaik-Freiflächenanlage auf Ihrem Grund haben, kennen Sie das Gefühl der Sicherheit.
            Der Pachtvertrag läuft 20 Jahre oder länger. Die Einnahmen kommen pünktlich, Jahr für Jahr. Auf dem Papier summieren sich Ihre Ansprüche auf 500.000 Euro, vielleicht 600.000 Euro oder mehr. Der Vertrag ist indexiert – „inflationsgeschützt" steht da schwarz auf weiß.
          </p>
          <p>
            Es fühlt sich an wie ein solides Fundament für die Zukunft Ihres Betriebs.
            Doch genau dieses Sicherheitsgefühl könnte trügerisch sein.
          </p>
          <p>
            Denn während Sie auf die jährlichen Zahlungen warten, passiert in der Realität etwas, das Ihre zukünftige Kaufkraft Tag für Tag verringert – ein strukturelles Problem, das Finanzexperten als die <strong>„Inflations-Schere"</strong> bezeichnen.
          </p>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Das Problem hat einen Namen: Die "Inflations-Schere"
          </h3>

          <p>
            Fast alle Solar-Pachtverträge enthalten eine Wertsicherungsklausel. Diese koppelt Ihre Einnahmen an den Verbraucherpreisindex (VPI) – einen Warenkorb aus Brot, Milch, Benzin und Kleidung. Dieser Index steigt historisch moderat: etwa 2 bis 3 Prozent jährlich.
          </p>
          <p>
            Das klingt vernünftig. Doch hier liegt der entscheidende Denkfehler.
            Denn mit 30.000€ Jahrespacht kaufen Sie nicht nur Brot – Sie kaufen Land, Beton, Maschinen.
          </p>
          <p>
            Als Grundeigentümer und Unternehmer wollen Sie Ackerland zukaufen, Hallen bauen, Maschinen modernisieren. Und genau hier wird das Problem sichtbar: Die Preise für diese Vermögenswerte steigen deutlich schneller als der VPI.
          </p>

          <ul className="bg-red-50 p-8 rounded-xl border border-red-100 space-y-4 text-lg md:text-xl">
            <li className="flex items-center gap-3"><TrendingUp className="text-red-600 w-6 h-6 shrink-0"/> <span><strong>Ackerland:</strong> Preissteigerungen von 7-9% jährlich in guten Lagen</span></li>
            <li className="flex items-center gap-3"><TrendingUp className="text-red-600 w-6 h-6 shrink-0"/> <span><strong>Baukosten:</strong> Massive Anstiege, besonders seit 2020</span></li>
            <li className="flex items-center gap-3"><TrendingUp className="text-red-600 w-6 h-6 shrink-0"/> <span><strong>Landtechnik:</strong> Deutliche Verteuerung bei Neuanschaffungen</span></li>
          </ul>

          <p>
            Das ist die Schere: Ihre indexierten Einnahmen kriechen im Tempo des VPI vorwärts, während die Preise für Boden und Betriebssubstanz im Sprint davonlaufen.
          </p>

          {/* CHART VISUALIZATION - NEW IMAGE */}
          <figure className="my-12 border border-gray-200 rounded-xl p-2 shadow-sm bg-white">
             <img 
               src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/697b2c761f68d117a7f03381.webp" 
               alt="Inflations-Schere Visualisierung" 
               className="w-full h-auto rounded-lg" 
             />
             <figcaption className="mt-4 text-center text-base text-gray-500 italic p-4">
               Die "Inflations-Schere" visualisiert: Während VPI-gekoppelte Pachteinnahmen moderat steigen, explodieren Preise für Ackerland und Bausubstanz. Die Differenz wird jährlich größer.
             </figcaption>
          </figure>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Was bedeutet das konkret für Sie?
          </h3>
          <p>
            Jedes Jahr, das vergeht, wird der Abstand größer. Die 30.000 Euro, die Sie in fünf Jahren erhalten, sind nominal noch 30.000 Euro – doch Sie bekommen dafür deutlich weniger Ackerland als heute.
          </p>
          <p>
            Wenn der Nachbar überraschend Land zum Verkauf anbietet, stehen Sie als Zuschauer am Spielfeldrand. Während andere mit Eigenkapital sofort zuschlagen können, müssen Sie erklären: „Das Geld kommt, aber erst in Raten, über Jahre verteilt."
          </p>
          <p>
            Sie haben Vermögen – aber keine Handlungsfähigkeit.
            Banken behandeln Ihre zukünftigen Pachteinnahmen nicht als vollwertige Sicherheit. Kredite werden teuer oder gar nicht bewilligt. Sie sitzen auf Hunderttausenden Euro an zukünftigen Pachteinnahmen, doch wenn es darauf ankommt, fühlen Sie sich finanziell gelähmt.
          </p>
          <p className="font-medium">
            Das ist keine theoretische Rechnung. Das ist die stille Realität für tausende Verpächter in Deutschland.
          </p>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Gibt es einen Ausweg aus dieser Falle?
          </h3>
          <p>
            Ja. Aber er funktioniert anders, als die meisten Verpächter denken.
            Die Lösung kommt nicht von der Bank. Und sie erfordert nicht, dass Sie Ihr Land verkaufen.
            Stattdessen nutzt sie einen Mechanismus, der in professionellen Infrastruktur-Märkten seit über zehn Jahren Standard ist – und nun erstmals auch privaten Solar-Verpächtern zugänglich wird.
          </p>
          
          {/* MOBILFUNK BILD EINGEFÜGT */}
          <figure className="my-12">
            <img 
              src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0533c665c1f1b2c0d.webp" 
              alt="Mobilfunkmast auf Ackerland" 
              className="w-full h-auto rounded-xl shadow-md grayscale-[20%]"
            />
            <figcaption className="mt-3 text-left text-base text-gray-500 italic">
              Das Vorbild: Im Mobilfunkmarkt ist der Verkauf von Pachtforderungen längst Standard – nun nutzen auch Solar-Verpächter dieses Modell.
            </figcaption>
          </figure>

          <div className="bg-brand-green/5 border-l-8 border-brand-green p-8 my-10 rounded-r-xl">
             <h4 className="font-bold text-brand-dark text-2xl mb-3">Die Lösung: Pacht-Kapitalisierung</h4>
             <p className="text-gray-800 text-xl leading-relaxed">
               Das Prinzip ist ein strategischer Tausch: Sie wandeln Ihre zukünftigen Pachtforderungen – die über 20 Jahre verteilt und durch die Inflations-Schere entwertet werden – in sofortiges Eigenkapital um.
             </p>
          </div>

          <p>
            Statt zu warten, bis das Geld „irgendwann" kommt, holen Sie den mathematischen Barwert dieser Zahlungen ins Heute. Sie schließen die Schere, indem Sie das Kapital genau dann nutzen, wenn es die höchste Kaufkraft hat: jetzt.
          </p>
          <p>
            Und das Entscheidende: Sie verkaufen keinen Quadratmeter Land. Ihr Grundbuch bleibt unberührt. Sie tauschen lediglich den Anspruch auf zukünftige Zahlungen gegen heutige Liquidität.
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4 text-xl">
             <li>Die Pachtfläche? <strong>Bleibt Ihr Eigentum.</strong></li>
             <li>Die Solaranlage? <strong>Steht weiterhin auf Ihrem Grund.</strong></li>
             <li>Der Unterschied? <strong>Sie haben sofort Handlungsfähigkeit statt jahrzehntelanger Wartezeit.</strong></li>
          </ul>

          {/* NEW BEFORE / AFTER COMPARISON TABLE */}
          <div className="my-16 border-2 border-brand-green/20 rounded-xl overflow-hidden shadow-lg bg-white">
             {/* Header */}
             <div className="bg-brand-dark text-white text-center py-4 px-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wide leading-tight">PACHTVERTRAG: KLASSISCH VS. KAPITALISIERT</h3>
             </div>

             <div className="grid md:grid-cols-2">
                {/* LEFT COLUMN: CLASSIC */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 flex flex-col h-full">
                   <h4 className="font-bold text-gray-600 text-xl mb-6 uppercase tracking-wider flex items-center gap-2 border-b border-gray-200 pb-4">
                      <Lock className="w-5 h-5" /> Klassische Pacht
                      <span className="text-xs normal-case bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-auto">(Status Quo)</span>
                   </h4>
                   
                   <div className="space-y-8 flex-grow">
                      <div>
                         <span className="block text-sm text-gray-500 font-bold uppercase mb-1">Zahlungsstruktur</span>
                         <span className="text-lg text-gray-800 font-medium">20 Jahre verteilt</span>
                      </div>
                      
                      <div>
                         <span className="block text-sm text-gray-500 font-bold uppercase mb-1">Beispiel (10 ha)</span>
                         <div className="bg-white border border-gray-200 p-3 rounded">
                            <span className="block text-lg text-gray-800 font-bold">30.000€ pro Jahr</span>
                            <span className="block text-sm text-gray-500 mt-1">Für die nächsten 20 Jahre</span>
                         </div>
                      </div>

                      <div className="space-y-3">
                         <div className="flex items-center gap-3 text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100/50">
                            <XCircle className="w-5 h-5 shrink-0" /> Inflations-Schere
                         </div>
                         <div className="flex items-center gap-3 text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100/50">
                            <Ban className="w-5 h-5 shrink-0" /> Keine Liquidität
                         </div>
                         <div className="flex items-center gap-3 text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100/50">
                            <XCircle className="w-5 h-5 shrink-0" /> Bank-Ablehnung
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 pt-4 border-t border-gray-200">
                      <span className="block text-sm text-gray-500 font-bold uppercase mb-2">Eigentum</span>
                      <p className="flex items-center gap-2 text-gray-700 font-medium">
                         <CheckCircle2 className="w-5 h-5 text-gray-400"/> Land bleibt Ihres
                      </p>
                   </div>
                </div>

                {/* RIGHT COLUMN: CAPITALIZED */}
                <div className="p-8 bg-brand-green/5 flex flex-col h-full relative overflow-hidden">
                   {/* Badge */}
                   <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase shadow-sm">
                      Sofortlösung
                   </div>

                   <h4 className="font-bold text-brand-green text-xl mb-6 uppercase tracking-wider flex items-center gap-2 border-b border-brand-green/20 pb-4">
                      <Coins className="w-5 h-5" /> Ertrags-Kapitalisierung
                   </h4>
                   
                   <div className="space-y-8 flex-grow">
                      <div>
                         <span className="block text-sm text-brand-green/70 font-bold uppercase mb-1">Zahlungsstruktur</span>
                         <span className="text-xl text-brand-dark font-bold">Einmalzahlung heute</span>
                      </div>
                      
                      <div>
                         <span className="block text-sm text-brand-green/70 font-bold uppercase mb-1">Beispiel (10 ha)</span>
                         <div className="bg-white border border-brand-green/20 p-3 rounded shadow-sm">
                            <span className="block text-2xl text-brand-green font-black">400.000€ - 560.000€</span>
                            <span className="block text-sm text-brand-dark font-medium mt-1">Sofort verfügbar</span>
                         </div>
                      </div>

                      <div className="space-y-3">
                         <div className="flex items-center gap-3 text-brand-dark font-medium bg-white p-2 rounded border border-brand-green/10 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Heutige Kaufkraft
                         </div>
                         <div className="flex items-center gap-3 text-brand-dark font-medium bg-white p-2 rounded border border-brand-green/10 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Volle Handlungsfähigkeit
                         </div>
                         <div className="flex items-center gap-3 text-brand-dark font-medium bg-white p-2 rounded border border-brand-green/10 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Eigenkapital-Status
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 pt-4 border-t border-brand-green/20">
                      <span className="block text-sm text-brand-green/70 font-bold uppercase mb-2">Eigentum</span>
                      <p className="flex items-center gap-2 text-brand-dark font-bold">
                         <CheckCircle2 className="w-5 h-5 text-brand-green"/> Land bleibt Ihres
                      </p>
                   </div>
                </div>
             </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Aktiver Vermögensschutz statt Notverkauf
          </h3>
          <p>
            Viele Eigentümer zögern bei diesem Gedanken. „Etwas verkaufen" fühlt sich nach Schwäche an, nach finanzieller Not.
            Doch genau hier liegt ein Missverständnis.
          </p>
          <p>
            Die Pacht-Kapitalisierung ist kein Notverkauf. Sie ist aktives Vermögensmanagement – eine strategische Entscheidung, Kapital dort einzusetzen, wo es den größten Nutzen bringt.
            Denken Sie an erfolgreiche Familienunternehmen: Sie verkaufen regelmäßig Beteiligungen oder Forderungen, um liquide zu bleiben und Chancen zu nutzen. Das macht sie nicht schwach – das macht sie beweglich.
          </p>
          
          {/* CTA / CONTEXT TRIGGER - DOMINANT DESIGN (Dunkelblau) */}
          <div 
            onClick={scrollToCalculator}
            className="bg-brand-dark text-white p-10 rounded-xl text-center my-14 cursor-pointer hover:bg-gray-800 transition-all shadow-xl transform hover:-translate-y-1"
          >
             <h4 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-white leading-snug">
               Wie viel "brachliegendes Kapital" steckt in Ihrem Solar-Pachtvertrag?
             </h4>
             <div className="inline-flex items-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors uppercase tracking-wide shadow-lg">
                <Calculator className="w-6 h-6" /> JETZT KOSTENLOS BERECHNEN
             </div>
          </div>

          {/* QUOTE DESIGN - SUBTLE DESIGN (Grau) - SWAPPED POSITION */}
          <div className="my-14 p-10 bg-gray-100 text-gray-800 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
             <p className="font-serif text-2xl md:text-3xl font-bold italic leading-relaxed relative z-10">
                "Die Frage ist nicht: ‚Muss ich verkaufen?‘ <br/><br/>
                Die Frage ist: ‚Will ich weiter zusehen, wie mein Kapital im Vertrag gefangen bleibt – oder will ich wieder Herr über meine eigenen Entscheidungen sein?‘"
             </p>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Ein etabliertes Modell
          </h3>
          <p>
            Dieses Vorgehen ist keine neue Erfindung. In den letzten zehn Jahren haben über 3.000 Grundeigentümer ihre Mobilfunk-Pachtverträge kapitalisiert – ein identisches Modell, nur mit Funkmasten statt Solaranlagen.
          </p>
          <p>
            Was im Telekommunikations-Sektor längst Standard ist, steht nun auch Solar-Verpächtern offen. Der Mechanismus ist derselbe: Zukünftige Zahlungsströme werden mathematisch bewertet und sofort ausgezahlt.
          </p>
          <p>
            Das Kapital dafür stammt in der Regel von konservativen institutionellen Anlegern wie deutschen Pensionsfonds, die langfristige Sicherheit suchen – genau das, was Solar-Pachtverträge bieten.
          </p>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Standardisierte Bewertungsverfahren
          </h3>
          <p>
             Die Bewertung erfolgt nach dem DCF-Verfahren (Discounted Cash Flow) – demselben mathematischen Standard, den Wirtschaftsprüfer und Banken bei der Unternehmensbewertung anwenden. Jede zukünftige Zahlung wird auf ihren heutigen Wert abgezinst, transparent und nachvollziehbar.
          </p>

          {/* MARKET TICKER */}
          <div className="my-14 bg-[#F5F7F9] border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="mb-8 border-b border-gray-300 pb-3">
              <span className="block font-bold text-gray-500 uppercase tracking-widest text-sm">
                MARKT-UPDATE: FINANZEN & AGRAR 2026
              </span>
            </div>

            <div className="space-y-8">
              {/* Block 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <img src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69747432eb392b2525fc2394.webp" alt="Rentenbank" className="h-8 w-auto object-contain shrink-0 mt-1"/>
                 <div>
                    <h5 className="font-bold text-brand-dark text-xl mb-2">Finanzierung wird teurer</h5>
                    <p className="text-lg text-gray-700 leading-relaxed">Da Förderprogramme auslaufen und Kreditzinsen stabil hoch bleiben (ca. 3,8% laut Rentenbank 01/26), wird Eigenkapital zur wertvollsten Ressource. Die Ablösung von Pachtverträgen ermöglicht zinsfreie Investitionen.</p>
                 </div>
              </div>
              
              <hr className="border-gray-200" />

              {/* Block 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <img src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69747432a87beb1bd37c8d44.webp" alt="Destatis" className="h-8 w-auto object-contain shrink-0 mt-1"/>
                 <div>
                    <h5 className="font-bold text-brand-dark text-xl mb-2">Inflation frisst Pacht-Gewinne</h5>
                    <p className="text-lg text-gray-700 leading-relaxed">Langfristige Verträge bergen ein stilles Risiko: Die Inflation. Laut Destatis haben 20.000€ heute eine deutlich höhere Kaufkraft als in 10 Jahren. Wer seine Pacht jetzt kapitalisiert, sichert das Geld zum heutigen Wert.</p>
                 </div>
              </div>

              <hr className="border-gray-200" />

              {/* Block 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                 <img src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69747432a87beb63d17c8d43.webp" alt="Handelsblatt" className="h-8 w-auto object-contain shrink-0 mt-1"/>
                 <div>
                    <h5 className="font-bold text-brand-dark text-xl mb-2">Run auf Infrastruktur</h5>
                    <p className="text-lg text-gray-700 leading-relaxed">Große Pensionsfonds suchen Sicherheit und kaufen bestehende Pachtverträge massiv auf (Handelsblatt/PwC Outlook). Verpächter profitieren aktuell von einem "Verkäufermarkt" mit historischen Höchstbewertungen.</p>
                 </div>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Drei häufige Fragen
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
               <strong className="block text-brand-dark mb-2 text-xl">Was ist mit den Steuern?</strong>
               <p className="text-gray-700 text-lg">In vielen Fällen kann eine Einmalzahlung steuerlich günstiger sein als jahrelange Einzelzahlungen. Experten empfehlen, jede Kapitalisierung vorab mit dem eigenen Steuerberater zu prüfen.</p>
            </div>
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
               <strong className="block text-brand-dark mb-2 text-xl">Wie wird der Preis ermittelt?</strong>
               <p className="text-gray-700 text-lg">Seriöse Anbieter nutzen das DCF-Verfahren – derselbe mathematische Standard, den Banken und Wirtschaftsprüfer anwenden. Die Berechnung ist transparent und nachvollziehbar.</p>
            </div>
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
               <strong className="block text-brand-dark mb-2 text-xl">Bin ich dann verpflichtet zu verkaufen?</strong>
               <p className="text-gray-700 text-lg">Eine professionelle Barwert-Analyse sollte unverbindlich sein. Sie erfahren, was Ihr Vertrag wert ist – ohne sich festzulegen.</p>
            </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-16 mb-6">
            Wieder handlungsfähig werden
          </h3>
          <p>
            Am Ende ist es eine Frage der unternehmerischen Haltung: Wollen Sie weiterhin verwalten, was ein Vertrag Ihnen zuteilt? Oder wollen Sie aktiv gestalten, wenn Gelegenheiten sich bieten?
          </p>
          <p>
            Die Entscheidung liegt bei Ihnen. Aber sie setzt voraus, dass Sie überhaupt wissen, welchen Wert Ihr Vertrag heute hat.
          </p>
          <p className="font-medium">
            Eine unverbindliche Barwert-Analyse gibt Ihnen diese Zahl. Keine Verpflichtung, keine Kosten – nur Klarheit über Ihre tatsächlichen Handlungsspielräume.
          </p>

        </div>

        {/* Calculator Section */}
        <div id="rechner" className="mt-16 max-w-7xl mx-auto">
          <ConversionBox />
        </div>
        
        {/* Footer Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400 max-w-5xl mx-auto">
           Hinweis: Diese Analyse dient ausschließlich Informationszwecken. Jede finanzielle Entscheidung sollte nach Rücksprache mit Ihrem Steuerberater und Rechtsanwalt getroffen werden.
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