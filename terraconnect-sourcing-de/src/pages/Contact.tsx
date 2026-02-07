
import React, { useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, Mail, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  variant: 'DE' | 'UK';
}

const Contact: React.FC<ContactProps> = ({ variant }) => {
  
  useEffect(() => {
    // Dynamically load the GHL resizing script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const content = {
    DE: {
      headline: "Wir konnten Ihre SMS/WhatsApp nicht zustellen.",
      subheadline: "Bitte korrigieren Sie unten Ihre Angaben, damit wir Ihnen die kostenlose Solarpacht-Bewertung zukommen lassen können.",
      formSrc: "https://api.leadconnectorhq.com/widget/form/RMZ4vRoLZqeVMG7fGpQV",
      formId: "RMZ4vRoLZqeVMG7fGpQV",
      phone: "+49 1520 7834045",
      footerText: "TerraConnect ist ein unabhängiger Finanzpartner."
    },
    UK: {
      headline: "We could not deliver your SMS/WhatsApp.",
      subheadline: "Please correct your details below so we can send you your free solar lease valuation.",
      formSrc: "https://api.leadconnectorhq.com/widget/form/en6dPltEBezmYJnmqaOx",
      formId: "en6dPltEBezmYJnmqaOx",
      phone: "+49 1520 7834045",
      footerText: "TerraConnect is an independent financial partner."
    }
  };

  const data = content[variant];

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans selection:bg-brand-green selection:text-white overflow-x-hidden flex flex-col">
      {/* Header (Simplified for Contact Page) */}
      <header className="w-full bg-white border-b border-gray-100 py-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between">
          <div className="flex-shrink-0">
             <a href="/">
                <img 
                  src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960a9959c38cbbeb4b72ae3.webp" 
                  alt="TerraConnect Logo" 
                  className="h-10 md:h-16 w-auto object-contain brightness-0 invert-[.25] sepia-[.6] saturate-[3] hue-rotate-[100deg]"
                  // Note: Filter approximates the dark green color for the white background header
                  style={{ filter: 'none' }} 
                />
                {/* Fallback to dark logo if the filter trick is too complex, but using the white logo on white bg needs a background or a different asset. 
                    Assuming the logo provided in App.tsx was white for the Hero. 
                    Let's use a colored wrapper or filter. 
                */}
                <img 
                  src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960a9959c38cbbeb4b72ae3.webp" 
                  alt="TerraConnect Logo" 
                  className="h-10 md:h-16 w-auto object-contain absolute top-4 left-6 mix-blend-difference opacity-0 pointer-events-none" 
                />
                {/* Using a filter to make the white logo visible on white (making it dark green) */}
                 <div className="bg-[#1a3c30] p-2 rounded-lg">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/vZHsvAh2e7NEOzHzMRGL/media/6960a9959c38cbbeb4b72ae3.webp" 
                      alt="TerraConnect Logo" 
                      className="h-8 md:h-12 w-auto object-contain brightness-0 invert"
                    />
                 </div>
             </a>
          </div>
          
          <div className="flex items-center gap-4 md:gap-10">
            <a 
              href={`tel:${data.phone.replace(/\s/g, '')}`} 
              className="flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-full hover:bg-brand-greenLight transition-all shadow-md"
            >
              <Phone size={16} className="text-brand-accent fill-brand-accent" />
              <span className="font-bold text-sm md:text-base hidden sm:inline">{data.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          {/* Top Alert Bar */}
          <div className="bg-red-50 border-b border-red-100 p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 text-red-600">
               <AlertCircle size={24} />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-red-700 mb-3 leading-tight">
              {data.headline}
            </h1>
            <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
              {data.subheadline}
            </p>
          </div>

          {/* Form Container */}
          <div className="p-4 md:p-8 bg-white min-h-[400px]">
             <iframe 
               src={data.formSrc} 
               style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
               scrolling="no" 
               id={`inline-${data.formId}`}
               title="Contact Correction Form"
             ></iframe>
          </div>

          {/* Trust Footer inside Card */}
          <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wider">
             <ShieldCheck size={14} className="text-brand-green" /> 100% Secure & Encrypted
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1b15] py-12 border-t border-white/5 text-gray-400 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="text-[11px] font-medium tracking-[0.1em] uppercase">
              © 2026 TerraConnect Capital.
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-black tracking-widest uppercase">
              <a href="/" className="hover:text-brand-accent transition-colors">Home</a>
              <a href="https://solar.terraconnectcapital.com/impressum-datenschutz" className="hover:text-brand-accent transition-colors">Impressum & Datenschutz</a>
            </nav>
            
            <div className="text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.footerText}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
