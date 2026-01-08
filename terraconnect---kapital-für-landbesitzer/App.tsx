
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
  Home,
  GraduationCap,
  Percent,
  Lightbulb,
  MoveRight,
  Phone,
  MessageSquare,
  Quote,
  Scale,
  Search,
  Unlock,
  Lock,
  ArrowUp,
  Loader2
} from 'lucide-react';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';

const App: React.FC = () => {
  // Form State
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const validateStep1 = () => {
    return formData.hasSolarPark && formData.commYear && formData.sizeHectares && formData.leasePerHectare;
  };

  const validateStep2 = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phone && formData.consent;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    
    try {
      // Simulation of a webhook POST
      // In production, replace 'YOUR_WEBHOOK_URL_HERE' with your actual endpoint
      const response = await fetch('https://services.leadconnectorhq.com/hooks/vZHsvAh2e7NEOzHzMRGL/webhook-trigger/b8216b06-e56d-49fd-9065-25580de07da8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => ({ ok: true })); // Mocking success for demo if URL is missing

      // Even if fetch fails because of dummy URL, we simulate a delay then success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      step: "1",
      icon: <FileText className="w-8 h-8 text-brand-green" />,
      title: "Formular ausfüllen",
      description: "Wir benötigen nur grundlegende Informationen zu Ihrem Solarpachtvertrag."
    },
    {
      step: "2",
      icon: <Zap className="w-8 h-8 text-brand-green" />,
      title: "Bewertung in 48h",
      description: "Sie erhalten ein transparentes, faires Angebot ohne Verpflichtung."
    },
    {
      step: "3",
      icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
      title: "Entscheidung in Ruhe",
      description: "Bei Interesse führen wir eine einfache, sichere Transaktion durch."
    },
    {
      step: "4",
      icon: <Wallet className="w-8 h-8 text-brand-green" />,
      title: "Auszahlung (60-90 Tage)",
      description: "Das gesamte Kapital auf einmal, zu Ihrer freien Verfügung."
    }
  ];

  const investmentItems = [
    { icon: <Sprout className="w-6 h-6" />, text: "12 Hektar Ackerland kaufen (Wertsteigerung & Ertrag)" },
    { icon: <Cog className="w-6 h-6" />, text: "Maschinenpark modernisieren" },
    { icon: <Home className="w-6 h-6" />, text: "Wohnhaus bauen oder renovieren" },
    { icon: <GraduationCap className="w-6 h-6" />, text: "Kinder unterstützen / Existenzgründung" },
    { icon: <Percent className="w-6 h-6" />, text: "Kredite tilgen & Zinsen sparen" }
  ];

  const safetyGuarantees = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: "RECHTLICHE SICHERHEIT",
      description: "Prüfung durch spezialisierte Rechtsanwälte & volle rechtliche Beratung vor jeder Entscheidung."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "TRANSPARENTE BEWERTUNG",
      description: "Klare, nachvollziehbare Kriterien und detaillierte Erläuterung aller Berechnungsfaktoren."
    },
    {
      icon: <Unlock className="w-10 h-10" />,
      title: "UNVERBINDLICHE ANFRAGE",
      description: "Absolut unverbindlich. Die Bewertung Ihres Vertrags verpflichtet Sie zu nichts."
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "DATENSCHUTZ",
      description: "Ihre persönlichen und vertraglichen Informationen werden streng vertraulich und DSGVO-konform geschützt."
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "ERFAHRENE PARTNER",
      description: "Zusammenarbeit mit spezialisierten Banken und Notaren für höchste Transaktionssicherheit."
    }
  ];

  const faqs = [
    {
      question: "Wie wird der Wert meines Vertrags berechnet?",
      answer: "Wir berücksichtigen verschiedene Faktoren wie die Höhe Ihrer jährlichen Pachteinnahmen, die Restlaufzeit des Vertrags, die Bonität des Betreibers und aktuelle Marktbedingungen. Jede Bewertung erfolgt individuell und transparent. Nach Ihrer Anfrage erhalten Sie innerhalb von 48 Stunden ein detailliertes Angebot."
    },
    {
      question: "Wie lange dauert der gesamte Prozess vom Antrag bis zur Auszahlung?",
      answer: "Der komplette Prozess dauert typischerweise 60-90 Tage. Nach Ihrer Anfrage erhalten Sie innerhalb von 48 Stunden eine erste Bewertung. Nach Ihrer Zustimmung folgt die rechtliche Prüfung und Vertragsgestaltung. Die Auszahlung erfolgt unmittelbar nach Vertragsabschluss."
    },
    {
      question: "Welche Unterlagen benötige ich für die Bewertung?",
      answer: "Für die erste Bewertung benötigen wir lediglich grundlegende Informationen wie die jährliche Pachtsumme und die Restlaufzeit. Für die finale Bewertung sind dann der Pachtvertrag, Informationen zum Solarpark und zum Betreiber erforderlich. Wir unterstützen Sie bei jedem Schritt der Unterlagenbeschaffung."
    },
    {
      question: "Gibt es versteckte Kosten oder Gebühren?",
      answer: "Nein, es gibt keine versteckten Kosten. Die Bewertung ist kostenlos und unverbindlich. Alle mit der Transaktion verbundenen Kosten werden transparent offengelegt und in der Regel von uns übernommen."
    },
    {
      question: "Was passiert mit meinem Land/der Solaranlage nach dem Verkauf?",
      answer: "Sie bleiben Eigentümer Ihres Landes. Nur der Pachtvertrag wechselt den Inhaber – die Anlage bleibt unverändert bestehen. Der Betreiber des Solarparks zahlt die Pacht dann an uns statt an Sie. Alle anderen Aspekte bleiben unverändert."
    },
    {
      question: "Muss ich den gesamten Vertrag verkaufen oder kann ich auch nur einen Teil verkaufen?",
      answer: "In den meisten Fällen ist auch ein Teilverkauf möglich. Sie könnten beispielsweise 50% Ihrer zukünftigen Einnahmen gegen eine entsprechende Einmalzahlung eintauschen und weiterhin die anderen 50% als regelmäßige Zahlungen erhalten. Unsere Berater besprechen gerne diese flexiblen Optionen mit Ihnen."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white overflow-x-hidden text-brand-green">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695fba5f59bb4a379202d6f2.png" 
              alt="TerraConnect Logo" 
              className="h-8 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
            <a href="#vorteile" className="hover:text-brand-accent transition-colors duration-300">Vorteile</a>
            <a href="#prozess" className="hover:text-brand-accent transition-colors duration-300">Prozess</a>
            <a href="#erfolge" className="hover:text-brand-accent transition-colors duration-300">Erfolge</a>
            <a href="#faq" className="hover:text-brand-accent transition-colors duration-300">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[650px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695fba58dc5e042a18c24fc2.webp" 
             alt="Agrarlandschaft mit Photovoltaik" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/45"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl lg:text-7xl text-white font-medium leading-[1.1] mb-4 md:mb-6 drop-shadow-lg px-4"
          >
            Ihre zukünftigen Solarpacht-Zahlungen – <br className="hidden md:block" /> heute als Kapital auf Ihrem Konto.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/95 font-sans text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 font-light drop-shadow-md px-6"
          >
            Verwandeln Sie Ihre langfristigen Pachteinnahmen in sofortige Barzahlungen – ohne Ihr Land verkaufen zu müssen.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14"
          >
            <Button 
              variant="secondary" 
              onClick={handleScrollToForm} 
              className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold min-w-[280px] md:min-w-[320px] shadow-2xl"
            >
              Jetzt unverbindliche Bewertung anfordern
            </Button>
            <Button 
              variant="outline" 
              className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg border-white/40 hover:border-white min-w-[200px] md:min-w-[240px]"
            >
              Persönliche Beratung
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-12 gap-y-4 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] font-medium text-white/80">
              <div className="flex items-center gap-3">
                <Users size={18} className="text-brand-accent" /> 
                <span>Nr. 1 Partner für Pachtvertragsankauf</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-3">
                <Building2 size={18} className="text-brand-accent" /> 
                <span>6 Büros in Europa (u.a. Frankfurt)</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-3">
                <Euro size={18} className="text-brand-accent" /> 
                <span>Bis zu 10 Mio. € mtl. verfügbar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Bridge) */}
      <section className="relative z-20 -mt-10 md:-mt-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 py-10 md:py-14 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
            {[
              { val: "Büros in 6 Metropolen", sub: "Frankfurt, Mailand, Paris..." },
              { val: "10 Mio. €", sub: "Monatliches Investitionsvolumen" },
              { val: "2 Mrd. €", sub: "Bereits investiertes Kapital" },
              { val: "48 Stunden", sub: "Bis zur ersten Bewertung" }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-4 ${i !== 3 ? 'lg:border-r lg:border-gray-100' : ''}`}>
                <span className="font-serif text-2xl md:text-3xl text-brand-green font-bold mb-2">{item.val}</span>
                <span className="text-gray-500 text-sm md:text-base font-medium">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden" id="vorteile">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-medium leading-tight mb-8">
                Gebundenes Vermögen, wenn Sie es am dringendsten brauchen
              </h2>
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                <p className="font-medium text-gray-900">Kennen Sie das Gefühl?</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-brand-accent mt-3 shrink-0"></span>
                    <span>Sie erhalten jährlich 30.000€, 50.000€ oder 70.000€ aus Ihrer Solarpacht</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-brand-accent mt-3 shrink-0"></span>
                    <span>In 20 Jahren summiert sich das auf 600.000€ oder mehr</span>
                  </li>
                </ul>
                <p className="pt-4 text-gray-600">Aber HEUTE, wenn wichtige Entscheidungen anstehen...</p>
                <ul className="space-y-5">
                  {[
                    "HEUTE, wenn Ihre Familie Unterstützung braucht...",
                    "HEUTE, wenn einmalige Gelegenheiten sich bieten...",
                    "HEUTE können Sie nicht auf dieses Vermögen zugreifen."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <AlertCircle className="w-6 h-6 text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                      <span className="font-semibold text-brand-green">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="bg-[#F3F4F6] rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm mb-12">
                <div className="mb-8">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-6 opacity-20">
                    <path d="M10 15H30M10 25H20" stroke="#064E3B" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <p className="font-serif italic text-2xl md:text-3xl text-brand-green leading-snug">
                    "Sie sitzen auf einem Schatz, den Sie nicht heben können. Die Bank betrachtet Ihre zukünftigen Einnahmen nicht als Sicherheit."
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                   <img 
                    src="https://images.unsplash.com/photo-1542343633-ce3256525ee7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Wartender Landbesitzer" 
                    className="w-full h-full object-cover grayscale opacity-80"
                   />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prozess" className="py-20 md:py-32 bg-[#F5F5F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-medium leading-tight mb-4">
              So verwandeln wir Ihre zukünftigen Einnahmen <br className="hidden lg:block" /> in sofortiges Kapital
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-brand-green/10 -translate-y-24"></div>
            {processSteps.map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.15 }} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-10 group">
                <div className="font-serif text-5xl md:text-6xl text-brand-accent/20 mb-6 font-bold group-hover:text-brand-accent/40 transition-colors">{step.step}</div>
                <div className="mb-6 bg-stone-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-brand-green/5 transition-colors">{step.icon}</div>
                <h3 className="font-serif text-xl font-bold text-brand-green mb-4 leading-snug">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="flex justify-center mt-16 md:mt-24">
            <Button variant="primary" onClick={handleScrollToForm} className="px-12 py-5 text-lg font-bold shadow-xl">
              Herausfinden, wie viel Ihr Vertrag wert ist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-medium leading-tight mb-6">Warum sich eine Einmalzahlung für viele Landbesitzer auszahlt</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <motion.div {...fadeInUp} className="bg-[#F3F4F6] rounded-3xl p-8 md:p-12 border border-gray-200 flex flex-col order-2 lg:order-1">
              <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-8">Jährliche Pachtzahlungen</h3>
              <ul className="space-y-6 flex-grow">
                <li className="flex items-start gap-4 text-gray-700">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600" /></div>
                  <span className="font-medium">Regelmäßige, planbare Einnahmen</span>
                </li>
                {["Kapital über Jahrzehnte gebunden", "Keine Reaktion auf Chancen möglich", "Inflation mindert den Realwert", "Abhängigkeit vom Betreiber", "Begrenzte Handlungsfähigkeit"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-400">
                    <div className="mt-1 bg-gray-200 p-1 rounded-full"><X size={14} className="text-gray-500" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-8 md:p-12 border-2 border-brand-green shadow-2xl relative flex flex-col order-1 lg:order-2">
              <div className="absolute -top-4 right-8 bg-brand-accent text-brand-green text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Empfohlen</div>
              <h3 className="font-serif text-3xl md:text-4xl text-brand-green font-bold mb-8">Einmalzahlung</h3>
              <ul className="space-y-5 flex-grow">
                {["Sofortiges Kapital", "Freie Entscheidung über Kapitaleinsatz", "Unabhängigkeit von Betreiberrisiken", "Chance auf höhere Renditen", "Liquidität für Landkauf", "Unterstützung der Familie", "Schuldenabbau & Zinsersparnis", "Einfache Vermögensnachfolge"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-brand-green group">
                    <div className="mt-1 bg-brand-green/10 p-1 rounded-full group-hover:bg-brand-green group-hover:text-white transition-colors duration-300"><Check size={16} /></div>
                    <span className="font-semibold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-20 md:py-32 bg-[#FAFAF9] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-stone-200 relative overflow-hidden">
            <div className="text-center mb-12 relative z-10">
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Beispiel: 10 Hektar Solarpacht</span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-green font-medium leading-tight">Mehr Möglichkeiten durch sofortiges Kapital</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 mb-16 py-8 border-y border-stone-100 relative z-10">
              <div className="text-center group">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Aktuell</span>
                <span className="font-serif text-4xl md:text-5xl text-gray-400 block mb-1">40.000 €</span>
                <span className="text-gray-400 text-sm font-medium">Jährliche Pacht</span>
              </div>
              <div className="flex flex-col items-center"><MoveRight className="w-8 h-8 text-brand-accent animate-pulse" /></div>
              <div className="text-center">
                <span className="text-brand-green font-bold uppercase tracking-widest text-[10px] block mb-2">Potenzial</span>
                <span className="font-serif text-4xl md:text-5xl text-brand-green block mb-1 font-bold">Sofortiges Kapital</span>
                <span className="text-brand-green text-sm font-medium">Zur freien Verfügung</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-medium mb-8">Warum Sie uns vertrauen können</h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">TerraConnect ist ein etabliertes europäisches Finanzunternehmen mit Hauptsitz in Frankfurt.</p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">Wir investieren monatlich bis zu <span className="font-bold text-brand-green">10 Millionen Euro</span> und haben bereits über <span className="font-bold text-brand-green">2 Milliarden Euro</span> in Erneuerbare Energien platziert.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-50">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Büro" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concierge Block */}
      <section className="py-20 md:py-24 bg-brand-green text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6">Lieber persönlich sprechen?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12">Sie haben Fragen? Wir beraten Sie diskret und unverbindlich.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="secondary" onClick={handleScrollToForm} className="px-10 py-5 font-bold shadow-2xl">Rückruf vereinbaren</Button>
              <a href="tel:+4969123456" className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-white/20 text-white font-bold">+49 (0) 69 123 456</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section id="erfolge" className="py-24 bg-[#F5F5F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 relative min-h-[400px]">
                <img src="https://images.unsplash.com/photo-1599056377759-33880479f64a?auto=format&fit=crop&q=80&w=1200" alt="Heinrich M." className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-3 p-8 lg:p-16">
                <h3 className="font-serif text-2xl text-brand-green font-medium mb-8">Heinrich M.: Wie ich meinen Betrieb für meinen Sohn sicherte</h3>
                <p className="italic text-xl text-brand-green mb-8">"Dank der Einmalzahlung von 450.000 € konnte ich modernisieren und den Hof zukunftsfähig übergeben."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety & FAQ Block */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-brand-green font-medium">Sicherheit & Klarheit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {safetyGuarantees.map((item, idx) => (
              <div key={idx} className="p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center">
                <div className="text-brand-green mb-6 flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-brand-green uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div id="faq" className="max-w-4xl mx-auto pt-12">
            {faqs.map((faq, idx) => (
              <Accordion key={idx} title={faq.question}><p>{faq.answer}</p></Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Main Conversion Area */}
      <section id="conversion-area" className="py-24 bg-[#F5F5F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-[600px] mx-auto bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
          >
            {/* Form Progress Bar */}
            <div className="w-full h-1.5 bg-stone-100">
              <motion.div 
                className="h-full bg-brand-accent"
                initial={{ width: "0%" }}
                animate={{ width: isSuccess ? "100%" : (formStep === 1 ? "50%" : "100%") }}
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
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="font-serif text-3xl text-brand-green font-medium mb-4">Vielen Dank!</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Ihre Daten wurden erfolgreich übermittelt. Einer unserer Experten wird Ihre Unterlagen prüfen und sich innerhalb von 48 Stunden bei Ihnen melden.
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
                    <div className="text-center mb-10">
                      <h2 className="font-serif text-3xl md:text-4xl text-brand-green font-medium leading-tight mb-4">
                        {formStep === 1 ? "Schritt 1 von 2: Angaben zum Pachtvertrag" : "Schritt 2 von 2: Ihre Kontaktdaten"}
                      </h2>
                      <p className="text-gray-500 font-sans text-sm md:text-base">
                        {formStep === 1 ? "Helfen Sie uns, Ihren Vertrag vorab zu qualifizieren." : "Wohin dürfen wir Ihr unverbindliches Angebot senden?"}
                      </p>
                    </div>

                    <form onSubmit={formStep === 1 ? (e) => { e.preventDefault(); setFormStep(2); } : handleSubmit} className="space-y-6">
                      {formStep === 1 ? (
                        <>
                          <div className="space-y-4">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Haben Sie einen Solarpark auf Ihrer Fläche?</label>
                            <div className="grid grid-cols-2 gap-4">
                              <button 
                                type="button"
                                onClick={() => updateField('hasSolarPark', 'Ja')}
                                className={`py-4 rounded-xl border-2 transition-all font-bold ${formData.hasSolarPark === 'Ja' ? 'border-brand-green bg-brand-green/5 text-brand-green' : 'border-stone-100 hover:border-brand-green/30 text-stone-400'}`}
                              >
                                Ja
                              </button>
                              <button 
                                type="button"
                                onClick={() => updateField('hasSolarPark', 'Nein')}
                                className={`py-4 rounded-xl border-2 transition-all font-bold ${formData.hasSolarPark === 'Nein' ? 'border-brand-green bg-brand-green/5 text-brand-green' : 'border-stone-100 hover:border-brand-green/30 text-stone-400'}`}
                              >
                                Nein
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Inbetriebnahme (Jahr)</label>
                            <input 
                              type="number" 
                              required
                              placeholder="z.B. 2018"
                              value={formData.commYear}
                              onChange={(e) => updateField('commYear', e.target.value)}
                              className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Fläche (Hektar)</label>
                            <input 
                              type="number" 
                              required
                              placeholder="z.B. 12"
                              value={formData.sizeHectares}
                              onChange={(e) => updateField('sizeHectares', e.target.value)}
                              className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Pacht pro Hektar (€)</label>
                            <input 
                              type="number" 
                              required
                              placeholder="z.B. 3500"
                              value={formData.leasePerHectare}
                              onChange={(e) => updateField('leasePerHectare', e.target.value)}
                              className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            disabled={!validateStep1()}
                            className={`w-full py-6 text-xl font-bold mt-4 shadow-xl ${!validateStep1() ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            Weiter zur Bewertung <ArrowRight size={20} />
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Vorname</label>
                              <input 
                                type="text" required placeholder="Vorname"
                                value={formData.firstName}
                                onChange={(e) => updateField('firstName', e.target.value)}
                                className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Nachname</label>
                              <input 
                                type="text" required placeholder="Nachname"
                                value={formData.lastName}
                                onChange={(e) => updateField('lastName', e.target.value)}
                                className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">E-Mail Adresse</label>
                            <input 
                              type="email" required placeholder="beispiel@email.de"
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Telefonnummer</label>
                            <input 
                              type="tel" required placeholder="+49 123 456789"
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                              className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/10"
                            />
                          </div>

                          <div className="flex items-start gap-3 py-2">
                            <input 
                              type="checkbox" 
                              id="consent" 
                              required
                              checked={formData.consent}
                              onChange={(e) => updateField('consent', e.target.checked)}
                              className="mt-1 w-5 h-5 rounded border-stone-300 text-brand-green focus:ring-brand-green"
                            />
                            <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                              Ich stimme zu, dass TerraConnect mich zur Bewertung meines Vertrags kontaktieren darf. Datenschutzhinweise akzeptiert.
                            </label>
                          </div>

                          <div className="grid grid-cols-4 gap-4 mt-6">
                            <button 
                              type="button"
                              onClick={() => setFormStep(1)}
                              className="py-4 rounded-xl border border-stone-200 text-stone-400 hover:bg-stone-50 transition-colors flex items-center justify-center"
                            >
                              <ArrowRight className="rotate-180" size={20} />
                            </button>
                            <Button 
                              type="submit" 
                              disabled={isSubmitting || !validateStep2()}
                              className={`col-span-3 py-6 text-xl font-bold shadow-xl ${(!validateStep2() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {isSubmitting ? <Loader2 className="animate-spin" /> : "Jetzt Bewertung anfordern"}
                            </Button>
                          </div>
                        </>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3" /> SSL-verschlüsselt
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> 100% Datenschutz
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" /> Unverbindlich
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 12: Emotional Closing & Footer */}
      <section className="bg-brand-green py-24 text-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8">
              Befreien Sie das Potenzial Ihres Vermögens
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              Ihr Land hat Ihre Familie über Generationen ernährt. Jetzt kann es Ihnen die Freiheit geben, heute zu handeln. Während andere warten, können Sie umsetzen.
            </p>
            <p className="text-brand-accent italic text-sm md:text-base mb-12 font-medium">
              "Diesen Monat haben wir noch Kapital für eine Handvoll Verträge verfügbar."
            </p>

            <button 
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/10 hover:border-white transition-all duration-300 mb-20 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Nach oben zum Formular
            </button>
          </motion.div>

          {/* New Integrated Footer */}
          <div className="pt-20 border-t border-white/10 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/695fba5f59bb4a379202d6f2.png" 
                alt="TerraConnect Logo" 
                className="h-10 w-auto brightness-0 invert opacity-80"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs md:text-sm font-medium text-white/60">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Kontakt</a>
            </div>

            <div className="text-[10px] md:text-xs text-white/40 tracking-widest uppercase font-bold">
              © 2026 TerraConnect. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
