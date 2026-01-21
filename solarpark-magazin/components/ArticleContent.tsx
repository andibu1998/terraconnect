import React from 'react';
import { ConversionBox } from './ConversionBox';
import { CheckCircle2, TrendingDown, Leaf, Hammer, ShieldAlert, Users } from 'lucide-react';
import { getDynamicDate } from '../utils/date';

export const ArticleContent: React.FC = () => {
  const publishDate = getDynamicDate(3);

  return (
    <article className="font-sans text-brand-dark leading-relaxed">
      {/* Header Info */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <span className="block text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Finanzen & Agrar | Markt-Report 2026</span>
        
        {/* Optimized Headline Size for Above the Fold visibility */}
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
          “Liquidität aus dem Boden”: Warum deutsche Grundbesitzer ihre Solar-Pachtverträge jetzt zu Bargeld machen – ohne ihr Land zu verkaufen
        </h1>
        
        {/* AUTHOR BYLINE - Updated with Advertorial */}
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
          Ein Finanzmodell aus dem Mobilfunkmarkt erreicht den Solar-Sektor: Statt 20 Jahre auf Pachtzahlungen zu warten, wandeln Grundbesitzer ihre Verträge in sofortige Einmalzahlungen um. Das steckt dahinter:
        </h2>
      </div>

      {/* HERO IMAGE */}
      <figure className="my-6 md:my-8 mb-8">
        <img 
          src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/69709d0afc6c321be3015133.webp" 
          alt="Landwirt auf Solarpark" 
          className="w-full h-auto rounded-lg shadow-md"
        />
        <figcaption className="mt-3 text-left text-sm text-gray-600 italic">
          Der Boden bleibt, das Geld fließt sofort: Solar-Verpächter erhalten Hunderttausende Euro an Kapital, ohne einen Quadratmeter Land zu verkaufen.
        </figcaption>
      </figure>

      {/* Meta Data */}
      <div className="flex items-center text-sm text-gray-500 mb-8 font-semibold">
        <span className="uppercase tracking-wide">Frankfurt am Main</span>
        <span className="mx-2 text-brand-orange">•</span>
        <time>Lesezeit: 4 Min</time>
      </div>

      {/* Body Text */}
      <div className="text-lg md:text-[19px] leading-[1.8] space-y-6 text-gray-800">
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-green first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:leading-[0.8]">
          Zehntausende landwirtschaftliche Flächen in Deutschland sind aktuell für Solarparks verpachtet. Für die Eigentümer bedeutet das: Sicherheit auf dem Papier, aber oft <strong className="font-semibold text-gray-900">Stillstand auf dem Konto</strong>. Die typische Jahrespacht liegt oft im fünfstelligen Bereich. Über 20 Jahre summiert sich das auf ein beachtliches Vermögen.
        </p>
        
        <p>
          Das Problem: Dieses Vermögen ist <strong className="font-semibold text-gray-900">'eingefroren'</strong>. Wenn heute Liquidität benötigt wird – für den Zukauf von Flächen, den Abbau teurer Kredite oder die Hofnachfolge – hilft ein Vertrag über künftige Zahlungen wenig. Sie sind reich an Substanz, aber arm an Liquidität.
        </p>

        <p className="font-medium text-gray-900">
          Hier setzt ein Modell an, das Investoren und Verpächter im Jahr 2026 gleichermaßen elektrisiert – und das seine Bewährungsprobe in einer anderen Branche längst bestanden hat.
        </p>

        {/* --- HIGHLIGHT BOX MOBILFUNK --- */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-brand-green my-10 shadow-sm">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Der Mobilfunk-Beweis: Warum dieses Modell seit 10 Jahren sicher funktioniert
          </h3>
          
          <p className="mb-6">
            Um die Sicherheit dieses Modells zu verstehen, lohnt ein Blick auf den Mobilfunkmarkt. Tausende deutsche Grundstückseigentümer, auf deren Land ein Mast der Telekom oder Vodafone steht, haben ihre Pachtverträge bereits "monetarisiert".
          </p>

          <p className="mb-6">
            Das Prinzip: Sie verkaufen <strong className="font-semibold text-gray-900">nicht das Land</strong>. Sie verkaufen nicht den Mast. Sie verkaufen lediglich die <strong className="font-semibold text-gray-900">zukünftigen Zahlungsansprüche</strong> an spezialisierte Investoren. Das Ergebnis: Eine <strong className="font-semibold text-gray-900">hohe sechsstellige Einmalzahlung sofort</strong>, statt kleiner Mieten über Jahrzehnte.
          </p>

          <div className="bg-white p-2 rounded border border-gray-200 shadow-sm mb-8">
             <img 
               src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d0533c665c1f1b2c0d.webp"
               alt="Vergleich Mobilfunkmast"
               className="w-full h-auto rounded"
             />
             <p className="mt-2 text-sm text-gray-500 italic px-1">Bewährtes Vorbild: Was bei Mobilfunkmasten seit einem Jahrzehnt Praxis ist, nutzen nun auch Solar-Verpächter.</p>
          </div>

          {/* QUOTE BLOCK - MAURITS ENGELSMAN - UPDATED JOB TITLE */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
            <img 
              src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696517c798efbd84f91e96da.webp" 
              alt="Maurits Engelsman"
              className="w-24 h-24 rounded-full object-cover border-2 border-brand-green/20 shadow-sm shrink-0"
            />
            <blockquote className="text-left">
              <p className="font-serif text-xl italic text-gray-800 mb-3 leading-relaxed">
                "Was Grundstückseigentümer im Mobilfunkbereich seit Jahren nutzen, funktioniert bei Solarparks exakt genauso. Die Verträge sind ähnlich, die Sicherheiten sind identisch. Der Solarmarkt holt jetzt einfach nach, was woanders schon Standard ist."
              </p>
              <cite className="block text-sm font-bold text-brand-green not-italic uppercase tracking-wide">
                — Maurits Engelsman, Partner bei TerraConnect Capital
              </cite>
            </blockquote>
          </div>
        </div>

        <p>
          Seit TerraConnect dieses Modell auf Solarparks übertragen hat, verzeichnet das Unternehmen einen massiven Anstieg der Anfragen. Doch warum lohnt sich der Tausch für beide Seiten?
        </p>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
          Das Tausch-Geschäft: Warum Investoren Ihnen die Wartezeit abkaufen wollen
        </h3>
        
        <p>
          Das Modell basiert auf einer klassischen Win-Win-Situation durch unterschiedliche Interessenlagen.
        </p>

        <ul className="list-none space-y-4 my-6 text-lg">
          <li className="flex gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
            <div className="font-bold text-brand-green whitespace-nowrap">Sie (Der Unternehmer):</div>
            <div>Brauchen Kapital heute, um zu investieren, Schulden zu tilgen oder Risiken zu senken.</div>
          </li>
          <li className="flex gap-4 p-5 bg-gray-50 rounded-md border border-gray-100">
            <div className="font-bold text-brand-green whitespace-nowrap">Der Investor:</div>
            <div>Braucht Sicherheit über 20 Jahre, um Rentenzahlungen zu garantieren. Er sucht "langweilige", stabile Einnahmen und muss zudem ESG-Vorgaben ("Grüne Investments") erfüllen.</div>
          </li>
        </ul>

        {/* WIN-WIN GRAPHIC */}
        <figure className="my-8">
          <img 
            src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/696516d018cf86415445c6ca.webp"
            alt="Infografik: Liquidität trifft Sicherheit"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
            Liquidität trifft Sicherheit: Wie zwei gegensätzliche Interessen perfekt ineinandergreifen.
          </figcaption>
        </figure>

        <p>
          TerraConnect bringt diese Welten zusammen. Der Pensionsfonds zahlt Ihnen heute eine signifikante Einmalzahlung (Barwert). Er kauft Ihnen die "Wartezeit" ab. Sie erhalten sofortige Handlungsfreiheit.
        </p>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-8">
          Die 5 Gründe, warum Eigentümer gerade jetzt handeln
        </h3>
        <p className="mb-8">Nach der Analyse hunderter Transaktionen kristallisieren sich fünf Hauptmotive heraus, warum Eigentümer den "Spatz in der Hand" (Einmalzahlung) der "Taube auf dem Dach" (Ratenzahlung) vorziehen.</p>

        {/* --- GRID SYSTEM REASONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Reason 1 */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <TrendingDown className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 leading-tight">Zins-Arbitrage</h4>
                </div>
                <p className="text-base text-gray-600">
                   Viele Betriebe bedienen noch immer Kredite mit hohen Zinsen. Wer den Pachtvertrag verkauft und damit Kredite ablöst, spart über die Jahre oft <strong className="font-semibold text-gray-900">Zehntausende Euro an Zinskosten</strong>.
                </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Leaf className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 leading-tight">Grüner Hunger</h4>
                </div>
                <p className="text-base text-gray-600">
                    Pensionsfonds müssen in nachhaltige Assets investieren. Das Angebot ist knapp. Das bedeutet für Sie: Verkäufermarkt mit historischen Höchstbewertungen.
                </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Hammer className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 leading-tight">Opportunitätskosten</h4>
                </div>
                <p className="text-base text-gray-600">
                    Bodenpreise steigen oft schneller als die Pacht-Indexierung. Wer heute Liquidität hat, kann Nachbarflächen kaufen, bevor sie noch teurer werden.
                </p>
            </div>

             {/* Reason 4 */}
             <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <ShieldAlert className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 leading-tight">Politik-Risiko</h4>
                </div>
                <p className="text-base text-gray-600">
                    Niemand garantiert, dass das EEG in 15 Jahren noch stabil ist. Ein Verkauf transferiert Inflation und Betreiber-Risiken komplett an den Käufer.
                </p>
            </div>

             {/* Reason 5 */}
             <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Users className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 leading-tight">Generationen-Kapital</h4>
                </div>
                <p className="text-base text-gray-600">
                    Oft braucht die nächste Generation jetzt Startkapital – für den Hausbau oder die Firmengründung. Ein Pachtvertrag hilft in 20 Jahren, Liquidität hilft heute.
                </p>
            </div>

        </div>

        <div className="bg-brand-green/5 p-8 rounded-lg my-10 border border-brand-green/20">
            <h3 className="font-serif text-xl font-bold text-brand-green mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8" /> Faktencheck: Das Land bleibt Ihr Eigentum
            </h3>
            <p className="mb-4 text-gray-800 text-lg">Die häufigste Sorge der Eigentümer ist unbegründet: "Muss ich mein Land verkaufen?" – <strong>Nein.</strong> Es handelt sich um einen reinen Forderungsverkauf.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                <li><strong className="font-semibold text-gray-900">Das Grundbuch bleibt bei Ihnen</strong>.</li>
                <li>Sie können die Fläche vererben oder verkaufen (der Pachtvertrag läuft einfach weiter).</li>
                <li>Für Eigentümer, die einen kompletten "Exit" wünschen, bietet TerraConnect optional auch den Bodenkauf an.</li>
            </ul>
        </div>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Wie die Bewertung funktioniert</h3>
        <p>TerraConnect nutzt keine "Daumenwerte", sondern eine mathematische Barwert-Berechnung. Diese basiert auf vier Faktoren:</p>
        <div className="grid grid-cols-2 gap-4 my-6 text-lg">
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Restlaufzeit</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Jahrespacht-Höhe</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Bonität Betreiber</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Kapitalmarktzinsen</div>
        </div>
        <p>Das Ergebnis: Verpächter erhalten in der Regel einen Großteil der nominalen Pachtsumme sofort ausgezahlt. "Die Bewertung ist transparent", betont Engelsmann.</p>
        
        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Der Ablauf in 4 Schritten</h3>
        <p className="mb-6">Der Prozess ist standardisiert und auf maximale Rechtssicherheit ausgelegt.</p>
        
        {/* Process Flow HTML */}
        <ol className="relative border-l border-brand-green/30 ml-3 space-y-6 mt-8">
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">1</span>
                <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">Bewertung</h3>
                <p className="mb-4 text-lg font-normal text-gray-500">Sie geben Eckdaten ein. TerraConnect ermittelt den Marktwert. Ergebnis: <strong className="font-semibold text-gray-900">Innerhalb von 48 Stunden</strong>.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">2</span>
                <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">Angebot</h3>
                <p className="mb-4 text-lg font-normal text-gray-500">Sie erhalten ein verbindliches Kaufangebot.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">3</span>
                <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">Notar</h3>
                <p className="mb-4 text-lg font-normal text-gray-500">Der Vertrag wird notariell beurkundet. Alle Kosten trägt TerraConnect.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">4</span>
                <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">Auszahlung (60-90 Tage)</h3>
                <p className="mb-4 text-lg font-normal text-gray-500">Das Kapital fließt auf Ihr Konto.</p>
            </li>
        </ol>

        <div className="my-12 p-8 bg-gray-100 rounded-lg border border-gray-200">
            <h3 className="font-serif text-xl font-bold mb-6">Fazit: Wer profitiert – und wer nicht?</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-green-700 mb-3 border-b border-green-200 pb-2 text-lg">Es lohnt sich für Sie, wenn:</h4>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie teure Kredite ablösen können.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie Investitionschancen nutzen wollen.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie Risiken ausschließen wollen.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie die Familie heute unterstützen möchten.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-red-700 mb-3 border-b border-red-200 pb-2 text-lg">Es lohnt sich eher nicht, wenn:</h4>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Sie das Geld für reinen Konsum verbrauchen.</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Sie keine Verwendung für Kapital haben.</li>
                    </ul>
                </div>
            </div>
        </div>

        <p className="font-bold text-lg">
            Nutzen Sie das Zeitfenster 2026. Die Kombination aus hohem Investoren-Interesse und dem Bedürfnis nach Liquidität macht das laufende Jahr zum idealen Zeitpunkt für eine Bewertung. Sie müssen nicht verkaufen. Aber als Unternehmer sollten Sie wissen, was Ihr Asset heute wert ist.
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

    </article>
  );
};