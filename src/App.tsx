import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import PrintableResume from './components/PrintableResume';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulated loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center z-[9999] text-white font-mono"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-bold tracking-widest text-indigo-500"
              >
                SALEEM<span className="text-cyan-400">.dev</span>
              </motion.div>
              
              <div className="w-48 h-1 bg-gray-900 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-550 via-cyan-500 to-emerald-500 transition-all duration-100 ease-out" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                SYSTEM CORE INITIALIZED: {progress}%
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-gray-50 dark:bg-bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 print:bg-white print:text-black"
          >
            <div className="print:hidden">
              <CustomCursor />
              <ParticleBackground />
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
              </main>
              <Footer />
            </div>
            <PrintableResume />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
