import React from 'react';
import { certifications, achievements } from '../utils/data';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#030712] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            05 / Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Certifications & Accomplishments
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Certifications Card list */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h4 className="text-xl font-bold text-gray-955 dark:text-white mb-2">
              Verified Certifications
            </h4>
            
            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-gray-250/60 dark:border-gray-800/40 bg-gray-50/40 dark:bg-gray-900/20 hover:border-indigo-550/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-355">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-wider">
                      {cert.issuer} ({cert.year})
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-base">
                      {cert.name}
                    </span>
                    <a
                      href={cert.credentialUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-500 dark:text-cyan-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      View Credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Milestones column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h4 className="text-xl font-bold text-gray-955 dark:text-white mb-2">
              Key Achievements
            </h4>
            
            <div className="p-8 rounded-2xl glass flex flex-col gap-5 border border-indigo-500/10 dark:border-indigo-400/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-3.5 items-start text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    {ach}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
