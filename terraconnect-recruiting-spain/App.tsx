import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Banknote, 
  Phone, 
  Building2, 
  ArrowRight,
  Menu,
  X as XIcon,
  Calculator,
  FileText,
  Briefcase,
  Lock
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { getTrackingParams } from './hooks/useTracking';

// --- Modal Component ---
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [iframeSrc, setIframeSrc] = useState("https://api.leadconnectorhq.com/widget/survey/hngeGzyd45tdxnGAeEWf");

  // Prevent scrolling on body when modal is open and handle GHL Script + Tracking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // 1. Calculate Tracking Params
      const params = getTrackingParams();
      
      // 2. Build Query String (remove empty values to keep URL clean, though GHL handles empty fine)
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      // 3. Update Iframe Source with params
      const baseUrl = "https://api.leadconnectorhq.com/widget/survey/hngeGzyd45tdxnGAeEWf";
      setIframeSrc(`${baseUrl}?${queryParams.toString()}`);
      
      // 4. Dynamically load the GHL script when modal opens to ensure resizing works
      const script = document.createElement('script');
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button - Cleanly placed top right */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-white/90 rounded-full text-gray-500 hover:text-gray-900 shadow-md transition-all hover:scale-110 border border-gray-100"
          aria-label="Cerrar"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-white p-6 md:p-8 pb-4 text-center border-b border-gray-50 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2 pr-8 md:pr-0">
            Comprueba tu Elegibilidad en 30 Segundos
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base font-medium">
            Sin coste ni compromiso.
          </p>
        </div>

        {/* Content Container - Scrollable */}
        <div className="flex-1 w-full overflow-y-auto bg-white p-0 relative">
          <iframe 
            src={iframeSrc}
            style={{ border: 'none', width: '100%', minHeight: '400px' }} 
            scrolling="no" 
            id="hngeGzyd45tdxnGAeEWf" 
            title="survey"
          ></iframe>
        </div>

        {/* Trust Footer */}
        <div className="bg-[#f9f9f9] p-6 border-t border-gray-100 flex-shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-8 h-8 text-brand-green" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-brand-green text-sm">Protección Total</p>
                <p className="text-xs text-gray-500">Tus clientes están protegidos (NCND).</p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center text-center gap-2">
              <Zap className="w-8 h-8 text-brand-green" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-brand-green text-sm">Proceso Rápido</p>
                <p className="text-xs text-gray-500">Respuesta inmediata.</p>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-center text-center gap-2">
              <Building2 className="w-8 h-8 text-brand-green" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-brand-green text-sm">Capital Seguro</p>
                <p className="text-xs text-gray-500">Fondos institucionales.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 text-gray-400 opacity-80">
            <Lock className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Encriptación SSL Segura</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Header Component ---
const Header = ({ onNavigateHome, isLegalPage = false, onOpenModal }: { onNavigateHome: () => void, isLegalPage?: boolean, onOpenModal: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Conditional background: Transparent for Home (Hero image), Brand Green for Legal Page (White background)
    <header className={`absolute top-0 w-full z-50 py-6 md:py-8 text-white transition-colors duration-300 ${isLegalPage ? 'bg-brand-green shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px] flex justify-between items-center">
        <button onClick={onNavigateHome} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          {/* Logo - Large and visible */}
          <img 
            src="https://storage.googleapis.com/msgsndr/dzmqyFB6mNSTRc7uFH1D/media/696f8db84a646423e9c0a92c.webp" 
            alt="TerraConnect Logo" 
            className="h-12 md:h-20 w-auto"
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-white/90">
          <button onClick={onNavigateHome} className="hover:text-brand-gold transition-colors drop-shadow-md">Inicio</button>
          <a href="#opportunity" onClick={onNavigateHome} className="hover:text-brand-gold transition-colors drop-shadow-md">La Oportunidad</a>
          <a href="#process" onClick={onNavigateHome} className="hover:text-brand-gold transition-colors drop-shadow-md">Proceso</a>
          <a href="#comparison" onClick={onNavigateHome} className="hover:text-brand-gold transition-colors drop-shadow-md">Comparativa</a>
          <a href="#faq" onClick={onNavigateHome} className="hover:text-brand-gold transition-colors drop-shadow-md">FAQ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-green border-t border-brand-lightGreen absolute top-full left-0 w-full p-6 flex flex-col gap-6 shadow-xl z-50">
          <button className="text-xl text-gray-200 text-left" onClick={() => { onNavigateHome(); setIsMenuOpen(false); }}>Inicio</button>
          <a href="#opportunity" className="text-xl text-gray-200" onClick={() => setIsMenuOpen(false)}>La Oportunidad</a>
          <a href="#process" className="text-xl text-gray-200" onClick={() => setIsMenuOpen(false)}>Proceso</a>
          <a href="#comparison" className="text-xl text-gray-200" onClick={() => setIsMenuOpen(false)}>Comparativa</a>
          <Button variant="primary" className="w-full text-lg py-4" onClick={() => { setIsMenuOpen(false); onOpenModal(); }}>Solicitar Plaza</Button>
        </div>
      )}
    </header>
  );
};

// --- Hero Section ---
const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/msgsndr/dzmqyFB6mNSTRc7uFH1D/media/696f8d782da948cf65b29c97.webp" 
          alt="Solar Park" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/60"></div>
      </div>

      {/* Main Content */}
      {/* Adjusted padding: pt-28 (less top padding) to visually lift content so footer is visible */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px] relative z-10 pt-28 pb-32 flex flex-col items-center text-center">
        {/* max-w-6xl allows wide text, but we control font size to prevent it looking squeezed */}
        <div className="w-full max-w-6xl text-white">
          <span className="inline-block py-2 px-4 border border-brand-gold text-brand-gold rounded text-xs font-bold tracking-widest mb-6 uppercase">
            Para Originadores Solares y Buscadores de Terrenos
          </span>
          
          {/* Headline: Balanced size. 4xl mobile, 5xl tablet, 6xl desktop. Not 8xl. */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Convierte tu "Agenda de Contactos" en comisiones de <span className="text-brand-gold italic">5 y 6 cifras</span> en las próximas 8 semanas.
          </h1>
          
          {/* Subhead: text-lg to xl. Readable but compact. */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed font-light max-w-4xl mx-auto">
            Deja de perseguir nuevos proyectos bloqueados por la Red. Compramos las Rentas Solares de tus clientes antiguos. Ellos reciben liquidez inmediata – Tú recibes tus honorarios al instante. Sin esperar a licencias.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button variant="primary" className="text-lg w-full sm:w-auto px-10 py-4 shadow-2xl" onClick={onOpenModal}>
              Verificar Elegibilidad de mi Cartera
              <ArrowRight className="w-5 h-5" />
            </Button>
            <div className="text-gray-200 text-sm italic tracking-wide">
               Comprueba en 2 minutos si tus contactos cualifican.
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar Floating - Positioned absolutely at bottom */}
      <div className="absolute bottom-0 w-full transform translate-y-1/2 hidden md:block z-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
          <div className="bg-brand-green border border-brand-lightGreen shadow-2xl rounded-xl p-8 grid grid-cols-3 gap-10 text-white">
            <div className="flex items-center gap-6 border-r border-brand-lightGreen pr-6 justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                <Banknote className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-brand-gold mb-1">Capitalización</h4>
                <p className="text-base text-gray-300">Transformamos alquileres mensuales en pago único</p>
              </div>
            </div>
            <div className="flex items-center gap-6 border-r border-brand-lightGreen pr-6 justify-center">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-brand-gold mb-1">Cero Riesgo</h4>
                <p className="text-base text-gray-300">Solo operamos con parques ya conectados</p>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-brand-gold mb-1">Pago Rápido</h4>
                <p className="text-base text-gray-300">Cierre ante Notario en 8-12 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mobile Trust Bar (Visible only on mobile) ---
const MobileTrustBar = () => {
  return (
    <div className="md:hidden bg-brand-green text-white py-12 px-6">
      <div className="space-y-8">
        <div className="flex items-center gap-5">
           <Banknote className="w-8 h-8 text-brand-gold" />
           <div>
             <h4 className="font-bold text-lg text-brand-gold">Capitalización de Rentas</h4>
             <p className="text-base text-gray-300">Pago único inmediato</p>
           </div>
        </div>
        <div className="flex items-center gap-5">
           <ShieldCheck className="w-8 h-8 text-brand-gold" />
           <div>
             <h4 className="font-bold text-lg text-brand-gold">Cero Riesgo Técnico</h4>
             <p className="text-base text-gray-300">Parques ya conectados</p>
           </div>
        </div>
        <div className="flex items-center gap-5">
           <Zap className="w-8 h-8 text-brand-gold" />
           <div>
             <h4 className="font-bold text-lg text-brand-gold">Pago Rápido</h4>
             <p className="text-base text-gray-300">Notaría en 8-12 semanas</p>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- Opportunity Section ---
const Opportunity = () => {
  return (
    <Section id="opportunity" className="mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-3 block">El Problema vs. La Solución</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green">
            Tu oportunidad oculta: La "Compra de Rentas"
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-red-50 p-10 rounded-xl border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 text-2xl mb-6">Tu realidad actual: La "Trampa del Nudo de Acceso"</h3>
            <p className="text-gray-700 leading-loose text-lg">
              Tienes terrenos firmados, pero Red Eléctrica no da capacidad hasta 2029. Trabajas gratis durante meses esperando una DÍA que quizás nunca llegue. <span className="font-bold">Tu flujo de caja es cero.</span>
            </p>
          </div>

          <div className="bg-green-50 p-10 rounded-xl border-l-4 border-brand-green">
            <h3 className="font-bold text-brand-green text-2xl mb-6">Tu oportunidad oculta: La "Mina de Oro"</h3>
            <p className="text-gray-700 leading-loose text-lg mb-6">
              Revisa tu teléfono. Los propietarios a los que conectaste hace 5 o 10 años ya están cobrando. TerraConnect compra esos derechos de cobro futuros por un pago único hoy.
            </p>
            <p className="text-brand-green font-bold text-lg">
              No necesitas buscar nuevos terrenos. Tú facilitas el acuerdo. Nosotros ponemos el dinero. Tú cobras.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Process Section ---
const Process = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-brand-green" />,
      number: "01",
      title: "Portfolio Check",
      desc: "Revisamos tu lista de parques conectados y arrendamientos vigentes."
    },
    {
      icon: <Calculator className="w-10 h-10 text-brand-green" />,
      number: "02",
      title: "Oferta Firme",
      desc: "Emitimos una valoración en 48h. Sin compromiso para tu cliente."
    },
    {
      icon: <Building2 className="w-10 h-10 text-brand-green" />,
      number: "03",
      title: "Firma en Notaría",
      desc: "Nuestro equipo legal gestiona toda la burocracia. Cierre en 8-12 semanas."
    },
    {
      icon: <Banknote className="w-10 h-10 text-brand-green" />,
      number: "04",
      title: "Comisión Inmediata",
      desc: "Tu cliente recibe su capital y tú cobras tus honorarios en el acto."
    }
  ];

  return (
    <Section id="process" background="gray">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">
          Cómo convertimos tus contactos antiguos en capital
        </h2>
        <p className="text-gray-600 text-xl">Un proceso estructurado, transparente y rápido.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-7xl font-bold text-brand-green group-hover:scale-110 transition-transform">
              {step.number}
            </div>
            <div className="mb-8 bg-brand-beige w-20 h-20 rounded-full flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-green mb-4">{step.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <Button variant="primary" className="text-lg py-4 px-8" onClick={onOpenModal}>
          Hacer una valoración rápida
        </Button>
      </div>
    </Section>
  );
};

// --- Comparison Table ---
const ComparisonTable = () => {
  return (
    <Section id="comparison">
      <div className="text-center mb-16">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Comparativa Financiera</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mt-4">
          ¿Por qué cambiar tu modelo de negocio?
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl max-w-5xl mx-auto">
        <table className="w-full border-collapse bg-white text-left text-base md:text-lg text-gray-700">
          <thead className="bg-brand-green text-white">
            <tr>
              <th scope="col" className="px-8 py-8 font-medium text-xl w-1/3">Criterio</th>
              <th scope="col" className="px-8 py-8 font-bold text-2xl w-1/3 bg-brand-lightGreen/50">Desarrollo Greenfield</th>
              <th scope="col" className="px-8 py-8 font-bold text-2xl w-1/3 text-brand-gold">Compra de Rentas (TerraConnect)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <th className="px-8 py-8 font-medium text-gray-900">Tu Actividad</th>
              <td className="px-8 py-8 text-gray-600">Pelear por terrenos y esperar licencias</td>
              <td className="px-8 py-8 font-medium text-brand-green bg-green-50/50">Monetizar relaciones que ya tienes</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th className="px-8 py-8 font-medium text-gray-900">El Obstáculo Principal</th>
              <td className="px-8 py-8 text-red-600 font-medium">Red Eléctrica (REE) bloqueada hasta 2029</td>
              <td className="px-8 py-8 font-medium text-brand-green bg-green-50/50 flex items-center gap-3">
                <Check className="w-6 h-6" /> Ninguno. El parque ya está conectado
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th className="px-8 py-8 font-medium text-gray-900">Tiempo de Cobro</th>
              <td className="px-8 py-8 text-gray-600">Incierto, en 3 a 5 años</td>
              <td className="px-8 py-8 font-medium text-brand-green bg-green-50/50">Seguro, en 8 a 12 semanas</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th className="px-8 py-8 font-medium text-gray-900">Riesgo</th>
              <td className="px-8 py-8 text-red-600 font-medium">Alto (El proyecto puede morir)</td>
              <td className="px-8 py-8 font-medium text-brand-green bg-green-50/50">Cero (El activo ya existe)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

// --- Numbers Example ---
const NumbersSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <Section background="green" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Banknote size={500} />
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Ejemplo Real: <br/>¿Cuánto gana tu cliente (y tú)?
          </h2>
          <p className="text-gray-200 text-xl mb-10 leading-relaxed">
            Caso: Parque Solar en Extremadura (Operativo).<br/>
            Propietario de la tierra recibiendo actualmente €50.000/año.
          </p>
          
          <div className="space-y-6">
             <h3 className="text-brand-gold font-bold uppercase text-base tracking-widest">¿Por qué aceptan?</h3>
             <ul className="space-y-4">
               <li className="flex items-start gap-4">
                 <div className="mt-1 bg-white/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-brand-gold" /></div>
                 <span className="text-gray-100 text-lg"><strong className="text-white">Liquidez:</strong> Para modernizar la finca (Riego/Olivos).</span>
               </li>
               <li className="flex items-start gap-4">
                 <div className="mt-1 bg-white/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-brand-gold" /></div>
                 <span className="text-gray-100 text-lg"><strong className="text-white">Herencia:</strong> Repartir €600k entre hijos es más fácil que tierras.</span>
               </li>
               <li className="flex items-start gap-4">
                 <div className="mt-1 bg-white/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-brand-gold" /></div>
                 <span className="text-gray-100 text-lg"><strong className="text-white">Seguridad:</strong> Protección ante cambios regulatorios.</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white text-brand-green rounded-2xl p-10 shadow-2xl">
             <div className="text-center border-b border-gray-200 pb-8 mb-8">
               <p className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-3">Oferta TerraConnect</p>
               <div className="text-6xl md:text-7xl font-bold font-serif text-brand-green mb-3">
                 €600.000
               </div>
               <p className="text-green-700 font-bold bg-green-100 inline-block px-4 py-2 rounded-full text-base">Pago Único Inmediato</p>
             </div>
             
             <div className="bg-brand-beige/50 rounded-xl p-8 text-center">
               <p className="text-brand-green font-bold text-xl mb-2">Tu Beneficio</p>
               <p className="text-gray-600 text-lg mb-6">Comisión pagada el día de la firma</p>
               <Button fullWidth className="text-lg py-4" onClick={onOpenModal}>
                 Calcular mi comisión
               </Button>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Why Partner / About ---
const About = () => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 relative">
          <img 
            src="https://storage.googleapis.com/msgsndr/dzmqyFB6mNSTRc7uFH1D/media/696f8d79a5a12e3dc07889e9.webp" 
            alt="Business Meeting" 
            className="rounded-xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-8 -right-8 bg-brand-green p-8 rounded-xl text-white max-w-sm shadow-xl hidden xl:block">
            <p className="font-serif italic text-xl leading-relaxed">"Operamos con Fondos de Pensiones Europeos. Cuando emitimos una oferta, el dinero está listo."</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-10">
            ¿Por qué TerraConnect?
          </h2>

          <div className="space-y-10">
            <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-green flex-shrink-0">
                 <span className="font-bold text-xl">1</span>
               </div>
               <div>
                 <h3 className="font-bold text-2xl text-brand-green mb-3">Modelo de EE.UU. ("Rent Buying")</h3>
                 <p className="text-gray-600 leading-loose text-lg">No es un préstamo. No es especulación. Es la compra directa de un activo financiero (el contrato de alquiler) ante Notario.</p>
               </div>
            </div>

            <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-green flex-shrink-0">
                 <span className="font-bold text-xl">2</span>
               </div>
               <div>
                 <h3 className="font-bold text-2xl text-brand-green mb-3">El Argumento "Anti-Recortes"</h3>
                 <p className="text-gray-600 leading-loose text-lg">España tiene historial de cambios regulatorios. Tu cliente prefiere "Pájaro en mano". Al vender la renta, eliminan su riesgo político.</p>
               </div>
            </div>

            <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-green flex-shrink-0">
                 <span className="font-bold text-xl">3</span>
               </div>
               <div>
                 <h3 className="font-bold text-2xl text-brand-green mb-3">Equipo 100% Local</h3>
                 <p className="text-gray-600 leading-loose text-lg">Gestionamos todo desde Madrid. Entendemos la diferencia entre Arrendamiento y Derecho de Superficie. Tu reputación está segura.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Testimonial ---
const Testimonial = () => {
  return (
    <Section background="gray">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
            alt="Originator Portrait" 
            className="w-full h-full object-cover rounded-full border-8 border-brand-beige shadow-lg"
          />
        </div>
        <div>
          <Briefcase className="w-10 h-10 text-brand-gold mb-6" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-6 leading-normal">
            "Tenía 3 proyectos parados por la red. Llamé a 2 clientes antiguos de 2018 y cerré operaciones por valor de €1.2M en capital para ellos."
          </h3>
          <p className="text-gray-600 italic text-xl mb-6 leading-relaxed">
            "La comisión que generé en 2 meses superó lo que esperaba ganar en todo el año con desarrollo greenfield."
          </p>
          <div className="mt-6">
            <p className="font-bold text-brand-green text-lg">Carlos M.</p>
            <p className="text-base text-gray-500 uppercase tracking-widest">Originador Solar, Andalucía</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- FAQ ---
const FAQ = () => {
  const faqs = [
    {
      q: "¿Es legal este modelo en España?",
      a: "Sí. Es una 'Cesión de Derechos de Cobro' o 'Venta de Derecho de Superficie'. Se firma en Escritura Pública ante Notario. Es 100% seguro y estándar en el derecho mercantil español."
    },
    {
      q: "¿Vais a robarme a mis clientes?",
      a: "No. Firmamos un contrato de protección (NCND) antes de empezar. Tú eres el dueño de la relación. Nosotros somos solo el socio financiero."
    },
    {
      q: "¿Qué pasa si cambia la regulación solar?",
      a: "Ese es el mejor argumento para vender. Si el propietario vende hoy, el riesgo pasa a nosotros. Él se queda con el dinero seguro."
    },
    {
      q: "¿Cuánto trabajo tengo que hacer?",
      a: "Mínimo. Tú nos presentas al cliente y la documentación básica. Nuestro equipo legal y fiscal hace toda la Due Diligence y prepara la firma en Notaría."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Preguntas Frecuentes</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button 
              className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold text-brand-green text-xl pr-8">{item.q}</span>
              {openIndex === idx ? <ChevronUp className="text-brand-gold w-6 h-6" /> : <ChevronDown className="text-gray-400 w-6 h-6" />}
            </button>
            {openIndex === idx && (
              <div className="p-8 bg-brand-beige/30 text-gray-700 leading-loose text-lg border-t border-gray-100">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Qualification & CTA ---
const FinalCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <Section background="green" className="text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">
          ¿Es esto para ti?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16 text-left">
          <div className="bg-white/10 p-10 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-brand-gold mb-8 flex items-center gap-3">
              <span className="bg-brand-gold text-brand-green rounded-full p-1.5"><Check size={20} strokeWidth={4} /></span>
              SÍ, si...
            </h3>
            <ul className="space-y-6 text-gray-100 text-lg">
              <li className="flex gap-4"><Check className="text-brand-gold flex-shrink-0 w-6 h-6" /> Tienes contacto directo con propietarios de parques solares ya conectados.</li>
              <li className="flex gap-4"><Check className="text-brand-gold flex-shrink-0 w-6 h-6" /> Quieres monetizar tu agenda sin esperar años.</li>
              <li className="flex gap-4"><Check className="text-brand-gold flex-shrink-0 w-6 h-6" /> Buscas un socio serio con capital institucional.</li>
            </ul>
          </div>

          <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              <span className="bg-gray-600 text-white rounded-full p-1.5"><XIcon size={20} strokeWidth={4} /></span>
              NO, si...
            </h3>
            <ul className="space-y-6 text-gray-400 text-lg">
              <li className="flex gap-4"><XIcon className="text-gray-500 flex-shrink-0 w-6 h-6" /> Solo tienes proyectos "Greenfield" (en papel).</li>
              <li className="flex gap-4"><XIcon className="text-gray-500 flex-shrink-0 w-6 h-6" /> No tienes acceso directo a la propiedad.</li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-gold/10 inline-block p-10 rounded-2xl border border-brand-gold/30">
          <p className="text-brand-gold mb-8 font-bold uppercase tracking-widest text-base">
            Seleccionamos únicamente 20 Socios Estratégicos en toda España
          </p>
          <Button variant="primary" className="mx-auto text-xl py-5 px-10 mb-6" onClick={onOpenModal}>
            Solicitar Plaza de Socio
          </Button>
          <p className="text-gray-400 text-base">Máximo 2 socios por zona para garantizar exclusividad.</p>
        </div>
      </div>
    </Section>
  );
};

// --- Footer ---
const Footer = ({ onLegalClick, onNavigateHome }: { onLegalClick: () => void, onNavigateHome: () => void }) => {
  return (
    <footer className="bg-brand-green text-white py-16 border-t border-brand-lightGreen">
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button onClick={onNavigateHome} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            {/* Logo */}
            <img 
              src="https://storage.googleapis.com/msgsndr/dzmqyFB6mNSTRc7uFH1D/media/696f8db84a646423e9c0a92c.webp" 
              alt="TerraConnect Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </button>
          <div className="text-center md:text-right text-gray-400 text-base leading-relaxed">
            <p className="mb-3">Madrid · Frankfurt · Milán · París · Amsterdam · Athens</p>
            <p>&copy; 2026 TerraConnect Capital. Inversión en Rentas Solares.</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:justify-end gap-8 text-base text-gray-500">
          <button onClick={onLegalClick} className="hover:text-white transition-colors">Aviso Legal</button>
          <button onClick={onLegalClick} className="hover:text-white transition-colors">Política de Privacidad</button>
        </div>
      </div>
    </footer>
  );
};

// --- Landing Page Container ---
const LandingPage = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <>
    <Hero onOpenModal={onOpenModal} />
    <MobileTrustBar />
    <Opportunity />
    <Process onOpenModal={onOpenModal} />
    <ComparisonTable />
    <NumbersSection onOpenModal={onOpenModal} />
    <About />
    <Testimonial />
    <FAQ />
    <FinalCTA onOpenModal={onOpenModal} />
  </>
);

// --- Legal Page ---
const LegalPage = () => {
  return (
    <div className="pt-32 pb-20">
      <Section>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-green mb-6">Aviso Legal y Política de Privacidad</h1>
            <p className="text-lg text-gray-500">Última actualización: Enero 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-2xl font-bold text-brand-green mb-4">1. Identidad del Titular</h3>
            <p className="mb-6">
              TerraConnect Capital ("TerraConnect") opera como intermediario financiero especializado en activos de energía renovable. 
              Esta web es un canal informativo y de captación de socios estratégicos.
            </p>

            <h3 className="text-2xl font-bold text-brand-green mb-4">2. Protección de Datos (GDPR)</h3>
            <p className="mb-6">
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD), le informamos que los datos personales que nos facilite a través de los formularios 
              serán tratados con la finalidad de gestionar su solicitud de colaboración o información. 
              No compartimos sus datos con terceros sin su consentimiento explícito, salvo obligación legal.
            </p>

            <h3 className="text-2xl font-bold text-brand-green mb-4">3. Propiedad Intelectual</h3>
            <p className="mb-6">
              Todos los contenidos de este sitio web (textos, logotipos, imágenes) son propiedad de TerraConnect o de terceros que han autorizado su uso. 
              Queda prohibida su reproducción sin autorización previa.
            </p>

            <h3 className="text-2xl font-bold text-brand-green mb-4">4. Limitación de Responsabilidad</h3>
            <p>
              La información contenida en esta web tiene carácter meramente informativo y no constituye asesoramiento financiero vinculante hasta la formalización de contratos específicos.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

function App() {
  // State to manage current view: 'home' or 'legal'
  const [view, setView] = useState<'home' | 'legal'>('home');
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setView('home');
    scrollToTop();
  };

  const handleNavigateLegal = () => {
    setView('legal');
    scrollToTop();
  };
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigateHome={handleNavigateHome} 
        isLegalPage={view === 'legal'} 
        onOpenModal={handleOpenModal} 
      />
      {view === 'home' ? <LandingPage onOpenModal={handleOpenModal} /> : <LegalPage />}
      <Footer onLegalClick={handleNavigateLegal} onNavigateHome={handleNavigateHome} />
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;