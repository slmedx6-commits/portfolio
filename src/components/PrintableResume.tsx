import React from 'react';
import { personalInfo, education, internships, projects, certifications } from '../utils/data';

const PrintableResume: React.FC = () => {
  return (
    <div id="resume-print" className="hidden print:block p-8 bg-white text-black font-sans text-xs max-w-[21cm] mx-auto leading-relaxed">
      {/* Header */}
      <div className="text-center border-b border-black pb-4 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide">{personalInfo.name}</h1>
        <p className="text-sm font-semibold text-gray-700 mt-1">{personalInfo.title}</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-gray-600 mt-2 font-mono">
          <span>Phone: +91 {personalInfo.phone}</span>
          <span>Email: {personalInfo.email}</span>
          <span>Location: Nellore, AP, India</span>
          <span>LinkedIn: linkedin.com/in/sk-saleem-2b7518344</span>
          <span>GitHub: github.com/slmedx6-commits</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
        <p className="text-[11px] text-gray-800">{personalInfo.summary}</p>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Education</h2>
        <div className="flex flex-col gap-2">
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-[11px]">{edu.degree}</h3>
                <p className="text-gray-750 text-[10px]">{edu.institution}</p>
              </div>
              <span className="text-[10px] font-semibold font-mono text-gray-600">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience / Internships */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Experience & Internships</h2>
        <div className="flex flex-col gap-3">
          {internships.map((intern, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[11px]">{intern.role}</h3>
                  <p className="text-gray-750 text-[10px]">{intern.company}</p>
                </div>
                <span className="text-[10px] font-semibold font-mono text-gray-600">{intern.period}</span>
              </div>
              <ul className="list-disc list-inside text-[10px] text-gray-700 mt-1 pl-1">
                {intern.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Academic Projects</h2>
        <div className="flex flex-col gap-3">
          {projects.map((proj, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[11px]">{proj.title}</h3>
                  <p className="text-[9px] font-mono text-gray-600">Stack: {proj.technologies.join(', ')}</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-755 mt-1">{proj.description}</p>
              <div className="text-[9.5px] text-gray-600 mt-0.5">
                <strong>Result:</strong> {proj.results}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-800">
          <div>
            <strong className="block border-b border-gray-100 pb-0.5 mb-1 text-[9.5px] text-gray-500 uppercase">Languages & Web</strong>
            Python, Django, FastAPI, SQL, HTML, CSS, JavaScript, React
          </div>
          <div>
            <strong className="block border-b border-gray-100 pb-0.5 mb-1 text-[9.5px] text-gray-500 uppercase">AI & Data Science</strong>
            Prompt Engineering, Machine Learning, Data Preprocessing, Pivot Tables, Chart Analytics
          </div>
          <div>
            <strong className="block border-b border-gray-100 pb-0.5 mb-1 text-[9.5px] text-gray-500 uppercase">Tools & Creative</strong>
            MS Office, Video Editing, Image Editing, AI development systems
          </div>
        </div>
      </div>

      {/* Certifications & Languages */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-[9.5px] text-gray-700 space-y-0.5">
            {certifications.map((cert, idx) => (
              <li key={idx}>
                {cert.name} - <span className="font-semibold text-gray-600">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Languages</h2>
          <p className="text-[10px] text-gray-700">
            English, Telugu, Urdu, Hindi
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintableResume;
