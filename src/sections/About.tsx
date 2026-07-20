import React from 'react';
import { personalInfo } from '../utils/data';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#030712] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            01 / Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <h4 className="text-xl font-bold text-gray-950 dark:text-white">
              Bridging Structured Computing with Artificial Intelligence
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              I am an aspiring AI Developer and Full Stack Engineer currently pursuing my <strong>Master of Computer Applications (MCA)</strong>. I hold a strong foundation from my <strong>Bachelor of Computer Applications (BCA)</strong>, graduating in 2025. Over the course of my academic journey, I have focused on how logical algorithms translate into production-ready software.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              Through my development of platforms like <strong>PromptForge AI</strong> and <strong>ReValua AI</strong>, I have explored the integration of Python backends (Django, FastAPI) with data science metrics and machine learning models. I enjoy structuring database schemas, cleaning large datasets, and designing intuitive interfaces that simplify user actions.
            </p>
            
            {/* Quick Strengths Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/20 flex flex-col gap-1.5">
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Full-Stack Capability</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Proficient with Django, FastAPI, SQL architectures, and interactive React layouts.</span>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/20 flex flex-col gap-1.5">
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Data & AI Engineering</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Experienced in prompt engineering optimization, ML models, and Excel Power Query cleanups.</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-2xl glass flex flex-col text-left gap-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-colors duration-300" />
              
              <h4 className="font-bold text-gray-900 dark:text-white text-lg border-b border-gray-200/50 dark:border-gray-800/50 pb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-500" />
                Registry Details
              </h4>
              
              <ul className="space-y-4">
                <li className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Professional Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Contact Number</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    +91 {personalInfo.phone}
                  </a>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Current Residence</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {personalInfo.address}
                  </span>
                </li>
                <li className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Spoken Languages</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-purple-400" />
                    {personalInfo.languages.join(', ')}
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
