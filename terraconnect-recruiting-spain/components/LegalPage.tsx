import React from 'react';
import { Section } from './Section';

export const LegalPage = () => {
  return (
    <div className="pt-32 pb-20">
      <Section>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Aviso Legal y Política de Privacidad</h1>
            <p className="text-sm text-gray-500">Última actualización: Enero 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
            
            {/* --- AVISO LEGAL --- */}
            <section>
              <h3 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-wide border-l-4 border-brand-gold pl-3">1. Aviso Legal (Datos Identificativos)</h3>
              <p className="mb-4 text-base">
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan a continuación los datos del titular del sitio web:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-sm md:text-base space-y-2">
                <p><strong>Titular (Operador):</strong> Telios Land Partners AB (Marca: "TerraConnect")</p>
                <p><strong>Domicilio Social:</strong> c/o Mattias Almgren, Södra Strömvägen 7, 791 46 Falun, Suecia (Sverige)</p>
                <p><strong>Número de Organización:</strong> 556800-8782 (Bolagsverket)</p>
                <p><strong>NIF / VAT-ID:</strong> SE556800878201</p>
                <p><strong>Representante:</strong> Mattias Eric Almgren</p>
                <p><strong>Contacto:</strong> <a href="mailto:info@mail.terraconnectcapital.com" className="text-brand-green underline">info@mail.terraconnectcapital.com</a></p>
                <p className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-200">
                  Resolución de litigios en línea (UE): La Comisión Europea facilita una plataforma de resolución de litigios en línea: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.
                </p>
              </div>
            </section>

            {/* --- POLÍTICA DE PRIVACIDAD --- */}
            <section>
              <h3 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-wide border-l-4 border-brand-gold pl-3">2. Política de Privacidad (RGPD)</h3>
              
              <h4 className="font-bold text-gray-800 mt-6 mb-2">2.1 Responsable del Tratamiento</h4>
              <p className="text-base">
                El responsable del tratamiento de sus datos es <strong>Telios Land Partners AB</strong>, con domicilio en Södra Strömvägen 7, 791 46 Falun, Suecia. Tratamos sus datos conforme al Reglamento General de Protección de Datos (RGPD UE 2016/679) y la normativa española vigente.
              </p>

              <h4 className="font-bold text-gray-800 mt-6 mb-2">2.2 Finalidad y Legitimación</h4>
              <ul className="list-disc list-inside space-y-2 text-base ml-2">
                <li><strong>Consentimiento (Art. 6.1.a RGPD):</strong> Al aceptar cookies o suscribirse a boletines.</li>
                <li><strong>Ejecución de Contrato/Precontrato (Art. 6.1.b RGPD):</strong> Al rellenar formularios para solicitar colaboración o servicios.</li>
                <li><strong>Interés Legítimo (Art. 6.1.f RGPD):</strong> Seguridad de la web y respuesta a consultas.</li>
              </ul>

              <h4 className="font-bold text-gray-800 mt-6 mb-2">2.3 Herramientas de Terceros y Transferencias Internacionales</h4>
              <p className="text-base mb-4">
                Utilizamos proveedores tecnológicos para gestionar nuestra actividad. Algunos procesan datos fuera del EEE (EE. UU.), garantizando el cumplimiento del RGPD mediante Cláusulas Contractuales Tipo o el Marco de Privacidad de Datos.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-gray-300 p-4 shadow-sm">
                  <strong className="block text-brand-green mb-1">CRM y Procesadores de Datos:</strong>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• <strong>HighLevel Inc. (EE. UU.):</strong> CRM y Automatización.</li>
                    <li>• <strong>LeadsHook (Australia):</strong> Formularios interactivos.</li>
                    <li>• <strong>Slack Technologies, LLC (EE. UU.):</strong> Comunicación interna.</li>
                    <li>• <strong>Zapier Inc. (EE. UU.):</strong> Conexión de aplicaciones.</li>
                    <li>• <strong>AWS & Microsoft:</strong> Infraestructura de nube.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-gray-300 p-4 shadow-sm">
                  <strong className="block text-brand-green mb-1">Analítica y Publicidad:</strong>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• <strong>Google Analytics:</strong> Análisis web (IP anónima).</li>
                    <li>• <strong>Meta Pixel:</strong> Seguimiento de conversiones.</li>
                    <li>• <strong>LinkedIn Insight Tag:</strong> Análisis profesional.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-gray-300 p-4 shadow-sm">
                  <strong className="block text-brand-green mb-1">Seguridad:</strong>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• <strong>Google reCAPTCHA v3:</strong> Protección contra spam y bots automatizados.</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-bold text-gray-800 mt-6 mb-2">2.4 Sus Derechos</h4>
              <p className="text-base">
                Puede ejercer sus derechos de acceso, rectificación, supresión y oposición enviando un correo a: <a href="mailto:info@mail.terraconnectcapital.com" className="font-bold text-brand-green">info@mail.terraconnectcapital.com</a>.
                Tiene derecho a presentar una reclamación ante la autoridad de control sueca (Integritetsskyddsmyndigheten - IMY) o española (AEPD).
              </p>

            </section>

          </div>
        </div>
      </Section>
    </div>
  );
};