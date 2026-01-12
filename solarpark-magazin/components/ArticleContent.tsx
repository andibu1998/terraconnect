import React from 'react';
import { ConversionBox } from './ConversionBox';
import { BarChart3, Image, Network, ArrowRight } from 'lucide-react';
import { ImagePlaceholderProps } from '../types';
import { getDynamicDate } from '../utils/date';

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ caption, height = "h-64", iconType = "landscape" }) => {
  const Icon = iconType === 'chart' ? BarChart3 : iconType === 'flow' ? Network : Image;
  
  return (
    <div className="my-10 group">
      <div className={`w-full ${height} bg-gray-200 rounded-sm flex flex-col items-center justify-center text-gray-400 border border-gray-300 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100" />
        <Icon className="w-12 h-12 mb-2 relative z-10 opacity-50" />
        <span className="text-xs font-semibold uppercase tracking-widest relative z-10 opacity-50">Bildplatzhalter</span>
      </div>
      <p className="mt-3 text-sm text-gray-600 font-sans border-l-4 border-brand-orange pl-3 italic leading-relaxed">
        {caption}
      </p>
    </div>
  );
};

export const ArticleContent: React.FC = () => {
  const publishDate = getDynamicDate(3);

  return (
    <article className="font-sans text-brand-dark leading-relaxed">
      {/* Header Info */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <span className="block text-brand-green font-bold text-sm tracking-widest uppercase mb-2">Finanzen & Agrar | Markt-Report 2026</span>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
          Liquidität aus dem Boden: Warum deutsche Solarpark-Verpächter ihre Verträge jetzt zu Bargeld machen – ohne ihr Land zu verkaufen
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
          Ein Finanzierungsmodell, das im Mobilfunkmarkt seit über zehn Jahren Standard ist, erreicht den Solar-Sektor: Wie Grundbesitzer durch eine intelligente Vertrags-Umstellung 20 Jahre Wartezeit überspringen und sofortige Investitionskraft gewinnen.
        </h2>
      </div>

      <ImagePlaceholder 
        caption="Luftaufnahme eines Solarparks auf deutschem Ackerland - Symbolbild für Wertschöpfung im ländlichen Raum." 
        height="h-80"
        iconType="landscape"
      />

      {/* Meta Data */}
      <div className="flex items-center text-sm text-gray-500 mb-8 font-semibold">
        <span className="uppercase tracking-wide">Frankfurt am Main</span>
        <span className="mx-2 text-brand-orange">•</span>
        <time>Veröffentlicht am {publishDate} | Lesezeit: 4 Min</time>
      </div>

      {/* Body Text */}
      <div className="text-lg md:text-[19px] leading-[1.8] space-y-6 text-gray-800">
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-green first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:leading-[0.8]">
          Zehntausende landwirtschaftliche Flächen in Deutschland sind aktuell für Solarparks verpachtet. Für die Eigentümer bedeutet das: Sicherheit auf dem Papier, aber oft Stillstand auf dem Konto. Die typische Jahrespacht liegt oft im fünfstelligen Bereich. Über 20 Jahre summiert sich das auf ein beachtliches Vermögen.
        </p>
        
        <p>
          Das Problem: Dieses Vermögen ist "eingefroren". Wenn heute Liquidität benötigt wird – für den Zukauf von Flächen, den Abbau teurer Kredite oder die Hofnachfolge – hilft ein Vertrag über künftige Zahlungen wenig. Sie sind reich an Substanz, aber arm an Liquidität.
        </p>

        <p className="font-medium text-gray-900">
          Hier setzt ein Modell an, das Investoren und Verpächter im Jahr 2026 gleichermaßen elektrisiert – und das seine Bewährungsprobe in einer anderen Branche längst bestanden hat.
        </p>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Der Blick über den Zaun: Was im Mobilfunk längst Standard ist</h3>
        
        <p>
          Um die Sicherheit dieses Modells zu verstehen, lohnt ein Blick auf den Mobilfunkmarkt. Tausende deutsche Grundstückseigentümer, auf deren Land ein Mast der Telekom oder Vodafone steht, haben ihre Pachtverträge bereits "monetarisiert".
        </p>

        <p>
          Das Prinzip: Sie verkaufen nicht das Land. Sie verkaufen nicht den Mast. Sie verkaufen lediglich die zukünftigen Zahlungsansprüche an spezialisierte Investoren. Das Ergebnis: Eine hohe sechsstellige Einmalzahlung sofort, statt kleiner Mieten über Jahrzehnte.
        </p>

        <ImagePlaceholder 
          caption="Bewährtes Vorbild: Was bei Mobilfunkmasten seit einem Jahrzehnt Praxis ist, nutzen nun auch Solar-Verpächter."
          height="h-64"
          iconType="landscape" 
        />

        <blockquote className="border-l-4 border-brand-green pl-6 py-2 my-8 bg-green-50/50 rounded-r-lg">
          <p className="font-serif text-xl italic text-gray-800 mb-4">
            "Was Grundstückseigentümer im Mobilfunkbereich seit Jahren nutzen, funktioniert bei Solarparks exakt genauso. Die Verträge sind ähnlich, die Sicherheiten sind identisch. Der Solarmarkt holt jetzt einfach nach, was woanders schon Standard ist."
          </p>
          <cite className="block text-sm font-bold text-brand-green not-italic uppercase tracking-wide">
            — Maurits Engelsman, Mitgründer von TerraConnect
          </cite>
        </blockquote>

        <p>
          Seit TerraConnect dieses Modell auf Solarparks übertragen hat, verzeichnet das Unternehmen einen massiven Anstieg der Anfragen. Doch warum lohnt sich der Tausch für beide Seiten?
        </p>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Die Logik des Geldes: Warum Pensionsfonds Ihre Pacht wollen</h3>
        
        <p>
          Das Modell basiert auf einer klassischen Win-Win-Situation durch unterschiedliche Interessenlagen.
        </p>

        <ul className="list-none space-y-4 my-6">
          <li className="flex gap-4 p-4 bg-gray-50 rounded-md">
            <div className="font-bold text-brand-green whitespace-nowrap">Sie (Der Unternehmer):</div>
            <div>Brauchen Kapital heute, um zu investieren, Schulden zu tilgen oder Risiken zu senken.</div>
          </li>
          <li className="flex gap-4 p-4 bg-gray-50 rounded-md">
            <div className="font-bold text-brand-green whitespace-nowrap">Der Investor:</div>
            <div>Braucht Sicherheit über 20 Jahre, um Rentenzahlungen zu garantieren. Er sucht "langweilige", stabile Einnahmen und muss zudem ESG-Vorgaben ("Grüne Investments") erfüllen.</div>
          </li>
        </ul>

        <ImagePlaceholder 
          caption="Infografik: Liquidität trifft Sicherheit - Wie zwei gegensätzliche Interessen perfekt ineinandergreifen."
          height="h-56"
          iconType="chart"
        />

        <p>
          TerraConnect bringt diese Welten zusammen. Der Pensionsfonds zahlt Ihnen heute eine signifikante Einmalzahlung (Barwert). Er kauft Ihnen die "Wartezeit" ab. Sie erhalten sofortige Handlungsfreiheit.
        </p>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Die 5 Gründe: Warum Verpächter jetzt verkaufen</h3>
        <p className="mb-6">Nach der Analyse hunderter Transaktionen kristallisieren sich fünf Hauptmotive heraus, warum Eigentümer den "Spatz in der Hand" (Einmalzahlung) der "Taube auf dem Dach" (Ratenzahlung) vorziehen.</p>

        <div className="space-y-8">
            <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">1. Zins-Arbitrage (Der Hebel gegen die Bank)</h4>
                <p>Viele Betriebe bedienen noch immer Kredite mit hohen Zinsen. Ein Pachtvertrag rentiert intern oft deutlich niedriger. Die Rechnung: Wer den Pachtvertrag verkauft und mit dem Erlös den teuren Bankkredit ablöst, spart über die Jahre oft Zehntausende Euro an Zinskosten. Sie sanieren die Bilanz mit eigenem Vermögen, statt die Bank zu bezahlen.</p>
            </div>
            <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">2. Der "Grüne Hunger" der Investoren</h4>
                <p>Pensionsfonds müssen Milliarden in nachhaltige Assets investieren. Das Angebot an guten deutschen Solar-Verträgen ist knapp. Das bedeutet für Sie: Verkäufermarkt. Aktuell lassen sich Bewertungen erzielen, die vor einigen Jahren noch undenkbar waren.</p>
            </div>
            <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">3. Opportunitätskosten (Inflation der Sachwerte)</h4>
                <p>Baupreise und Bodenpreise steigen historisch schneller als die Indexierung der Pacht. Ein Szenario: Der Nachbarhof steht für 320.000 Euro zum Verkauf. In drei Jahren, wenn Sie genug Pacht angespart hätten, kostet er vielleicht 400.000 Euro – oder ist weg. Wer heute über Liquidität verfügt, kauft billiger.</p>
            </div>
            <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">4. Politik-Risiko auslagern</h4>
                <p>Das EEG ändert sich stetig. Niemand garantiert, dass die Rahmenbedingungen in 15 Jahren noch dieselben sind. Wer verkauft, transferiert das Risiko von Strompreisen, Inflation und Betreiber-Insolvenz komplett an den Käufer.</p>
            </div>
            <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">5. Die Familie (Generationen-Kapital)</h4>
                <p>Oft braucht die nächste Generation jetzt Startkapital – für den Hausbau oder die Firmengründung. Ein Pachtvertrag hilft in 20 Jahren, Liquidität hilft heute.</p>
            </div>
        </div>

        <div className="bg-brand-green/10 p-6 rounded-lg my-10 border border-brand-green/20">
            <h3 className="font-serif text-xl font-bold text-brand-green mb-3 flex items-center gap-2">
                <CheckCircleIcon /> Faktencheck: Das Land bleibt Ihr Eigentum
            </h3>
            <p className="mb-4">Die häufigste Sorge der Eigentümer ist unbegründet: "Muss ich mein Land verkaufen?" – <strong>Nein.</strong> Es handelt sich um einen reinen Forderungsverkauf.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Das Grundbuch bleibt bei Ihnen.</li>
                <li>Sie können die Fläche vererben oder verkaufen (der Pachtvertrag läuft einfach weiter).</li>
                <li>Für Eigentümer, die einen kompletten "Exit" wünschen, bietet TerraConnect optional auch den Bodenkauf an.</li>
            </ul>
        </div>

        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Wie die Bewertung funktioniert</h3>
        <p>TerraConnect nutzt keine "Daumenwerte", sondern eine mathematische Barwert-Berechnung. Diese basiert auf vier Faktoren:</p>
        <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Restlaufzeit</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Jahrespacht-Höhe</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Bonität Betreiber</div>
            <div className="bg-gray-50 p-4 border border-gray-200 text-center font-medium">Kapitalmarktzinsen</div>
        </div>
        <p>Das Ergebnis: Verpächter erhalten in der Regel einen Großteil der nominalen Pachtsumme sofort ausgezahlt. "Die Bewertung ist transparent", betont Engelsmann. "Jeder Kaufmann versteht nach zwei Minuten, wie die Zahl zustande kommt."</p>
        
        <h3 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">Der Ablauf in 4 Schritten</h3>
        <p className="mb-6">Der Prozess ist standardisiert und auf maximale Rechtssicherheit ausgelegt.</p>
        
        <ImagePlaceholder 
          caption="Bewertung > Angebot > Notar > Auszahlung. Der Weg zur Liquidität ist kurz."
          height="h-40"
          iconType="flow"
        />

        <ol className="relative border-l border-brand-green/30 ml-3 space-y-6 mt-8">
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">1</span>
                <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">Bewertung (48 Std.)</h3>
                <p className="mb-4 text-base font-normal text-gray-500">Sie geben Eckdaten ein. TerraConnect ermittelt den Marktwert. Kostenlos.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">2</span>
                <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">Angebot</h3>
                <p className="mb-4 text-base font-normal text-gray-500">Sie erhalten ein verbindliches Kaufangebot.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">3</span>
                <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">Notar</h3>
                <p className="mb-4 text-base font-normal text-gray-500">Der Vertrag wird notariell beurkundet. Alle Kosten trägt TerraConnect.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-green rounded-full -left-4 ring-4 ring-white text-white text-sm font-bold">4</span>
                <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">Auszahlung (60-90 Tage)</h3>
                <p className="mb-4 text-base font-normal text-gray-500">Das Kapital fließt auf Ihr Konto.</p>
            </li>
        </ol>

        <div className="my-12 p-8 bg-gray-100 rounded-lg">
            <h3 className="font-serif text-xl font-bold mb-6">Fazit: Wer profitiert – und wer nicht?</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-green-700 mb-3 border-b border-green-200 pb-2">Es lohnt sich für Sie, wenn:</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie teure Kredite ablösen können.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie Investitionschancen nutzen wollen.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie Risiken ausschließen wollen.</li>
                        <li className="flex items-start gap-2"><span className="text-green-600">✅</span> Sie die Familie heute unterstützen möchten.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-red-700 mb-3 border-b border-red-200 pb-2">Es lohnt sich eher nicht, wenn:</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Sie das Geld für reinen Konsum verbrauchen.</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Sie keine Verwendung für Kapital haben.</li>
                    </ul>
                </div>
            </div>
        </div>

        <p className="font-bold">
            Nutzen Sie das Zeitfenster 2026. Die Kombination aus hohem Investoren-Interesse und dem Bedürfnis nach Liquidität macht das laufende Jahr zum idealen Zeitpunkt für eine Bewertung. Sie müssen nicht verkaufen. Aber als Unternehmer sollten Sie wissen, was Ihr Asset heute wert ist.
        </p>

      </div>

      {/* Conversion Section */}
      <ConversionBox />
    </article>
  );
};

const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);