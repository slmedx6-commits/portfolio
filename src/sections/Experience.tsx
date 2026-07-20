import React from 'react';
import { internships, education } from '../utils/data';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  // Let's combine education and internships into a sorted chronological index
  const timelineItems = [
    {
      type: 'education',
      title: education[0].degree,
      institution: education[0].institution,
      period: education[0].period,
      details: education[0].details,
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'border-indigo-500 text-indigo-500 bg-indigo-500/10'
    },
    {
      type: 'education',
      title: education[1].degree,
      institution: education[1].institution,
      period: education[1].period,
      details: education[1].details,
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'border-cyan-500 text-cyan-500 bg-cyan-500/10'
    },
    {
      type: 'internship',
      title: internships[0].role,
      institution: internships[0].company,
      period: internships[0].period,
      details: internships[0].highlights.join(' '),
      icon: <Briefcase className="w-5 h-5" />,
      color: 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
    },
    {
      type: 'internship',
      title: internships[1].role,
      institution: internships[1].company,
      period: internships[1].period,
      details: internships[1].highlights.join(' '),
      icon: <Briefcase className="w-5 h-5" />,
      color: 'border-purple-500 text-purple-500 bg-purple-500/10'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#030712] transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            03 / Chronology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Education & Internships
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 flex flex-col gap-12 text-left pl-8 md:pl-10 py-2">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Connector Dot */}
              <div className={`absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white dark:bg-gray-950 z-10 shadow-sm ${item.color}`}>
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/40 bg-white dark:bg-gray-900/40 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                {/* Main Heading */}
                <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-0.5">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mb-4">
                  {item.institution}
                </p>

                {/* Brief description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.details}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
