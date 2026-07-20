import React, { useState } from 'react';
import type { Project } from '../utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Play, BarChart2, Eye, Cpu, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'interactive'>('details');

  // Widget State: PromptForge
  const [pfInput, setPfInput] = useState('write a python script');
  const [pfOutput, setPfOutput] = useState('');
  const [pfLoading, setPfLoading] = useState(false);

  // Widget State: ReValua
  const [rvItem, setRvItem] = useState('Smartphone');
  const [rvScanning, setRvScanning] = useState(false);
  const [rvPrice, setRvPrice] = useState<number | null>(null);

  // Widget State: College Portal
  const [cpRole, setCpRole] = useState<'student' | 'staff'>('student');
  const [cpLogs, setCpLogs] = useState<string[]>(['[System]: Database connected.']);

  // Widget State: Hotel Analytics
  const [haMetric, setHaMetric] = useState<'revenue' | 'occupancy'>('occupancy');

  // Widget State: Mini Terminal
  const [terminalLogs, setTerminalLogs] = useState<string[]>(['Saleem-OS v1.0.0', 'Type a script or select a demo to run.']);

  // PromptForge Action
  const handleEnhancePrompt = () => {
    setPfLoading(true);
    setPfOutput('');
    setTimeout(() => {
      setPfLoading(false);
      setPfOutput(
        `# Role: Expert Software Engineer\n# Task: Generate a robust Python script\n# Context: Input requested "${pfInput}"\n# Enhanced Prompt:\nCreate a modular, fully typed Python script that conforms to PEP 8. Include docstrings, error handling, and unit test mocks. Optimize file I/O operations and leverage concurrent execution where possible.`
      );
    }, 1500);
  };

  // ReValua Action
  const handleScanItem = () => {
    setRvScanning(true);
    setRvPrice(null);
    setTimeout(() => {
      setRvScanning(false);
      if (rvItem === 'Smartphone') setRvPrice(280);
      else if (rvItem === 'Laptop') setRvPrice(640);
      else setRvPrice(120);
    }, 1800);
  };

  // College Portal Log Trigger
  const triggerApiLog = (action: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setCpLogs((prev) => [
      ...prev.slice(-3),
      `[${timestamp}] API Request: POST /api/v1/${action}`,
      `[${timestamp}] Response: 200 OK (Processed in 42ms)`
    ]);
  };

  // Mini Terminal Run Simulation
  const runTerminalDemo = (demo: string) => {
    setTerminalLogs((prev) => [...prev, `> python ${demo}.py`]);
    setTimeout(() => {
      if (demo === 'heads_tails') {
        const coin = Math.random() > 0.5 ? 'HEADS' : 'TAILS';
        setTerminalLogs((prev) => [
          ...prev,
          `[Simulator]: Flipping virtual coin...`,
          `Result: [${coin}]`,
          `Status: Success.`
        ]);
      } else if (demo === 'calculator') {
        setTerminalLogs((prev) => [
          ...prev,
          `[Calculator]: Initializing matrix calculations...`,
          `Result: 5.0 + 7.5 = 12.5`,
          `Execution finished.`
        ]);
      } else {
        setTerminalLogs((prev) => [
          ...prev,
          `[SDMS]: Connecting SQLite student database...`,
          `Found 14 entries.`,
          `Query: SELECT * FROM results WHERE score >= 90;`
        ]);
      }
    }, 600);
  };

  // Renders the customized interactive component based on project theme
  const renderInteractiveWidget = () => {
    switch (project.theme) {
      case 'ai':
        return (
          <div className="flex flex-col gap-4 text-left p-4 rounded-xl bg-gray-950 text-emerald-400 font-mono text-xs h-64 overflow-y-auto border border-emerald-500/25 relative">
            <div className="absolute top-2 right-2 flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            
            <span className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              PromptForge AI Playground
            </span>

            <div className="flex flex-col gap-2.5 mt-2">
              <label className="text-[10px] text-gray-400">Raw Input Prompt:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pfInput}
                  onChange={(e) => setPfInput(e.target.value)}
                  className="flex-1 bg-gray-900 border border-gray-800 rounded px-2.5 py-1 text-white focus:outline-none focus:border-emerald-500 text-xs"
                />
                <button
                  onClick={handleEnhancePrompt}
                  disabled={pfLoading}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded transition-colors text-xs flex items-center gap-1 cursor-pointer"
                >
                  {pfLoading ? 'Enhancing...' : 'Enhance'}
                </button>
              </div>
            </div>

            {pfLoading && (
              <div className="flex items-center justify-center gap-2 py-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {pfOutput && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-[11px] text-gray-300 bg-gray-900/50 p-2.5 rounded border border-gray-850 whitespace-pre-line leading-relaxed"
              >
                {pfOutput}
              </motion.div>
            )}
          </div>
        );

      case 'ml':
        return (
          <div className="flex flex-col gap-4 text-left p-4 rounded-xl bg-gray-950 text-cyan-400 font-mono text-xs h-64 border border-cyan-500/25 relative">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              ReValua AI Image Analyzer
            </span>

            <div className="grid grid-cols-2 gap-4 items-center mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-gray-400">Select Item:</label>
                <select
                  value={rvItem}
                  onChange={(e) => setRvItem(e.target.value)}
                  className="bg-gray-900 border border-gray-800 rounded px-2 py-1 text-white text-xs"
                >
                  <option value="Smartphone">Smartphone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Smartwatch">Smartwatch</option>
                </select>
                <button
                  onClick={handleScanItem}
                  disabled={rvScanning}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-1.5 px-3 rounded transition-colors text-xs cursor-pointer flex items-center justify-center gap-1 mt-1"
                >
                  <Play className="w-3 h-3 fill-white" />
                  {rvScanning ? 'Scanning...' : 'Scan Model'}
                </button>
              </div>

              {/* Scanning visual box */}
              <div className="h-32 bg-gray-900 rounded border border-gray-800 flex items-center justify-center relative overflow-hidden">
                {rvScanning && (
                  <div className="absolute inset-x-0 h-[2px] bg-cyan-400 top-0 animate-scan shadow-lg shadow-cyan-400" />
                )}
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-gray-500">IMAGE UPLOAD</span>
                  <span className="text-[11px] font-bold text-white uppercase">{rvItem} Mock</span>
                </div>
              </div>
            </div>

            {/* Price odometer widget */}
            {rvPrice !== null && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-2 p-2.5 rounded bg-cyan-500/10 border border-cyan-500/30 flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] text-cyan-500 uppercase font-bold">Estimated Resale Price</span>
                  <span className="text-sm font-extrabold text-white">${rvPrice} USD</span>
                </div>
                <div className="flex flex-col items-end text-[9px] text-gray-400">
                  <span>Confidence: 94.6%</span>
                  <span>Model Year: 2022</span>
                </div>
              </motion.div>
            )}
          </div>
        );

      case 'fullstack':
        return (
          <div className="flex flex-col gap-3 text-left p-4 rounded-xl bg-gray-950 text-indigo-400 font-mono text-xs h-64 border border-indigo-500/25">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1 flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                College Portal API logs
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </span>

            {/* Dashboard Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => { setCpRole('student'); triggerApiLog('student/profile'); }}
                className={`flex-1 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  cpRole === 'student' ? 'bg-indigo-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                }`}
              >
                Student Dashboard
              </button>
              <button
                onClick={() => { setCpRole('staff'); triggerApiLog('staff/ratings'); }}
                className={`flex-1 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  cpRole === 'staff' ? 'bg-indigo-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                }`}
              >
                Faculty Dashboard
              </button>
            </div>

            {/* Simulated Layout */}
            <div className="flex-1 bg-gray-900 border border-gray-850 p-2.5 rounded text-[11px] flex flex-col gap-1.5 overflow-hidden">
              {cpRole === 'student' ? (
                <>
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span className="text-gray-400">Class Attendance:</span>
                    <span className="text-white font-bold">92.4%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span className="text-gray-400">Bus Transport Rating:</span>
                    <button onClick={() => triggerApiLog('transport/rate')} className="text-cyan-400 hover:underline">Rate [4/5]</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span className="text-gray-400">Assigned Modules:</span>
                    <span className="text-white font-bold">MCA Big Data</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span className="text-gray-400">Faculty Rating:</span>
                    <span className="text-emerald-400 font-bold">4.82 / 5.0</span>
                  </div>
                </>
              )}

              {/* Logs Stream */}
              <div className="mt-1 pt-1.5 border-t border-gray-850 flex flex-col gap-1 text-[9px] text-gray-500">
                {cpLogs.map((log, idx) => (
                  <div key={idx} className="truncate">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'excel':
        return (
          <div className="flex flex-col gap-3 text-left p-4 rounded-xl bg-gray-950 text-amber-500 font-mono text-xs h-64 border border-amber-500/25">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1 flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
                Hotel Analytics Chart UI
              </span>
              <span className="text-[9px] font-bold text-gray-500">Cleaned rows: 100K</span>
            </span>

            {/* Tab controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setHaMetric('occupancy')}
                className={`px-3 py-1 rounded text-xs transition-all cursor-pointer ${
                  haMetric === 'occupancy' ? 'bg-amber-600 text-white' : 'bg-gray-900 text-gray-400'
                }`}
              >
                Occupancy %
              </button>
              <button
                onClick={() => setHaMetric('revenue')}
                className={`px-3 py-1 rounded text-xs transition-all cursor-pointer ${
                  haMetric === 'revenue' ? 'bg-amber-600 text-white' : 'bg-gray-900 text-gray-400'
                }`}
              >
                Dynamic Rev leakage
              </button>
            </div>

            {/* Interactive SVG Chart */}
            <div className="flex-1 bg-gray-900/50 rounded border border-gray-850 p-3 flex items-end justify-around h-32 relative">
              <div className="absolute top-2 left-2 text-[8px] text-gray-600">Season Occupancy Metric (Q1 - Q4)</div>
              
              {haMetric === 'occupancy' ? (
                <>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white">45%</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '35px' }} className="w-5 bg-amber-500 rounded-t" />
                    <span className="text-[8px] text-gray-500">Q1</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white">78%</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '62px' }} className="w-5 bg-amber-500 rounded-t" />
                    <span className="text-[8px] text-gray-500">Q2</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white">92%</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '75px' }} className="w-5 bg-amber-550 rounded-t shadow-lg shadow-amber-500/10" />
                    <span className="text-[8px] text-gray-500">Q3</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white">55%</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '44px' }} className="w-5 bg-amber-500 rounded-t" />
                    <span className="text-[8px] text-gray-500">Q4</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-red-400">-$15K</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '60px' }} className="w-5 bg-red-500/70 rounded-t" />
                    <span className="text-[8px] text-gray-500">OffS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-emerald-400">+$24K</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '70px' }} className="w-5 bg-emerald-500/70 rounded-t" />
                    <span className="text-[8px] text-gray-500">PeakS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white">Leak%</span>
                    <motion.div initial={{ height: 0 }} animate={{ height: '40px' }} className="w-5 bg-amber-500 rounded-t" />
                    <span className="text-[8px] text-gray-500">Avg</span>
                  </div>
                </>
              )}
            </div>
          </div>
        );

      default: // Terminal Runner (Default Mini Projects)
        return (
          <div className="flex flex-col gap-3 text-left p-4 rounded-xl bg-gray-950 text-gray-300 font-mono text-xs h-64 border border-gray-800 relative">
            <span className="text-[10px] text-gray-550 uppercase tracking-widest border-b border-gray-900 pb-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-gray-400" />
              Python Shell Exec
            </span>

            {/* Run Buttons */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => runTerminalDemo('heads_tails')}
                className="px-2 py-0.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 text-[10px] rounded text-white cursor-pointer"
              >
                run heads_tails.py
              </button>
              <button
                onClick={() => runTerminalDemo('calculator')}
                className="px-2 py-0.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 text-[10px] rounded text-white cursor-pointer"
              >
                run calculator.py
              </button>
              <button
                onClick={() => runTerminalDemo('student_db')}
                className="px-2 py-0.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 text-[10px] rounded text-white cursor-pointer"
              >
                run SDMS.py
              </button>
            </div>

            {/* CLI Output */}
            <div className="flex-1 bg-gray-900/50 p-2.5 rounded border border-gray-900 overflow-y-auto text-[10px] leading-normal flex flex-col gap-1">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.startsWith('>') ? 'text-cyan-400 font-bold' : log.startsWith('Result') ? 'text-emerald-400 font-semibold' : 'text-gray-400'}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 group">
      <div>
        {/* Card Header Nav */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/60 pb-3.5 mb-5 text-xs">
          <span className="font-bold font-mono text-indigo-600 dark:text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-indigo-50/50 dark:bg-indigo-950/20">
            {project.category}
          </span>
          
          <div className="flex border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1 cursor-pointer font-semibold transition-colors ${
                activeTab === 'details' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-850 text-gray-500 dark:text-gray-400'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1 cursor-pointer font-semibold transition-colors ${
                activeTab === 'interactive' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-850 text-gray-500 dark:text-gray-400'
              }`}
            >
              Playground
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="h-68 overflow-hidden relative mb-6">
          <AnimatePresence mode="wait">
            {activeTab === 'details' ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col text-left h-full overflow-y-auto pr-1"
              >
                <h4 className="text-xl font-bold text-gray-950 dark:text-white mb-2 leading-tight">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Role / Tech Stack list */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="text-xs">
                    <strong className="text-gray-800 dark:text-gray-200">Role:</strong>{' '}
                    <span className="text-gray-500 dark:text-gray-400">{project.role}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 font-mono border border-gray-200/40 dark:border-gray-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="interactive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="h-full flex flex-col justify-center"
              >
                {renderInteractiveWidget()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Card Footer Links */}
      <div className="border-t border-gray-100 dark:border-gray-850 pt-4 flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-650 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Repository
          </a>
        )}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-650 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors ml-auto group"
        >
          Case Study
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
