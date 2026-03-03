import React from 'react';
import { Download, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import SectionReveal from './SectionReveal';

const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
          <SectionReveal className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center space-x-2 py-1 px-3 bg-green-500/10 rounded-full border border-green-500/20">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <h2 className="text-[10px] font-bold tracking-[0.2em] text-green-500 uppercase">Available for Work</h2>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white leading-[1.1] uppercase break-words">
              DHANUSH <span className="text-green-500">M.</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
              I'm <span className="text-red-500">Freelancer.</span>
            </p>

            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed tracking-wide">
              A specialized Full Stack Developer building high-performance web and mobile experiences. Turning complex problems into elegant digital solutions with over 4 years of expertise.
            </p>
          </SectionReveal>

          <SectionReveal delay={200} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="flex items-center space-x-2 bg-green-500 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-black px-8 py-3 rounded-lg font-black transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-green-500/20 uppercase tracking-widest text-[10px] sm:text-[11px]">
              <Download size={16} strokeWidth={2.5} />
              <span>Download CV</span>
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="flex items-center space-x-2 border-2 border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:border-green-500 hover:text-green-500 px-8 py-3 rounded-lg font-black transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-[10px] sm:text-[11px]"
            >
              <Mail size={16} strokeWidth={2.5} />
              <span>Contact Me</span>
            </button>
          </SectionReveal>

          <SectionReveal delay={400} className="flex justify-center lg:justify-start items-center space-x-5 pt-6 border-t border-neutral-100 dark:border-white/5">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                className="text-neutral-400 hover:text-green-500 transition-all transform hover:-translate-y-1"
                aria-label={social.name}
              >
                {React.cloneElement(social.icon as React.ReactElement<any>, { size: 20 })}
              </a>
            ))}
          </SectionReveal>
        </div>

        {/* Hero Image */}
        <SectionReveal delay={300} className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[4px] border-l-[4px] border-green-500/20 group-hover:border-green-500 transition-colors duration-500" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[4px] border-r-[4px] border-green-500/20 group-hover:border-green-500 transition-colors duration-500" />
            
            {/* Reduced Dimensions: w-[250px] sm:w-[280px] lg:w-[340px] */}
            <div className="relative w-[250px] h-[315px] sm:w-[280px] sm:h-[350px] lg:w-[340px] lg:h-[425px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/5 aspect-[4/5]">
              <img 
                src="../images/hero.jpg" 
                alt="Dhanush M" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-xl border border-white/10 shadow-lg backdrop-blur-md">
                <span className="text-[9px] text-green-500 uppercase font-black tracking-widest block mb-0.5">Experience</span>
                <span className="text-base font-black text-white leading-none">4+ Years</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Hero;