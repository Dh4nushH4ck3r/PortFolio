import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 h-[80px] flex items-center px-4 md:px-8 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 shadow-sm' 
            : 'bg-white dark:bg-black lg:bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center h-full">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group text-[20px] md:text-[22px] font-black tracking-tighter text-neutral-900 dark:text-white relative z-[1001] transition-transform hover:scale-105 uppercase"
          >
            DHANUSH<span className="text-green-500 ml-0.5 group-hover:text-red-500 transition-colors">M.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-2 text-[10px] xl:text-[11px] font-bold text-neutral-600 dark:text-neutral-400 hover:text-green-500 transition-all uppercase tracking-[0.2em] group overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                  {link.name}
                </span>
                <span className="absolute top-full left-0 z-10 transition-transform duration-300 group-hover:-translate-y-full block text-green-500">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-green-500 text-black px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform active:scale-95 shadow-lg shadow-green-500/20"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-neutral-900 dark:text-white relative z-[1001] p-2 hover:text-green-500 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-black z-[1000] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 px-6 w-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-2xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white hover:text-green-500 transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`mt-8 bg-green-500 text-black px-8 py-3 rounded-lg text-base font-black uppercase tracking-widest transition-all transform active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Start Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;