import React from 'react';
import { skillsData } from '../utils/data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as any }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            02 / Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Skills & Expertise
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        {/* Top Featured Skills (Circular SVGs) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { name: 'AI Prompting', pct: 95, color: 'text-indigo-500', stroke: 'stroke-indigo-500' },
            { name: 'Python Systems', pct: 90, color: 'text-cyan-500', stroke: 'stroke-cyan-500' },
            { name: 'Data Science', pct: 85, color: 'text-emerald-500', stroke: 'stroke-emerald-500' },
            { name: 'SQL Databases', pct: 85, color: 'text-amber-500', stroke: 'stroke-amber-500' }
          ].map((item, idx) => {
            const radius = 35;
            const strokeWidth = 5;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (item.pct / 100) * circumference;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md flex flex-col items-center gap-4 hover:border-indigo-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
              >
                {/* SVG Circle */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background track circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className="stroke-gray-100 dark:stroke-gray-800 fill-none"
                      strokeWidth={strokeWidth}
                    />
                    {/* Animated Fill Circle */}
                    <motion.circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className={`fill-none ${item.stroke} transition-all duration-1000 ease-out`}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Inside Text */}
                  <span className="absolute text-base font-bold text-gray-850 dark:text-gray-100">
                    {item.pct}%
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Category Lists */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md shadow-sm hover:shadow-lg dark:hover:border-gray-700/80 transition-all duration-300 flex flex-col text-left"
            >
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-6 border-b border-gray-200/50 dark:border-gray-800/50 pb-3">
                {category.title}
              </h4>
              
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: skillIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
