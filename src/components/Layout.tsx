import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, Menu, X, Sun, Moon, Linkedin, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark as requested initially
  
  const { language, setLanguage, t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Apply theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav.services'), href: "/#services" },
    { name: t('nav.work'), href: "/#work" },
    { name: t('nav.testimonials'), href: "/#testimonials" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-2xl tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
            Kasbflow<span className="text-brand-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-brand-accent dark:text-neutral-300 dark:hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="/#contact"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white dark:text-neutral-900 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              {t('nav.letsTalk')}
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-accent dark:hover:text-brand-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="bg-brand-accent text-white dark:text-neutral-900 px-5 py-3 rounded-xl text-center font-semibold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.letsTalk')}
            </a>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="text-2xl font-display font-bold text-neutral-900 dark:text-white">
              Kasbflow<span className="text-brand-accent">.</span>
            </Link>
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-brand-accent hover:border-brand-accent hover:text-white dark:hover:text-neutral-900 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-brand-accent hover:border-brand-accent hover:text-white dark:hover:text-neutral-900 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-brand-accent hover:border-brand-accent hover:text-white dark:hover:text-neutral-900 transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.5 }}
        style={{ pointerEvents: showBackToTop ? 'auto' : 'none' }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 bg-brand-accent text-white dark:text-neutral-900 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
