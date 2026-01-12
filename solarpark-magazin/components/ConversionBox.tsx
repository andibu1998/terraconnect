import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Calculator, Lock, X, Check, Loader2, Phone } from 'lucide-react';

interface FormData {
  hasSolarPark: 'yes' | 'no' | null;
  commYear: string;
  sizeHectares: string;
  leasePerHectare: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
  eventId: string;
}

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/vZHsvAh2e7NEOzHzMRGL/webhook-trigger/b8216b06-e56d-49fd-9065-25580de07da8";
const EXPERT_IMAGE = "https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960b5ed0597df5687112287.webp";

export const ConversionBox: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<FormData>({
    hasSolarPark: null,
    commYear: '',
    sizeHectares: '',
    leasePerHectare: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
    eventId: ''
  });

  // Init Event ID on mount
  useEffect(() => {
    const id = 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    setFormData(prev => ({ ...prev, eventId: id }));
  }, []);

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendWebhook = async (data: any) => {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors' // Often necessary for direct browser-to-webhook calls to avoid CORS errors, though it makes response opaque
      });
    } catch (error) {
      console.error("Webhook Error", error);
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hasSolarPark === 'yes' && formData.commYear && formData.sizeHectares && formData.leasePerHectare) {
      setStep(2);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.consent) {
      // Fire & Forget Webhook
      const payload = { ...formData, stage: 'partial_lead' };
      sendWebhook(payload);
      
      // Move to next step immediately
      setStep(3);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    setLoading(true);
    
    // Final Webhook
    const payload = { ...formData }; // No stage or stage='full_lead' implied
    await sendWebhook(payload);

    // Simulate short network delay for UX if webhook is too fast or opaque
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  // --- RENDER HELPERS ---

  const renderProgressBar = () => (
    <div className="flex justify-center mb-6">
      <div className="bg-gray-100 rounded-full px-4 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200">
        Schritt {step} von 3
      </div>
    </div>
  );

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-brand-green rounded-lg shadow-xl overflow-hidden my-12 p-10 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-green" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-brand-dark mb-4">Vielen Dank!</h3>
        <p className="text-gray-600 text-lg">
          Ihre Daten wurden sicher übermittelt. Wir melden uns in Kürze bei Ihnen bezüglich Ihrer Barwert-Analyse.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-brand-green/20 rounded-lg shadow-xl overflow-hidden my-12 relative" id="calculator">
      {/* Header (Constant) */}
      <div className="bg-brand-green p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
            <Calculator size={100} />
        </div>
        <div className="flex items-center gap-3 mb-2 relative z-10">
          <Calculator className="w-6 h-6 text-brand-orange" />
          <h3 className="font-serif text-2xl font-bold leading-tight">Sofort-Check: Wie viel Kapital steckt in Ihrem Pachtvertrag?</h3>
        </div>
        <p className="text-white text-lg font-medium opacity-95 relative z-10 max-w-2xl leading-relaxed mt-3">
          Die meisten Solar-Verpächter wissen nicht, wie viel Liquidität in ihren Verträgen gebunden ist. Finden Sie es mit wenigen Klicks heraus:
        </p>
      </div>

      {/* Trust Bar */}
      <div className="bg-brand-green/5 px-6 py-3 flex flex-wrap gap-4 text-xs font-semibold text-brand-dark uppercase tracking-wide border-b border-brand-green/10">
        <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Dauer: 60 Sekunden</span>
        <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Ergebnis: 48 Std</span>
        <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-orange" /> Risiko: Null</span>
      </div>

      {/* Steps Container */}
      <div className="p-6 md:p-8">
        
        {step < 4 && renderProgressBar()}

        {/* --- STEP 1: QUALIFICATION --- */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="space-y-4">
              <label className="block text-center font-serif text-lg font-bold text-gray-700 mb-6 uppercase tracking-wider">
                Haben Sie einen Solarpark auf Ihrer Fläche?
              </label>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleChange('hasSolarPark', 'yes')}
                  className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center gap-3 transition-all ${
                    formData.hasSolarPark === 'yes' 
                      ? 'border-brand-green bg-green-50 text-brand-green shadow-md ring-1 ring-brand-green' 
                      : 'border-gray-200 hover:border-brand-green/50 hover:bg-gray-50 text-gray-500'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.hasSolarPark === 'yes' ? 'bg-brand-green text-white' : 'bg-gray-200'}`}>
                    <Check size={24} />
                  </div>
                  <span className="font-bold text-lg">Ja</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleChange('hasSolarPark', 'no')}
                  className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center gap-3 transition-all ${
                    formData.hasSolarPark === 'no' 
                      ? 'border-red-500 bg-red-50 text-red-600 shadow-md' 
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50/50 text-gray-500'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.hasSolarPark === 'no' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>
                    <X size={24} />
                  </div>
                  <span className="font-bold text-lg">Nein</span>
                </button>
              </div>
            </div>

            {/* Logic: NO */}
            {formData.hasSolarPark === 'no' && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-center text-sm font-medium animate-in fade-in">
                Wir kaufen aktuell ausschließlich bereits bestehende Solarparks an.
              </div>
            )}

            {/* Logic: YES -> Show Inputs */}
            {formData.hasSolarPark === 'yes' && (
              <div className="space-y-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Inbetriebnahme (Jahr)</label>
                  <input 
                    required type="number" min="2000" max="2026"
                    value={formData.commYear} onChange={(e) => handleChange('commYear', e.target.value)}
                    placeholder="z.B. 2018" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Fläche (Hektar)</label>
                  <input 
                    required type="number" step="0.1"
                    value={formData.sizeHectares} onChange={(e) => handleChange('sizeHectares', e.target.value)}
                    placeholder="z.B. 10" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pacht pro Hektar (€)</label>
                  <input 
                    required type="number"
                    value={formData.leasePerHectare} onChange={(e) => handleChange('leasePerHectare', e.target.value)}
                    placeholder="z.B. 3000" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-4 text-white font-bold text-lg py-4 rounded shadow-sm flex items-center justify-center gap-2 transition-all duration-200 bg-gray-300 cursor-not-allowed data-[active=true]:bg-brand-green data-[active=true]:shadow-md data-[active=true]:cursor-pointer data-[active=true]:hover:opacity-85"
                  data-active={formData.commYear && formData.sizeHectares && formData.leasePerHectare ? "true" : "false"}
                  disabled={!(formData.commYear && formData.sizeHectares && formData.leasePerHectare)}
                >
                  Weiter zu Schritt 2 <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </form>
        )}

        {/* --- STEP 2: CONTACT --- */}
        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="space-y-5 animate-in fade-in slide-in-from-right-8 duration-500">
             <h3 className="font-serif text-2xl font-bold text-brand-green text-center mb-6">
                Wohin dürfen wir die Analyse senden?
             </h3>
             <p className="text-center text-gray-500 text-sm -mt-4 mb-6">Ihre Daten sind bei uns sicher.</p>

             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Vorname</label>
                  <input 
                    required type="text"
                    value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)}
                    placeholder="Ihr Vorname" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                  />
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nachname</label>
                  <input 
                    required type="text"
                    value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)}
                    placeholder="Ihr Nachname" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                  />
               </div>
             </div>

             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">E-Mail Adresse</label>
                <input 
                  required type="email"
                  value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="ihre.mail@beispiel.de" 
                  className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                />
             </div>

             <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    required
                    checked={formData.consent}
                    onChange={(e) => handleChange('consent', e.target.checked)}
                    className="mt-1 w-5 h-5 text-brand-green rounded border-gray-300 focus:ring-brand-green" 
                  />
                  <span className="text-sm text-gray-600 leading-snug">
                    Ich stimme zu, dass TerraConnect mich per E-Mail und Telefon kontaktieren darf, um meine Bewertung zu besprechen. Widerruf jederzeit möglich.
                  </span>
                </label>
             </div>

             <button 
                type="submit" 
                className="w-full bg-brand-green/60 hover:bg-brand-green text-white font-bold text-lg py-4 rounded shadow-md transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.consent}
              >
                Weiter <ArrowRight className="w-5 h-5" />
              </button>
          </form>
        )}

        {/* --- STEP 3: PHONE / FINISH --- */}
        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 text-center">
             
             <div className="flex justify-center mb-4">
                <div className="relative">
                  <img src={EXPERT_IMAGE} alt="Michael Wilder" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" />
                  <div className="absolute bottom-0 right-0 bg-brand-green text-white rounded-full p-1 border-2 border-white">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
             </div>

             <h3 className="font-serif text-2xl font-bold text-brand-green mb-2">
                Fast geschafft!
             </h3>

             <p className="text-gray-700 leading-relaxed max-w-sm mx-auto">
               Unser Experte <strong className="text-brand-green">Michael Wilder</strong> benötigt nur noch Ihre Rückrufnummer, um offene Fragen zur Bewertung direkt zu klären.
             </p>

             <div className="max-w-xs mx-auto text-left">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Telefonnummer</label>
                <div className="relative">
                   <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                   <input 
                    required type="tel"
                    value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+49 123 456789" 
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 pl-10 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition text-lg"
                  />
                </div>
             </div>

             <div className="pt-2">
               <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-[#c2410c] text-white font-bold text-lg py-4 rounded shadow-md transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Wird verarbeitet...
                    </>
                  ) : (
                    "Kostenlose Bewertung anfordern"
                  )}
                </button>
             </div>

             <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Ihre Daten werden sicher verschlüsselt. 100% Kostenlos & Diskret.
             </p>

          </form>
        )}

      </div>
    </div>
  );
};
