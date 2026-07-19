import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.testimonials': 'Testimonials',
    'nav.letsTalk': "Let's Talk",
    'hero.badge': 'We grow brands, you grow business',
    'hero.title1': 'We turn clicks into ',
    'hero.title2': 'customers.',
    'hero.desc': 'Kasbflow is a full-service digital marketing agency dedicated to scaling your business through data-driven strategies, stunning design, and relentless optimization.',
    'hero.explore': 'Explore Services',
    'hero.viewWork': 'View Our Work',
    'hero.projects': 'Projects Delivered',
    'services.badge': 'Our Services',
    'services.title': 'Everything you need to scale digitally.',
    'services.learnMore': 'Learn more',
    'work.badge': 'Selected Work',
    'work.title': 'Results that speak for themselves.',
    'team.badge': 'Our Team',
    'team.title': 'Meet the experts behind the growth.',
    'testimonials.badge': 'Client Success',
    'testimonials.title': "Don't just take our word for it.",
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently asked questions.',
    'contact.title': 'Ready to grow your business?',
    'contact.desc': "Let's discuss your goals and build a digital strategy tailored for your success. Fill out the form and our team will get back to you within 24 hours.",
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.project': 'Project Type',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.success': 'Message Sent!',
    'contact.success.desc': "We'll be in touch with you shortly.",
    'footer.rights': 'Kasbflow Digital Marketing Agency. All rights reserved.',
  },
  es: {
    'nav.services': 'Servicios',
    'nav.work': 'Trabajos',
    'nav.testimonials': 'Testimonios',
    'nav.letsTalk': "Hablemos",
    'hero.badge': 'Hacemos crecer marcas y negocios',
    'hero.title1': 'Convertimos clics en ',
    'hero.title2': 'clientes.',
    'hero.desc': 'Kasbflow es una agencia de marketing digital de servicio completo dedicada a escalar su negocio a través de estrategias basadas en datos, diseño impresionante y optimización implacable.',
    'hero.explore': 'Explorar Servicios',
    'hero.viewWork': 'Ver Nuestro Trabajo',
    'hero.projects': 'Proyectos Entregados',
    'services.badge': 'Nuestros Servicios',
    'services.title': 'Todo lo que necesitas para escalar digitalmente.',
    'services.learnMore': 'Saber más',
    'work.badge': 'Trabajo Seleccionado',
    'work.title': 'Resultados que hablan por sí mismos.',
    'team.badge': 'Nuestro Equipo',
    'team.title': 'Conoce a los expertos detrás del crecimiento.',
    'testimonials.badge': 'Éxito del Cliente',
    'testimonials.title': "No solo tome nuestra palabra.",
    'faq.badge': 'Preguntas Frecuentes',
    'faq.title': 'Preguntas frecuentes.',
    'contact.title': '¿Listo para hacer crecer tu negocio?',
    'contact.desc': "Discutamos tus objetivos y construyamos una estrategia digital adaptada para tu éxito. Completa el formulario y nuestro equipo te responderá en 24 horas.",
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.project': 'Tipo de Proyecto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje Enviado!',
    'contact.success.desc': "Nos pondremos en contacto contigo en breve.",
    'footer.rights': 'Agencia de Marketing Digital Kasbflow. Todos los derechos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
