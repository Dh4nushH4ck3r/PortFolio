import React, { useState, useEffect } from 'react';
import { Quote, Loader2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import SectionReveal from './SectionReveal';

const Testimonials: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setData(TESTIMONIALS);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionReveal className="text-center mb-10 lg:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 dark:text-white uppercase tracking-tighter leading-none">
          KIND WORDS.
        </h2>
        <div className="h-1.5 w-12 bg-green-500 mx-auto rounded-full" />
      </SectionReveal>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-3">
          <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 animate-pulse">
            Fetching reviews...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {data.map((t, idx) => (
            <SectionReveal key={t.id} delay={idx * 150}>
              <div className="group p-6 md:p-8 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-white/5 rounded-[24px] transition-all duration-500 hover:border-green-500/20 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 blur-2xl rounded-full" />
                
                <div className="text-green-500/40 mb-6 transition-transform group-hover:scale-110 duration-500">
                  <Quote size={24} fill="currentColor" />
                </div>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-300 italic leading-relaxed mb-8 flex-grow relative z-10 tracking-wide">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500/30 group-hover:border-green-500 transition-colors duration-500">
                    <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-neutral-900 dark:text-white text-sm tracking-tight">{t.name}</h4>
                    <p className="text-[9px] text-green-500 uppercase font-black tracking-[0.2em]">{t.role}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;