import React from 'react';
import { Layout, Smartphone, PenTool, Shield, HelpCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import SectionReveal from './SectionReveal';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Smartphone,
  PenTool,
  Shield,
};

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal className="text-center mb-10 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 dark:text-white uppercase tracking-tighter leading-none">
          SERVICES.
        </h2>
        <div className="h-1.5 w-12 bg-green-500 mx-auto rounded-full mb-4" />
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-medium leading-relaxed tracking-wide">
          Crafting modern digital products with a focus on performance, scalability, and user experience.
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => {
          const Icon = iconMap[service.icon] || HelpCircle;
          
          return (
            <SectionReveal key={service.id} delay={idx * 100}>
              <div 
                className="group p-6 sm:p-8 bg-white dark:bg-neutral-900/40 border border-neutral-100 dark:border-white/5 rounded-2xl hover:border-green-500/50 transition-all duration-500 flex flex-col h-full items-center text-center relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                   <Icon size={90} strokeWidth={1} />
                </div>

                <div className="w-11 h-11 bg-neutral-50 dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-base font-black text-neutral-900 dark:text-white mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </div>
  );
};

export default Services;