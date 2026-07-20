import React from 'react';
import { personalInfo } from '../utils/data';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200/50 dark:border-gray-900/50 pt-16 pb-8 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand/Signature */}
          <div className="flex flex-col items-start gap-4">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleScrollTop(); }}
              className="font-bold text-xl tracking-tight text-gray-900 dark:text-white flex items-center gap-1"
            >
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Saleem
              </span>
              <span className="text-indigo-500 font-mono text-sm">.dev</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              AI Developer & Full Stack Engineer crafting high-performance intelligent interfaces and scalable computational backends.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Certifications', href: '#certifications' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">
                  +91 {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-500" />
                <span>{personalInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 dark:border-gray-900/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Shaik Saleem. Built with React, Tailwind v4 & Framer Motion. All rights reserved.
          </p>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-all group"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
