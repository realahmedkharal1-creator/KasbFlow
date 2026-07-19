import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ChevronRight, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { services } from "../data";
import { useEffect, useState } from "react";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate content fetching for skeleton display
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!service && !isLoading) {
    return <Navigate to="/" replace />;
  }

  // Calculate estimated reading time based on 200 wpm
  const calculateReadTime = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  if (isLoading || !service) {
    return (
      <div className="pt-20 pb-32 px-6 max-w-4xl mx-auto min-h-[80vh]">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-4 w-20 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
          <div className="h-4 w-4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
          <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
        </div>
        
        <div className="w-20 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-2xl animate-pulse mb-8" />
        <div className="h-14 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-6" />
        <div className="flex gap-4 mb-12">
          <div className="h-5 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
        </div>
        
        <div className="space-y-4 mb-12">
          <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
          <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
          <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
        </div>
        
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12">
          <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse mt-1 shrink-0" />
                <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-20 pb-32 px-6 max-w-4xl mx-auto min-h-[80vh]">
      <Helmet>
        <title>{service.name} | Kasbflow Services</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-12">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <ChevronRight size={14} className="text-neutral-300 dark:text-neutral-600" />
        <Link to="/#services" className="hover:text-brand-accent transition-colors">Services</Link>
        <ChevronRight size={14} className="text-neutral-300 dark:text-neutral-600" />
        <span className="text-neutral-900 dark:text-neutral-200 font-medium">{service.name}</span>
      </nav>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="w-20 h-20 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent">
            <Icon size={40} />
          </div>
          <div className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 px-4 py-2 rounded-full text-sm">
            <Clock size={16} className="text-brand-accent" />
            {calculateReadTime(service.description)}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
          {service.name}
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="mb-12">
          <Link to="/#contact" className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-white dark:text-neutral-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
            Book a Strategy Call
          </Link>
        </div>
        
        {service.subServices && service.subServices.length > 0 ? (
          <>
            <div className="mb-20">
              <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-8">Comprehensive Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.subServices.map((sub, idx) => {
                  const SubIcon = sub.icon;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-brand-accent/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                        <SubIcon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{sub.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{sub.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {service.process && service.process.length > 0 && (
              <div className="mb-20">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-8">Our Proven Process</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="text-brand-accent/20 font-display font-bold text-6xl absolute -top-4 -left-2 z-0">{idx + 1}</div>
                      <div className="relative z-10 pt-4">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-8">What's included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.details.map((detail, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
                  <span className="text-neutral-700 dark:text-neutral-300 text-lg">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center bg-neutral-900 dark:bg-neutral-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-accent/5" />
          <h3 className="text-3xl font-display font-bold text-white mb-6 relative z-10">Ready to get started?</h3>
          <p className="text-neutral-300 mb-8 max-w-lg mx-auto relative z-10">
            Let's discuss how our {service.name} services can help scale your business.
          </p>
          <Link to="/#contact" className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-neutral-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 relative z-10">
            Book a Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
