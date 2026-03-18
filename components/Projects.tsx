import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';
import SectionReveal from './SectionReveal';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 dark:text-white uppercase tracking-tighter leading-none">
          MY PROJECTS.
        </h2>
        <div className="h-1.5 w-12 bg-green-500 mx-auto rounded-full" />
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS.map((project, idx) => (
          <SectionReveal key={project.id} delay={idx * 50} className="flex">
            <div className="group bg-white dark:bg-neutral-900/40 rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/5 flex flex-col w-full hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 lg:p-7 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-500/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white uppercase leading-tight tracking-tight mb-6">
                  {project.title}
                </h3>
                
                <div className="mt-auto flex gap-3">
                  <a 
                    href={project.codeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-neutral-200 dark:border-white/10 text-[9px] font-black text-neutral-600 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all uppercase tracking-widest"
                  >
                    <Code size={14} strokeWidth={2.5} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.siteUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-green-500 text-[9px] font-black text-black hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-widest shadow-md shadow-green-500/10"
                  >
                    <ExternalLink size={14} strokeWidth={2.5} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;