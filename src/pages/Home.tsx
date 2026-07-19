import { motion } from "motion/react";
import { ArrowRight, ChevronDown, ChevronRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { services, testimonials, portfolio, team, faqs } from "../data";
import { useLanguage } from "../context/LanguageContext";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export default function Home() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Kasbflow | Digital Marketing Agency</title>
        <meta name="description" content="Kasbflow is a full-service digital marketing agency dedicated to scaling your business through data-driven strategies, stunning design, and relentless optimization." />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-neutral-900 dark:text-white">
              {t('hero.title1')}<span className="text-brand-accent">{t('hero.title2')}</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl">
              {t('hero.desc')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white dark:text-neutral-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:gap-3"
              >
                {t('hero.explore')} <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-8 py-4 rounded-full font-semibold transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                {t('hero.viewWork')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 relative">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Digital Marketing Team"
                className="object-cover w-full h-full opacity-90 dark:opacity-80 mix-blend-normal dark:mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100 via-transparent dark:from-neutral-900 dark:via-neutral-900/40 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-4 md:-left-8 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-6 rounded-2xl shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-neutral-900 dark:text-white">250+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{t('hero.projects')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-950 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t('services.badge')}</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">{t('services.title')}</h3>
            </div>
          </div>

          {/* Featured Premium Service */}
          {services.find(s => s.slug === 'social-media-marketing') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900 dark:bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
                    Flagship Service
                  </div>
                  <h4 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Social Media Marketing</h4>
                  <p className="text-lg text-neutral-400 mb-8 max-w-lg">
                    A comprehensive digital growth engine. We integrate social strategies, paid advertising, and creative design to scale your business aggressively.
                  </p>
                  <Link 
                    to="/service/social-media-marketing" 
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-neutral-900 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
                  >
                    Explore Flagship Services <ArrowRight size={18} />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {services.find(s => s.slug === 'social-media-marketing')?.subServices?.slice(0, 4).map((sub, idx) => {
                    const SubIcon = sub.icon;
                    return (
                      <div key={idx} className="bg-neutral-800/50 border border-neutral-700/50 p-5 rounded-2xl">
                        <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                          <SubIcon size={20} />
                        </div>
                        <h5 className="text-white font-semibold text-sm mb-1">{sub.name}</h5>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.slug !== 'social-media-marketing').map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.1 }}
                  key={service.name}
                  className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl hover:border-brand-accent/50 dark:hover:border-brand-accent/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all flex flex-col h-full relative overflow-hidden"
                >
                  <Link to={`/service/${service.slug}`} className="absolute inset-0 z-10" aria-label={`View ${service.name} details`} />
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 group-hover:bg-brand-accent/10 dark:group-hover:bg-brand-accent/20 rounded-xl flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:text-brand-accent mb-4 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-brand-accent dark:group-hover:text-white transition-colors mb-2">{service.name}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-grow line-clamp-2">{service.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    {t('services.learnMore')} <ArrowRight size={16} className="ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t('work.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">{t('work.title')}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              key={item.title}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-neutral-200 dark:border-neutral-800">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-brand-accent text-sm font-medium mb-2">{item.category}</div>
                  <h4 className="text-2xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-accent transition-colors">{item.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-white group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-neutral-900 transition-all shrink-0">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t('team.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">{t('team.title')}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              key={member.name}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden relative border-b border-neutral-200 dark:border-neutral-800">
                <img 
                  loading="lazy"
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-display font-bold mb-1 text-neutral-900 dark:text-white group-hover:text-brand-accent transition-colors">{member.name}</h4>
                <div className="text-brand-accent text-sm font-medium mb-4">{member.role}</div>
                <p className="text-neutral-600 dark:text-neutral-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-neutral-950 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t('testimonials.badge')}</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">{t('testimonials.title')}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-8">"{testimonial.text}"</p>
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-neutral-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t('faq.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">{t('faq.title')}</h3>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-4 text-neutral-900 dark:text-white">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-accent shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-neutral-600 dark:text-neutral-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-brand-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-neutral-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
              {t('contact.desc')}
            </p>
            <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200 dark:border-neutral-700">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>hello@kasbflow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200 dark:border-neutral-700">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span>Al Satwa, Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl shadow-xl">
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">{t('contact.success')}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{t('contact.success.desc')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('contact.form.project')}</label>
                  <select
                    id="projectType"
                    {...register("projectType", { required: "Please select a project type" })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ads">Paid Advertising</option>
                    <option value="web">Web Development</option>
                    <option value="seo">SEO & Content</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <span className="text-red-500 text-sm mt-1">{errors.projectType.message}</span>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white dark:text-neutral-900 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-2 mt-2"
                >
                  {formStatus === "submitting" ? (
                    <span className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>{t('contact.form.send')} <ChevronRight size={20} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
