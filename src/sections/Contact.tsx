import React, { useState } from 'react';
import { personalInfo } from '../utils/data';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formState.name.trim()) errors.name = 'Name is required';
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formState.message.trim()) errors.message = 'Message content is required';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            06 / Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Quick Channels Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-gray-950 dark:text-white">
                Let's discuss your next project
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                Have an internship opportunity, a project requirement, or just want to connect? Hit the form or reach out through these channels:
              </p>
            </div>

            {/* Structured Channels */}
            <div className="flex flex-col gap-4 my-6">
              {/* Email channel with Copy Utility */}
              <div className="p-4 rounded-xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-550/10 text-indigo-600 dark:text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Write Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-gray-800 dark:text-gray-200 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone channel */}
              <div className="p-4 rounded-xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Call Me</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-gray-800 dark:text-gray-200 hover:underline">
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Residence channel */}
              <div className="p-4 rounded-xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md flex items-center shadow-sm gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Residence</span>
                  <span className="text-xs font-semibold text-gray-850 dark:text-gray-200">
                    {personalInfo.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/91${personalInfo.phone}?text=Hi%20Saleem,%20I%20saw%2520your%2520portfolio%2520and%2520would%2520love%2520to%2520connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-650/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group w-full"
            >
              <MessageSquare className="w-4 h-4" />
              Direct WhatsApp Message
            </a>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/40 backdrop-blur-md shadow-sm relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold text-gray-450 dark:text-gray-400 uppercase">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                          placeholder="Shaik Saleem"
                        />
                        {formErrors.name && (
                          <span className="text-[10px] text-red-500 font-semibold">{formErrors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold text-gray-455 dark:text-gray-400 uppercase">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                          placeholder="example@domain.com"
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-red-500 font-semibold">{formErrors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-[10px] font-bold text-gray-450 dark:text-gray-400 uppercase">Subject (Optional)</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                        placeholder="Inquiry about Recruitment / Project details"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] font-bold text-gray-450 dark:text-gray-400 uppercase">Message Content</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 resize-none"
                        placeholder="Write your proposal or details here..."
                      />
                      {formErrors.message && (
                        <span className="text-[10px] text-red-500 font-semibold">{formErrors.message}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-3 bg-indigo-600 hover:bg-indigo-550 text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Message Dispatched!</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                      Thank you for reaching out. Your message has been successfully transmitted, and I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
