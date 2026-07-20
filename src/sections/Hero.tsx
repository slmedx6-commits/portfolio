import React from 'react';
import { personalInfo } from '../utils/data';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 90,
        damping: 15,
        mass: 0.8
      } as any
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden animated-grid"
    >
      {/* Premium Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[25vw] h-[25vw] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Intro Text Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          {/* Greeting Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-accent text-xs font-semibold text-indigo-600 dark:text-cyan-400"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Recruiter-Focused Digital Workspace
          </motion.div>

          {/* Name & Title */}
          <div className="flex flex-col gap-2">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Hi, I'm <br />
              <span className="shimmer-text">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 font-mono flex items-center"
            >
              &gt; {personalInfo.title}
            </motion.h2>
          </div>

          {/* Core pitch */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 dark:text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed"
          >
            Pursuing MCA student and specialized developer. Crafting high-performance intelligent interfaces and backend engines. Focused on machine learning analysis, automation systems, and clean UX workflows.
          </motion.p>

          {/* Social connections */}
          <motion.div variants={itemVariants} className="flex gap-4 items-center">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors py-1 px-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 rounded-lg"
            >
              <FaLinkedin className="w-4 h-4 text-indigo-500" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors py-1 px-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 rounded-lg"
            >
              <FaGithub className="w-4 h-4 text-indigo-600 dark:text-white" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors py-1 px-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 rounded-lg"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>Email</span>
            </a>
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handlePrintResume}
              className="px-6 py-3.5 bg-white/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Print / Download Resume
              <Download className="w-4 h-4 text-cyan-400" />
            </button>
          </motion.div>
        </motion.div>

        {/* Abstract Tech Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="lg:col-span-5 flex justify-center relative select-none"
        >
          {/* Neon Ring Backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-cyan-500/5 to-purple-500/10 blur-[80px] rounded-full animate-pulse-slow" />
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
            {/* Geometric interactive SVG avatar */}
            <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-500/20 dark:text-indigo-400/20">
              {/* Outer boundary rings */}
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_60s_linear_infinite]" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" className="animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Core shape network */}
              <polygon points="100,30 160,70 160,130 100,170 40,130 40,70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Neural lines inside */}
              <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="0.5" />
              <line x1="40" y1="70" x2="160" y2="130" stroke="currentColor" strokeWidth="0.5" />
              <line x1="40" y1="130" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" />
              <line x1="40" y1="70" x2="100" y2="170" stroke="currentColor" strokeWidth="0.5" />
              <line x1="160" y1="70" x2="100" y2="170" stroke="currentColor" strokeWidth="0.5" />
              <line x1="40" y1="130" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" />
              <line x1="160" y1="130" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" />

              {/* Glowing node vertices */}
              <circle cx="100" cy="30" r="4.5" fill="#6366f1" className="animate-ping" style={{ transformOrigin: '100px 30px' }} />
              <circle cx="100" cy="30" r="3.5" fill="#6366f1" />
              
              <circle cx="160" cy="70" r="3.5" fill="#06b6d4" />
              
              <circle cx="160" cy="130" r="3.5" fill="#a855f7" />
              
              <circle cx="100" cy="170" r="4.5" fill="#10b981" className="animate-ping" style={{ transformOrigin: '100px 170px' }} />
              <circle cx="100" cy="170" r="3.5" fill="#10b981" />
              
              <circle cx="40" cy="130" r="3.5" fill="#06b6d4" />
              
              <circle cx="40" cy="70" r="3.5" fill="#f59e0b" />
              
              <circle cx="100" cy="100" r="7" fill="url(#coreGradient)" className="animate-pulse" />
              
              {/* Gradient definition for center */}
              <defs>
                <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Tiny Floating Badges */}
            <div className="absolute top-10 right-4 px-2.5 py-1 glass text-[10px] font-bold font-mono text-cyan-400 rounded-md border border-cyan-500/25 shadow-lg">
              import tensorflow
            </div>
            <div className="absolute bottom-8 left-0 px-2.5 py-1 glass text-[10px] font-bold font-mono text-indigo-400 rounded-md border border-indigo-500/25 shadow-lg">
              def train_model():
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating indicators at the bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Scroll Down</span>
        <div className="w-1.5 h-6 rounded-full border border-gray-400 dark:border-gray-600 flex justify-center p-0.5">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
