import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionReveal from './components/SectionReveal';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-neutral-900 dark:text-white selection:bg-green-500 selection:text-black transition-colors duration-300 overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Header />
        
        <main className="w-full pt-[80px]"> 
          {/* Home Section - Kept min-h for impact */}
          <section id="home" className="scroll-mt-[80px] min-h-[calc(100vh-80px)] w-full flex items-center justify-center py-10 lg:py-0 relative overflow-hidden">
            <Hero />
          </section>
          
          {/* About Section */}
          <section id="about" className="scroll-mt-[80px] w-full flex items-center py-12 lg:py-20">
            <SectionReveal className="w-full">
              <About />
            </SectionReveal>
          </section>
          
          {/* Services Section */}
          <section id="services" className="scroll-mt-[80px] w-full flex items-center bg-neutral-100/30 dark:bg-neutral-900/30 py-12 lg:py-20">
            <SectionReveal className="w-full">
              <Services />
            </SectionReveal>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="scroll-mt-[80px] w-full flex items-center py-12 lg:py-20">
            <SectionReveal className="w-full">
              <Experience />
            </SectionReveal>
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="scroll-mt-[80px] w-full flex items-center bg-neutral-100/30 dark:bg-neutral-900/30 py-12 lg:py-20">
            <SectionReveal className="w-full">
              <Projects />
            </SectionReveal>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="scroll-mt-[80px] w-full flex items-center py-12 lg:py-20">
            <SectionReveal className="w-full">
              <Testimonials />
            </SectionReveal>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="scroll-mt-[80px] min-h-[70vh] w-full flex items-center py-12 lg:py-20">
            <SectionReveal className="w-full">
              <Contact />
            </SectionReveal>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;