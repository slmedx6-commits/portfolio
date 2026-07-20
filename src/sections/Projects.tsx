import React from 'react';
import { projects, miniProjects } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import { Terminal, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative">
      {/* Visual Accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2">
            04 / Engineering
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Academic Case Studies
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mt-3" />
        </div>

        {/* Academic Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mini Projects Registry Section */}
        <div className="border-t border-gray-200/60 dark:border-gray-800/40 pt-16">
          <div className="flex flex-col items-start text-left mb-10">
            <h4 className="text-xs uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Supplemental Code
            </h4>
            <h5 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Python Utilities & Script Registries
            </h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 max-w-lg">
              Check out some of the early CLI and script utilities I developed during my initial learning phases and practical coursework.
            </p>
          </div>

          {/* Table list */}
          <div className="overflow-hidden rounded-xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wider">
                    <th className="py-4 px-6">Utility Name</th>
                    <th className="py-4 px-6">Technologies</th>
                    <th className="py-4 px-6">Description</th>
                    <th className="py-4 px-6 text-right">Shell Interface</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/50 dark:divide-gray-850">
                  {miniProjects.map((mini, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-indigo-500/[0.02] dark:hover:bg-cyan-500/[0.01] transition-colors"
                    >
                      <td className="py-4.5 px-6 font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                        {mini.name}
                      </td>
                      <td className="py-4.5 px-6 font-mono text-[10px] text-gray-500 dark:text-gray-400">
                        {mini.tech}
                      </td>
                      <td className="py-4.5 px-6 text-gray-550 dark:text-gray-400">
                        {mini.desc}
                      </td>
                      <td className="py-4.5 px-6 text-right">
                        <a
                          href="#projects"
                          onClick={(e) => {
                            e.preventDefault();
                            // Scroll to terminal project card and toggle playground
                            const terminalCard = document.querySelector('#projects');
                            terminalCard?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-500 dark:text-cyan-400 hover:underline"
                        >
                          Execute Shell
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
