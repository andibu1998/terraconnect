import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  ChevronDown,
  Landmark,
  MapPin,
  Building2,
  Euro,
  Users,
  Briefcase,
  AlertCircle,
  FileText,
  Zap,
  Wallet,
  Check,
  X,
  Sprout,
  Cog,
  Home as HomeIcon,
  GraduationCap,
  Percent,
  Lightbulb,
  MoveRight,
  Phone,
  MessageSquare,
  Quote as QuoteIcon,
  Scale,
  Search,
  Unlock,
  Lock,
  ArrowUp,
  Loader2,
  History,
  LockKeyhole,
  Handshake,
  Timer,
  Minus,
  Calculator,
  ArrowRightCircle,
  UserCheck,
  Tractor,
  Gavel,
  ClipboardCheck,
  ThumbsUp,
  ShieldAlert
} from 'lucide-react';
import { Button } from '../components/Button';
import { Accordion } from '../components/Accordion';

export const Home: React.FC = () => {
  // Form State
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Persistent Event ID for CAPI deduplication (generated once per session)
  const [eventId] = useState(() => 'evt_' + Date.now() + '_' + Math.floor(Math.random() * 1000000));

  const [formData, setFormData] = useState({
    hasSolarPark: '',
    commYear: '',
    sizeHectares: '',
    leasePerHectare: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const handleScrollToForm = () => {
    document.getElementById('conversion-area')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Validation Logic
  const validateStep1 = () => {
    return formData.hasSolarPark && formData.commYear && formData.sizeHectares && formData.leasePerHectare;
  };

  const validateStep2 = () => {
    return formData.firstName && formData.lastName && formData.email && formData.consent;
  };

  const validateStep3 = () => {
    return formData.phone && formData.phone.length > 5;
  };

  // --- TRACKING HELPER START ---
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return '';
  };

  // Helper to fetch IP address asynchronously
  const getClientIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return '';
    }
  };

  const getTrackingParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      fbp: getCookie('_fbp') || '',
      fbc: getCookie('_fbc') || '',
      user_agent: navigator.userAgent,
      page_url: window.location.href,
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || ''
    };
  };
  // --- TRACKING HELPER END ---

  // Handle Step 2 Submit (Partial Lead Capture)
  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    // Fire partial lead webhook with advanced tracking params (fire and forget)
    try {
      const ip = await getClientIp();
      const trackingData = getTrackingParams();
      
      const payload = { 
        ...formData, 
        ...trackingData,
        stage: 'partial_lead',
        event_id: eventId,
        client_ip: ip,
        event_time: Math.floor(Date.now() / 1000)
      };

      fetch('https://services.leadconnectorhq.com/hooks/vZHsvAh2e7NEOzHzMRGL/webhook-trigger/b8216b06-e56d-49fd-9065-25580de07da8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (err) {
      // ignore errors for partial submit
    }

    setFormStep(3);
    window.scrollTo({
      top: document.getElementById('conversion-area')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  // Handle Final Submit
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    
    try {
      const ip = await getClientIp();
      const trackingData = getTrackingParams();
      
      const payload = { 
        ...formData, 
        ...trackingData,
        event_id: eventId,
        client_ip: ip,
        event_time: Math.floor(Date.now() / 1000)
      };

      await fetch('https://services.leadconnectorhq.com/hooks/vZHsvAh2e7NEOzHzMRGL/webhook-trigger/b8216b06-e56d-49fd-9065-25580de07da8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => ({ ok: true }));

      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressWidth = () => {
    if (isSuccess) return "100%";
    switch(formStep) {
      case 1: return "33%";
      case 2: return "66%";
      case 3: return "95%";
      default: return "33%";
    }
  };

  const processSteps = [
    {
      step: "1",
      icon: <FileText className="w-8 h-8 text-brand-green" />,
      title: "Formular ausfüllen",
      description: (
        <>Wir benötigen <strong>nur grundlegende Informationen</strong> zu Ihrem Solarpachtvertrag.</>
      )
    },
    {
      step: "2",
      icon: <Timer className="w-8 h-8 text-brand-green" />,
      title: "Bewertung in 48h",
      description: (
        <>Sie erhalten ein transparentes, faires Angebot <strong>ohne Verpflichtung</strong>.</>
      )
    },
    {
      step: "3",
      icon: <Scale className="w-8 h-8 text-brand-green" />,
      title: "Entscheidung in Ruhe",
      description: (
        <>Bei Interesse führen wir eine <strong>einfache, sichere Transaktion</strong> durch.</>
      )
    },
    {
      step: "4",
      icon: <Wallet className="w-8 h-8 text-brand-green" />,
      title: "Auszahlung (60-90 Tage)",
      description: (
        <>Das gesamte Kapital auf einmal, zu Ihrer <strong>freien Verfügung</strong>.</>
      ),
      isSpecial: true
    }
  ];

  const safetyGuarantees = [
    {
      icon: <Gavel className="w-10 h-10" />,
      title: "RECHTLICHE SICHERHEIT",
      description: "Prüfung durch spezialisierte Rechtsanwälte & volle rechtliche Beratung vor jeder Entscheidung."
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "TRANSPARENTE BEWERTUNG",
      description: "Klare, nachvollziehbare Kriterien und detaillierte Erläuterung aller Berechnungsfaktoren."
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: "UNVERBINDLICHE ANFRAGE",
      description: (
        <>Absolut unverbindlich. Die Bewertung Ihres Vertrags <strong>verpflichtet Sie zu nichts.</strong></>
      ),
      highlight: true
    },
    {
      icon: <ShieldAlert className="w-10 h-10" />,
      title: "DATENSCHUTZ",
      description: "Ihre persönlichen und vertraglichen Informationen werden streng vertraulich geschützt.",
      showBadge: true
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "ERFAHRENE PARTNER",
      description: "Zusammenarbeit mit spezialisierten Banken und Notaren für höchste Transaktionssicherheit."
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "ABSOLUTE DISKRETION",
      description: "Wir behandeln Ihr Anliegen 100% vertraulich. Niemand in Ihrem Umfeld erfährt von Ihrer Kapitalmaßnahme."
    }
  ];

  const faqs = [
    {
      question: "Wie wird der Wert meines Vertrags berechnet?",
      answer: "Wir berechnen den sogenannten 'Barwert' Ihrer zukünftigen Einnahmen. Dabei spielen die Restlaufzeit Ihres Vertrags, die Höhe der aktuellen Pacht und die Bonität des Solarpark-Betreibers eine Rolle. Sie erhalten ein transparentes Angebot."
    },
    {
      question: "Wie lange dauert der gesamte Prozess vom Antrag bis zur Auszahlung?",
      answer: "Nach Ihrer Anfrage erhalten Sie innerhalb von 48 Stunden eine erste indikative Bewertung. Die komplette rechtliche und notarielle Abwicklung bis zur Auszahlung dauert in der Regel 60 bis 90 Tage."
    },
    {
      question: "Welche Unterlagen benötige ich für die Bewertung?",
      answer: "Für die erste Bewertung genügen Ihr aktueller Pachtvertrag und die letzte Abrechnung. Keine komplizierten Bilanzen nötig."
    },
    {
      question: "Gibt es versteckte Kosten oder Gebühren?",
      answer: "Nein. Unser Angebot ist kostenfrei. Wir übernehmen alle Transaktionskosten (Rechtsanwalt, Notar). Sie erhalten den vollen Kaufpreis."
    },
    {
      question: "Was passiert mit meinem Land/der Solaranlage nach dem Verkauf?",
      answer: "Ihr Land bleibt 100% Ihr Eigentum. Wir kaufen nur das Recht auf die Auszahlung der Pacht. Der Pachtvertrag läuft unverändert weiter."
    },
    {
      question: "Muss ich den gesamten Vertrag verkaufen oder kann ich auch nur einen Teil verkaufen?",
      answer: "Sie sind flexibel. Sie können auch nur einen Teil (z.B. 50%) der Einnahmen verkaufen, um Kapital zu erhalten und dennoch laufende Einnahmen zu behalten."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white overflow-x-hidden text-brand-green">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960a9959c38cbbeb4b72ae3.webp" 
              alt="TerraConnect Logo" 
              className="h-12 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-10">
            <nav className="hidden lg:flex items-center gap-10 text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
              <a href="#vorteile" className="hover:text-brand-accent transition-colors duration-300">Vorteile</a>
              <a href="#prozess" className="hover:text-brand-accent transition-colors duration-300">Prozess</a>
              <a href="#erfolge" className="hover:text-brand-accent transition-colors duration-300">Erfolge</a>
              <a href="#faq" className="hover:text-brand-accent transition-colors duration-300">FAQ</a>
            </nav>
            <a 
              href="tel:+4915207834045" 
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone size={16} className="text-brand-accent fill-brand-accent" />
              <span className="font-bold text-sm md:text-base">+49 1520 7834045</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695fba58dc5e042a18c24fc2.webp" 
             alt="Agrarlandschaft mit Photovoltaik" 
             className="w-full h-full object-cover scale-105"
           />
           {/* Dark Green Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#1a3c30]/60 to-[#1a3c30]/90"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl px-4 max-w-6xl mx-auto"
          >
            All Ihre zukünftigen Solar-Pachteinnahmen – <span className="text-brand-accent">in 90 Tagen</span> als Einmalzahlung auf Ihrem Konto
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white font-sans text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 md:mb-12 font-light px-6"
          >
            Verwandeln Sie Ihre langfristigen Pachteinnahmen in sofortige Barzahlungen – <span className="text-brand-accent font-bold">ohne Ihr Land verkaufen zu müssen.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-16"
          >
            <Button 
              variant="accent"
              onClick={handleScrollToForm} 
              className="px-10 md:px-14 py-4 md:py-5 text-lg md:text-xl min-w-[300px] uppercase tracking-wide"
            >
              Kostenlose Bewertung anfordern
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-16 gap-y-6 text-xs md:text-sm uppercase tracking-[0.15em] font-bold text-white"
          >
            <div className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg backdrop-blur-sm border border-white/10">
              <Scale size={20} className="text-brand-accent" /> 
              <span>Notariell beglaubigt</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg backdrop-blur-sm border border-white/10">
              <CheckCircle2 size={20} className="text-brand-accent" /> 
              <span>100% Kostenfrei für Verpächter</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg backdrop-blur-sm border border-white/10">
              <FileText size={20} className="text-brand-accent" /> 
              <span>Deutsches Vertragswerk</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Bar Section (Bank-Style) */}
      <section className="bg-[#F8F9FA] py-16 md:py-24 border-b border-gray-100 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p 
              {...fadeInUp}
              className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-600 font-bold mb-4"
            >
              Nr. 1 Partner für Pachtvertragsankauf
            </motion.p>
          </div>
          
          {/* Reduced to 3 columns, centering contents */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 items-start justify-items-center">
            {[
              { 
                icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />, 
                val: "6 Büros", 
                sub: "u.a. Hauptsitz Frankfurt",
                desc: "Persönlich für Sie vor Ort verfügbar."
              },
              { 
                icon: <Euro className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />, 
                val: "Bis zu 10 Mio. €", 
                sub: "Verfügbares Investitionskapital (mtl.)",
                desc: "Höchste Liquidität für Ihre Auszahlung."
              },
              { 
                icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />, 
                val: "48 Stunden", 
                sub: "Bis zur ersten Bewertung",
                desc: "Schnelle Abwicklung ohne Wartezeit."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4 max-w-sm"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                  {item.icon}
                </div>
                <h3 className="font-sans text-3xl md:text-4xl text-brand-green font-black mb-2 tracking-tight">
                  {item.val}
                </h3>
                <p className="text-brand-green font-bold text-sm md:text-base mb-2">
                  {item.sub}
                </p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Agitation Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div {...fadeInUp}>
              <p className="italic text-gray-400 font-serif text-lg md:text-xl mb-4">Das Problem vieler Verpächter:</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight mb-8">
                Ein Vermögen vor der Haustür – aber kein Zugriff, wenn es darauf ankommt
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-2 bg-brand-accent/20 p-1 rounded-full"><AlertCircle className="w-5 h-5 text-brand-accent" /></div>
                    <span>Aber <span className="text-brand-accent font-bold">HEUTE</span>, wenn wichtige Entscheidungen anstehen...</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 bg-brand-accent/20 p-1 rounded-full"><AlertCircle className="w-5 h-5 text-brand-accent" /></div>
                    <span><span className="text-brand-accent font-bold">HEUTE</span>, wenn Ihre Familie Unterstützung braucht...</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 bg-brand-accent/20 p-1 rounded-full"><AlertCircle className="w-5 h-5 text-brand-accent" /></div>
                    <span><span className="text-brand-accent font-bold">HEUTE</span>, wenn einmalige Gelegenheiten sich bieten...</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 bg-brand-accent/20 p-1 rounded-full"><X className="w-5 h-5 text-red-500" /></div>
                    <span><span className="text-brand-accent font-bold">HEUTE</span> können Sie nicht auf dieses Vermögen zugreifen.</span>
                  </li>
                </ul>
              </div>

              {/* Bank Quote Box */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-r-2xl border-l-4 border-brand-green shadow-sm">
                <p className="font-serif italic text-xl md:text-2xl text-gray-600 leading-relaxed">
                  "Sie sitzen auf einem Schatz, den Sie nicht heben können. Die Bank betrachtet Ihre zukünftigen Einnahmen nicht als Sicherheit."
                </p>
              </div>
            </motion.div>

            {/* Visualization Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden group">
                <div className="text-center mb-10">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Die Realität von Vermögen vs. Liquidität</h4>
                  <p className="font-serif text-2xl font-bold text-brand-green uppercase leading-tight">Wie der Pachtvertrag Ihr Kapital bindet</p>
                </div>
                
                <div className="space-y-8">
                  {/* Total Wealth (Locked) */}
                  <div className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-xs font-bold text-gray-400 uppercase">Kumulierte Pacht (20 Jahre)</span>
                      <span className="font-serif text-2xl text-gray-300 font-black">600.000 €</span>
                    </div>
                    <div className="w-full h-32 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-dashed border-gray-200">
                      <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-[2px]"></div>
                      <div className="flex flex-col items-center gap-2 z-10">
                        <LockKeyhole size={48} className="text-gray-300 animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gesperrtes Kapital</span>
                      </div>
                    </div>
                  </div>

                  {/* Annual Payout (Small) */}
                  <div className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-xs font-bold text-brand-green uppercase">Aktuelle Liquidität (Jährlich)</span>
                      <span className="font-serif text-2xl text-brand-green font-black">30.000 €</span>
                    </div>
                    <div className="w-full h-8 bg-brand-accent rounded-full shadow-inner flex items-center justify-center">
                      <div className="h-full bg-brand-green/20 rounded-full animate-pulse-slow w-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
                   <Users size={16} />
                   <span>Landwirte stehen oft vor dieser Liquiditätsfalle. Wir lösen sie.</span>
                </div>
              </div>
              
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Revised Sektion 4 */}
      <section id="prozess" className="py-20 md:py-32 bg-[#F5F7FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight mb-4">
              So verwandeln wir Ihre zukünftigen Einnahmen <br className="hidden lg:block" /> in sofortiges Kapital
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Background Line Connector (Desktop) */}
            <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
              <div className="absolute top-0 right-0 w-[25%] h-full bg-gradient-to-r from-gray-200 via-brand-accent to-brand-green"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeInUp} 
                  transition={{ delay: idx * 0.1 }}
                  className={`
                    bg-white p-8 rounded-3xl relative overflow-hidden transition-all duration-300
                    ${step.isSpecial 
                      ? 'border-2 border-brand-accent shadow-[0_20px_40px_rgba(212,175,55,0.15)] ring-4 ring-brand-accent/5' 
                      : 'border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                    }
                  `}
                >
                  {/* Background Number Typography */}
                  <span className="absolute -top-4 -right-2 text-[120px] font-black text-brand-green/[0.04] select-none leading-none z-0">
                    {step.step}
                  </span>

                  {/* Icon Wrapper */}
                  <div className={`
                    w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative z-10
                    ${step.isSpecial ? 'bg-brand-accent/10' : 'bg-gray-50'}
                  `}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-serif text-xl font-bold text-brand-green mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <div className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </div>
                  </div>
                  
                  {/* Step Timeline Indicator (Mobile/Tablet Connector Dot) */}
                  <div className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gray-100 rounded-r-full">
                     <div className={`h-1/2 w-full rounded-full ${idx < 3 ? 'bg-gray-200' : 'bg-brand-accent'}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeInUp} className="flex justify-center mt-16 md:mt-24">
            <Button 
              variant="accent"
              onClick={handleScrollToForm} 
              className="px-12 py-5 text-lg md:text-xl min-w-[340px]"
            >
              Herausfinden, wie viel Ihr Vertrag wert ist <ArrowRight size={24} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section - Revised Sektion 5 */}
      <section id="vorteile" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight mb-6">
              Warum sich eine Einmalzahlung für viele Landbesitzer auszahlt
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Status Quo Card (Left/Pain) */}
            <motion.div 
              {...fadeInUp} 
              className="bg-[#F8F9FA] rounded-[2rem] p-8 md:p-14 border border-gray-100 flex flex-col order-2 lg:order-1 relative overflow-hidden"
            >
              <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">Jährliche Pachtzahlungen</h3>
              
              <ul className="space-y-7 flex-grow">
                <li className="flex items-start gap-4 text-gray-700">
                  <div className="mt-1 bg-gray-200 p-1.5 rounded-full"><Minus size={14} className="text-gray-500" /></div>
                  <span className="font-medium text-lg text-gray-600">Regelmäßige, planbare Einnahmen</span>
                </li>
                {[
                  "Kapital über Jahrzehnte gebunden",
                  "Keine Reaktion auf Chancen möglich",
                  "Inflation mindert den Realwert",
                  "Abhängigkeit vom Betreiber",
                  "Volles Markt- & Insolvenzrisiko nach Ende der EEG-Förderung",
                  "Laufender Verwaltungsaufwand & Abstimmung mit Betreiber",
                  "Begrenzte Handlungsfähigkeit"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-500 group">
                    <div className="mt-1 bg-red-50 p-1.5 rounded-full transition-colors"><X size={14} className="text-[#EF5350]" /></div>
                    <span className="text-lg leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 text-xs text-gray-400 font-medium italic">
                * Die historische Entwicklung zeigt, dass Inflation den Realwert fixer Pachten oft halbiert.
              </div>
            </motion.div>

            {/* Solution Card (Right/Lösung) */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }} 
              className="bg-white rounded-[2rem] border-2 border-brand-green/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative flex flex-col order-1 lg:order-2 overflow-hidden ring-4 ring-brand-green/[0.02]"
            >
              {/* Green Top Bar */}
              <div className="h-4 bg-brand-green w-full"></div>
              
              <div className="p-8 md:p-14">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-brand-green font-black leading-tight">Einmalzahlung</h3>
                  <div className="bg-brand-accent text-brand-green text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">Empfohlen</div>
                </div>

                <ul className="space-y-6 flex-grow">
                  {[
                    { text: "Sofortiges Kapital", bold: true },
                    { text: "Freie Entscheidung über Kapitaleinsatz", bold: false },
                    { text: "Unabhängigkeit von Betreiberrisiken", bold: false },
                    { text: "Chance auf höhere Renditen", bold: false },
                    { text: "Liquidität für Landkauf oder Expansion", bold: false },
                    { text: "Unterstützung der Familie", bold: false },
                    { text: "Schuldenabbau & massive Zinsersparnis", bold: false },
                    { text: "Einfache & klare Vermögensnachfolge", bold: false }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-green-50 p-1.5 rounded-full group-hover:bg-brand-green/10 transition-colors">
                        <Check size={18} className="text-[#2E7D32]" strokeWidth={3} />
                      </div>
                      <span className={`text-xl text-brand-green leading-snug ${item.bold ? 'font-black' : 'font-medium opacity-90'}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-14">
                  <Button 
                    variant="accent" 
                    onClick={handleScrollToForm} 
                    className="w-full py-6 text-xl font-black hover:scale-[1.02]"
                  >
                    Vorteile prüfen <ArrowRight size={22} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rechenbeispiel Section - Revised Sektion 6 */}
      <section className="py-20 md:py-32 bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <p className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">Finanzielle Gegenüberstellung</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight mb-6">
              Mehr Möglichkeiten durch sofortiges Kapital
            </h2>
            <p className="text-gray-500 font-medium text-lg md:text-xl">Beispiel: 10 Hektar Solarpacht</p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative"
          >
            {/* Split Grid - Changed layout to put connector in middle */}
            <div className="grid md:grid-cols-2 items-stretch relative">
              
              {/* Arrow Connection - Absolute Centered on Desktop */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center">
                 <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-green shadow-xl border-4 border-white transition-transform hover:scale-110">
                   <ArrowRightCircle size={32} />
                 </div>
              </div>

              {/* Left Side: Status Quo */}
              <div className="p-10 md:p-16 flex flex-col items-center md:items-start text-center md:text-left justify-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Aktuelle Situation</span>
                <h4 className="text-gray-500 font-serif text-2xl mb-2">Jährliche Pacht (Netto)</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black text-gray-800">23.200 €</span>
                  <span className="text-gray-400 font-medium">/ Jahr</span>
                </div>
                <p className="text-xs text-gray-400 font-medium mt-2 bg-gray-100 px-3 py-1 rounded-full">
                  *Bei angenommenen 42% Grenzsteuersatz
                </p>
                <div className="mt-8 flex items-center gap-3 text-red-400 bg-red-50/50 px-4 py-2 rounded-full text-xs font-bold">
                  <History size={14} /> 20+ Jahre Wartezeit
                </div>
              </div>

              {/* Mobile Separator (visible only on mobile) */}
              <div className="md:hidden flex justify-center py-6 bg-gradient-to-b from-white to-brand-green/5 relative z-10">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-green shadow-lg">
                   <ChevronDown size={24} />
                </div>
              </div>

              {/* Right Side: Potential */}
              <div className="p-10 md:p-16 bg-brand-green/5 flex flex-col items-center md:items-end text-center md:text-right justify-center relative">
                <span className="text-[10px] font-bold text-[#2E7D32] uppercase tracking-widest mb-4">Ihr Potenzial</span>
                <h4 className="text-brand-green font-serif text-2xl mb-2 font-bold italic">Sofortiges Kapital</h4>
                
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E7D32] tracking-tighter leading-none">
                    400.000 € –<br className="lg:hidden" /> 560.000 €
                  </span>
                </div>
                <p className="text-xs text-[#2E7D32] font-bold uppercase tracking-wider mt-3 bg-white/50 px-3 py-1 rounded-full border border-[#2E7D32]/10">
                  (Nach Steuern)
                </p>

                <div className="mt-8 flex items-center gap-3 text-[#2E7D32] bg-white border border-[#2E7D32]/10 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                  <CheckCircle2 size={14} /> Einmalige Vollauszahlung
                </div>
              </div>
            </div>

            {/* Bottom CTA Area */}
            <div className="bg-white border-t border-gray-50 p-8 flex flex-col items-center gap-6">
              <Button 
                variant="accent"
                onClick={handleScrollToForm}
                className="px-12 py-5 text-xl font-black min-w-[320px]"
              >
                Meinen Wert kostenlos berechnen <Calculator size={22} className="ml-2" />
              </Button>
              <p className="text-[10px] md:text-xs text-gray-400 max-w-lg text-center leading-relaxed">
                * Die tatsächliche Summe hängt von der individuellen Restlaufzeit, der Pachthöhe und der Bonität Ihres Parkbetreibers ab. Wir erstellen Ihnen gerne eine exakte und unverbindliche Berechnung.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & About Us Section - Sektion 7 */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Content: Headline + Text */}
            <motion.div {...fadeInUp} className="flex flex-col justify-center h-full">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight mb-8">
                Ihr deutscher Partner für langfristige Sicherheit
              </h2>
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                <p>
                  Wir sind keine anonyme Online-Plattform, sondern ein in Frankfurt am Main ansässiges Unternehmen, das fest in der deutschen Landwirtschaft verwurzelt ist.
                </p>
                <p>
                  Wir verstehen nicht nur die Finanzwelt, sondern auch die Realität Ihres Betriebs. Unser Team aus erfahrenen Experten etabliert dieses in den USA bereits milliardenschwere Erfolgsmodell nun auch in Deutschland – für Ihre finanzielle Freiheit.
                </p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0" />
                    <span>Persönliche Ansprechpartner in ganz Deutschland</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0" />
                    <span>Rechtssichere Verträge nach deutschem Recht</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0" />
                    <span>Transparenter Prozess ohne versteckte Kosten</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Content: Image + Contact Card */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-3xl border border-gray-200 shadow-xl relative group overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695feb3b7cc1b98cb86d9d2f.webp"
                  alt="TerraConnect Büro Frankfurt"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                       <Building2 size={20} />
                     </div>
                     <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase text-shadow-sm">Hauptsitz Frankfurt am Main</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 relative overflow-hidden group shadow-lg">
                  <div className="relative z-10">
                       <h4 className="text-brand-green font-bold text-xl mb-6">Lieber persönlich sprechen?</h4>

                       <div className="flex flex-col sm:flex-row gap-6 items-start">
                           <img
                             src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960b5ed0597df5687112287.webp"
                             alt="Michael Wilder"
                             className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
                           />
                           <div>
                              <p className="font-serif italic text-gray-600 mb-4 leading-relaxed text-lg">
                                "Ich kenne die Fragen, die Solar-Verpächter bewegen. Rufen Sie mich gerne direkt auf meinem Handy an – diskret und ohne Zeitdruck."
                              </p>
                              <div>
                                  <div className="font-bold text-brand-green">Michael Wilder</div>
                                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Experte für Pachtablösungen</div>
                                  <a href="tel:+4915207834045" className="flex items-center gap-2 text-2xl font-black text-brand-green hover:text-brand-accent transition-colors">
                                      <Phone size={20} className="fill-current" />
                                      +49 1520 7834045
                                  </a>
                              </div>
                           </div>
                       </div>
                  </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story / Testimonial - Sektion 8 */}
      <section id="erfolge" className="py-20 md:py-32 bg-[#F9F7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-white border border-gray-200 p-8 md:p-20 rounded-lg shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 md:gap-20"
          >
            {/* Editorial Background Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>

            {/* Content Side */}
            <div className="flex-1 relative z-10">
              <div className="mb-8">
                <QuoteIcon size={64} className="text-brand-accent opacity-20 mb-4" />
                <h2 className="font-serif text-3xl md:text-5xl text-brand-green font-bold leading-tight mb-6">
                  Heinrich M.: Wie ich meinen Betrieb für meinen Sohn sicherte
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">
                  Landwirt aus Niedersachsen
                </p>
              </div>

              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-green leading-relaxed mb-10 italic">
                "Dank der Einmalzahlung von <span className="text-[#2E7D32] font-black not-italic">450.000 €</span> konnte ich modernisieren und den Hof zukunftsfähig übergeben."
              </blockquote>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Heinrich M. stand vor einer großen Herausforderung: Die Modernisierung seiner Anlagen war dringend notwendig, um den Betrieb für die nächste Generation wettbewerbsfähig zu halten. Bankkredite waren aufgrund der aktuellen Marktlage schwierig. Die Pacht aus dem Solarpark auf seinen Flächen wäre erst in 15 Jahren vollständig ausgezahlt gewesen – zu spät für die anstehende Hofübergabe.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-brand-green/5 rounded-full border border-brand-green/10">
                   <div className="w-2 h-2 bg-[#2E7D32] rounded-full"></div>
                   <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Projekt abgeschlossen</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-brand-green/5 rounded-full border border-brand-green/10">
                   <div className="w-2 h-2 bg-[#2E7D32] rounded-full"></div>
                   <span className="text-xs font-bold text-brand-green uppercase tracking-widest">90 Tage Abwicklung</span>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="flex-1 w-full lg:max-w-md relative group">
              <div className="aspect-[3/4] bg-gray-100 rounded-sm shadow-xl border-8 border-white overflow-hidden relative group">
                <img 
                   src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695feb3a6eabe6301e2e490b.webp"
                   alt="Landwirtschaftliche Investition"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-xs font-bold uppercase tracking-widest opacity-90 drop-shadow-md">
                    Heinrich M. aus Niedersachsen
                  </p>
                </div>
              </div>
              
              {/* Decorative Newspaper Shadow */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-gray-200/50 rounded-sm"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety & Trust Center - Sektion 9 */}
      <section className="py-24 md:py-32 bg-[#0F3B28] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              Sicherheit & Klarheit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {safetyGuarantees.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`
                  bg-white rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center relative
                  border-t-4 border-brand-accent transition-transform hover:-translate-y-1 duration-300
                `}
              >
                {/* Icon Wrapper */}
                <div className="text-gray-500 mb-6 flex justify-center">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h4 className="font-bold text-gray-800 uppercase tracking-widest text-sm mb-4">
                  {item.title}
                </h4>

                {/* Card Description */}
                <div className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                  {item.description}
                </div>

                {/* GDPR Badge Integration */}
                {item.showBadge && (
                  <div className="mt-auto pt-4 flex items-center justify-center gap-2 px-3 py-1.5 bg-brand-green/5 border border-brand-green/10 rounded-full">
                    <ShieldCheck size={14} className="text-brand-green" />
                    <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.1em]">DSGVO-Konform</span>
                  </div>
                )}
                
                {/* Visual Highlight for Card 3 */}
                {item.highlight && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 size={20} className="text-brand-accent opacity-20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 11: Main Conversion Area (Formular) - MOVED HERE */}
      <section id="conversion-area" className="py-24 bg-[#F5F5F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-black leading-tight mb-4">
              Fordern Sie jetzt Ihre kostenlose Bewertung an
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              In nur 2 Minuten zur ersten Indikation. Unverbindlich & Diskret.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-[650px] mx-auto bg-white rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-stone-200 overflow-hidden"
          >
            <div className="w-full h-2 bg-stone-100">
              <motion.div 
                className="h-full bg-brand-accent"
                initial={{ width: "0%" }}
                animate={{ width: getProgressWidth() }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-8 md:p-14">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="font-serif text-4xl text-brand-green font-bold mb-6">Vielen Dank!</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
                      Ihre Daten wurden erfolgreich übermittelt. Einer unserer Experten wird Ihre Unterlagen prüfen und sich innerhalb von 48 Stunden diskret bei Ihnen melden.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={`step-${formStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8 flex justify-center">
                       <span className="bg-brand-green/5 text-brand-green text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-brand-green/10">
                         Schritt {formStep} von 3
                       </span>
                    </div>

                    <form onSubmit={(e) => {
                        if (formStep === 1) {
                            e.preventDefault(); 
                            setFormStep(2); 
                            window.scrollTo({ top: document.getElementById('conversion-area')?.offsetTop || 0, behavior: 'smooth' });
                        } else if (formStep === 2) {
                            handleStep2Submit(e);
                        } else {
                            handleFinalSubmit(e);
                        }
                    }} className="space-y-8">
                      {formStep === 1 && (
                        <>
                          <div className="space-y-5">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block text-center">Haben Sie einen Solarpark auf Ihrer Fläche?</label>
                            <div className="grid grid-cols-2 gap-6">
                              <button 
                                type="button"
                                onClick={() => updateField('hasSolarPark', 'Ja')}
                                className={`
                                  py-10 rounded-2xl border-2 transition-all flex flex-col items-center gap-3
                                  ${formData.hasSolarPark === 'Ja' 
                                    ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-inner ring-4 ring-brand-green/5' 
                                    : 'border-stone-100 hover:border-stone-300 text-stone-400 bg-stone-50/50'
                                  }
                                `}
                              >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.hasSolarPark === 'Ja' ? 'bg-brand-green text-white' : 'bg-stone-200 text-stone-400'}`}>
                                   <Check size={24} strokeWidth={3} />
                                </div>
                                <span className="text-xl font-black">Ja</span>
                              </button>
                              <button 
                                type="button"
                                onClick={() => updateField('hasSolarPark', 'Nein')}
                                className={`
                                  py-10 rounded-2xl border-2 transition-all flex flex-col items-center gap-3
                                  ${formData.hasSolarPark === 'Nein' 
                                    ? 'border-gray-300 bg-gray-100 text-gray-500 shadow-inner' 
                                    : 'border-stone-100 hover:border-stone-300 text-stone-400 bg-stone-50/50'
                                  }
                                `}
                              >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.hasSolarPark === 'Nein' ? 'bg-gray-400 text-white' : 'bg-stone-200 text-stone-400'}`}>
                                   <X size={24} strokeWidth={3} />
                                </div>
                                <span className="text-xl font-black">Nein</span>
                              </button>
                            </div>
                          </div>

                          {/* Logic for NO */}
                          {formData.hasSolarPark === 'Nein' && (
                             <motion.div 
                               initial={{ opacity: 0, y: -10 }} 
                               animate={{ opacity: 1, y: 0 }} 
                               className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-xl shadow-sm mt-8"
                             >
                               <p className="text-gray-600 font-medium text-center">
                                 Hinweis: Wir kaufen aktuell ausschließlich bereits bestehende Solarparks an.
                               </p>
                             </motion.div>
                          )}

                          {/* Logic for YES (Accordion) */}
                          <AnimatePresence>
                            {formData.hasSolarPark === 'Ja' && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-8 pt-4">
                                  <div className="space-y-3">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Inbetriebnahme (Jahr)</label>
                                    <input 
                                      type="number" 
                                      inputMode="decimal"
                                      required placeholder="z.B. 2018"
                                      value={formData.commYear}
                                      onChange={(e) => updateField('commYear', e.target.value)}
                                      className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium placeholder:text-stone-300"
                                    />
                                  </div>

                                  <div className="space-y-3">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Fläche (Hektar)</label>
                                    <input 
                                      type="number"
                                      inputMode="decimal" 
                                      required placeholder="z.B. 10"
                                      value={formData.sizeHectares}
                                      onChange={(e) => updateField('sizeHectares', e.target.value)}
                                      className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium placeholder:text-stone-300"
                                    />
                                  </div>

                                  <div className="space-y-3">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Pacht pro Hektar (€)</label>
                                    <input 
                                      type="number"
                                      inputMode="decimal"
                                      required placeholder="z.B. 3000"
                                      value={formData.leasePerHectare}
                                      onChange={(e) => updateField('leasePerHectare', e.target.value)}
                                      className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium placeholder:text-stone-300"
                                    />
                                  </div>

                                  <Button 
                                    variant="accent"
                                    type="submit" 
                                    disabled={!validateStep1()}
                                    className={`w-full py-6 text-xl font-black mt-6 shadow-2xl border-none transition-all ${!validateStep1() ? 'opacity-40 cursor-not-allowed grayscale' : ''}`}
                                  >
                                    Weiter zu Schritt 2 <ArrowRight size={24} className="ml-1" />
                                  </Button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}

                      {formStep === 2 && (
                        <>
                          <div className="text-center mb-8">
                             <h3 className="font-serif text-2xl text-brand-green font-bold mb-2">Wohin dürfen wir die Analyse senden?</h3>
                             <p className="text-gray-500 text-sm">Ihre Daten sind bei uns sicher.</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Vorname</label>
                              <input 
                                type="text" required placeholder="Ihr Vorname"
                                value={formData.firstName}
                                onChange={(e) => updateField('firstName', e.target.value)}
                                className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium"
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Nachname</label>
                              <input 
                                type="text" required placeholder="Ihr Nachname"
                                value={formData.lastName}
                                onChange={(e) => updateField('lastName', e.target.value)}
                                className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium"
                              />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">E-Mail Adresse</label>
                            <input 
                              type="email" required placeholder="ihre.mail@beispiel.de"
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium"
                            />
                          </div>

                          <div className="flex items-start gap-4 py-4 px-4 bg-stone-50 rounded-xl border border-stone-100">
                            <input 
                              type="checkbox" id="consent" required
                              checked={formData.consent}
                              onChange={(e) => updateField('consent', e.target.checked)}
                              className="mt-1 w-6 h-6 rounded border-stone-300 text-brand-green focus:ring-brand-green cursor-pointer"
                            />
                            <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer leading-tight font-medium">
                              Ich stimme zu, dass TerraConnect mich per E-Mail und Telefon kontaktieren darf, um meine Bewertung zu besprechen. Widerruf jederzeit möglich.
                            </label>
                          </div>

                          <Button 
                            type="submit" 
                            disabled={!validateStep2()}
                            className="w-full py-6 text-xl font-black mt-6 shadow-2xl bg-brand-green text-white hover:bg-brand-greenLight border-none transition-all"
                          >
                            Weiter <ArrowRight size={24} className="ml-1" />
                          </Button>
                        </>
                      )}

                      {formStep === 3 && (
                        <>
                           <div className="flex flex-col items-center text-center mb-8">
                               <img 
                                 src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960b5ed0597df5687112287.webp" 
                                 alt="Michael Wilder"
                                 className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
                               />
                               <h3 className="font-serif text-xl md:text-2xl text-brand-green font-bold mb-4 leading-tight">
                                 Fast geschafft!
                               </h3>
                               <p className="text-gray-600 text-base md:text-lg max-w-md">
                                 Unser Experte <span className="font-bold text-brand-green">Michael Wilder</span> benötigt nur noch Ihre Rückrufnummer, um offene Fragen zur Bewertung direkt zu klären.
                               </p>
                           </div>

                          <div className="space-y-3">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em] block">Telefonnummer</label>
                            <input 
                              type="tel" 
                              required 
                              inputMode="tel"
                              placeholder="+49 123 456789"
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                              className="w-full px-6 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10 text-lg font-medium"
                            />
                          </div>
                          
                          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                             <Lock size={12} /> Ihre Daten werden sicher verschlüsselt. 100% Kostenlos & Diskret.
                          </div>

                          <Button 
                            type="submit" 
                            disabled={isSubmitting || !validateStep3()}
                            className="w-full py-6 text-xl font-black mt-6 shadow-2xl bg-brand-green text-white hover:bg-brand-greenLight border-none transition-all"
                          >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Kostenlose Bewertung anfordern"}
                          </Button>
                        </>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Häufige Fragen (FAQ) - Sektion 10 - MOVED HERE */}
      <section id="faq" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight">
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="max-w-[800px] mx-auto bg-white">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, idx) => (
                <Accordion key={idx} title={faq.question}>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 12: Conversion Section & Footer */}
      <section className="bg-[#1a3c30] py-24 md:py-32 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 leading-tight">
              Befreien Sie das Potenzial Ihres Vermögens
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
              Ihr Land hat Ihre Familie über Generationen ernährt. Jetzt kann es Ihnen die Freiheit geben, heute zu handeln und Ihre Zukunft aktiv zu gestalten.
            </p>

            <button 
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-4 px-12 py-5 rounded-full border-2 border-brand-accent text-brand-accent font-black hover:bg-brand-accent hover:text-brand-green transition-all duration-300 group shadow-2xl"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Nach oben zum Formular
            </button>
          </motion.div>
        </div>
      </section>

      {/* Rechtlicher Footer */}
      <footer className="bg-[#0a1b15] py-12 border-t border-white/5 text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[11px] font-medium tracking-[0.1em] uppercase order-2 md:order-1">
              © 2026 TerraConnect Capital. Alle Rechte vorbehalten.
            </div>

            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-[11px] font-black tracking-widest uppercase order-1 md:order-2">
              <a href="https://solar.terraconnectcapital.com/impressum-datenschutz" className="hover:text-brand-accent transition-colors">Impressum</a>
              <a href="https://solar.terraconnectcapital.com/impressum-datenschutz" className="hover:text-brand-accent transition-colors">Datenschutz</a>
              {/* Separate slightly to distinguish */}
              <span className="text-gray-700 hidden md:inline">|</span>
              <a href="/kontakt.html" className="hover:text-brand-accent transition-colors opacity-60 hover:opacity-100">Kontakt (Static)</a>
              <a href="/contact-uk.html" className="hover:text-brand-accent transition-colors opacity-60 hover:opacity-100">UK (Static)</a>
            </nav>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 text-[10px] text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            TerraConnect ist ein unabhängiger Finanzpartner. Wir weisen darauf hin, dass die auf dieser Website dargestellten Beispielrechnungen indikativ sind und eine individuelle Prüfung Ihres Pachtvertrages erfordern.
            <br /><br />
            Diese Website ist nicht Teil der Facebook-Website oder von Facebook Inc. Darüber hinaus wird diese Website in keiner Weise von Facebook unterstützt. Facebook ist eine Marke von Facebook, Inc. Wir verwenden auf dieser Website Remarketing-Pixel/Cookies von Google, um erneut mit den Besuchern unserer Website zu kommunizieren und sicherzustellen, dass wir sie in Zukunft mit relevanten Nachrichten und Informationen erreichen können. Google schaltet unsere Anzeigen auf Websites Dritter im Internet, um unsere Botschaft zu kommunizieren und die richtigen Personen zu erreichen, die in der Vergangenheit Interesse an unseren Informationen gezeigt haben.
            
            {/* Debug Links for certainty */}
            <div className="mt-4 flex justify-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                 <a href="/kontakt.html" target="_blank" className="hover:text-brand-accent border-b border-gray-700 pb-0.5">Static: Correction DE</a>
                 <a href="/contact-uk.html" target="_blank" className="hover:text-brand-accent border-b border-gray-700 pb-0.5">Static: Correction UK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
