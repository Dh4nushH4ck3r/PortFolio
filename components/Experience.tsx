import React from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { EDUCATION_DATA, JOBS_DATA } from '../constants';
import { Experience as ExpType } from '../types';
import SectionReveal from './SectionReveal';

const ExperienceItem: React.FC<{ item: ExpType }> = ({ item }) => (
  <div className="relative pl-8 pb-8 last:pb-0 group">
    <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800 group-last:bottom-4 transition-colors" />
    <div className="absolute left-[-2px] top-1 w-3 h-3 rounded-full bg-white dark:bg-black border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-green-500 transition-all z-10" />
    
    <div className="bg-white dark:bg-neutral-900/20 border border-neutral-100 dark:border-white/5 p-5 sm:p-6 rounded-2xl hover:border-green-500/20 transition-all duration-300 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <h4 className="text-sm sm:text-base font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          {item.title}
        </h4>
        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[8px] sm:text-[9px] font-black uppercase tracking-widest border border-green-500/20">
          <Calendar size={10} className="mr-1.5" />
          {item.period}
        </div>
      </div>
      
      <p className="text-sm font-bold text-green-600 dark:text-green-500 mb-2">{item.organization}</p>
      
      <div className="flex items-center text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
        <MapPin size={12} className="mr-1.5 text-neutral-400" />
        {item.location}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal className="text-center mb-10 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 dark:text-white uppercase tracking-tighter leading-none">
          JOURNEY.
        </h2>
        <div className="h-1.5 w-12 bg-green-500 mx-auto rounded-full" />
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <SectionReveal className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/10 rounded-xl flex items-center justify-center text-green-500">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight dark:text-white">Education</h2>
          </div>
          <div className="space-y-0">
            {EDUCATION_DATA.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={200} className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/10 rounded-xl flex items-center justify-center text-green-500">
              <Briefcase size={22} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight dark:text-white">Work History</h2>
          </div>
          <div className="space-y-0">
            {JOBS_DATA.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Experience;