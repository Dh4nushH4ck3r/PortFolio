import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 border-t border-neutral-200 dark:border-white/5 text-center bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-2 flex flex-col items-center">
            <h2 className="text-lg font-black tracking-tighter text-neutral-900 dark:text-white uppercase mb-1">
              DHANUSH<span className="text-green-500 ml-0.5">M.</span>
            </h2>
            <div className="h-0.5 w-8 bg-green-500 rounded-full" />
        </div>

        <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-black opacity-60">
          &copy; {currentYear} <span className="text-neutral-900 dark:text-white mx-1">DHANUSH M</span> ALL RIGHTS RESERVED
        </p>
        
        <p className="mt-1.5 text-[9px] text-neutral-400 font-medium">
          Built with Passion, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;