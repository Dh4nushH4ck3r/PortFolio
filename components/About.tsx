import React from 'react';

const About: React.FC = () => {
  const skills = [
    { title: 'Landing Pages', skills: ['React', 'Tailwind', 'HTML/CSS'] },
    { title: 'Bots', skills: ['Python', 'Node.js', 'API Integration'] },
    { title: 'E-commerce', skills: ['MERN Stack', 'Redux', 'Stripe'] },
    { title: 'Apps', skills: ['React Native', 'Firebase'] },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-green-500/20 group-hover:border-green-500 transition-colors duration-500" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-green-500/20 group-hover:border-green-500 transition-colors duration-500" />
            
            {/* Reduced Dimensions: w-[250px] sm:w-[280px] lg:w-[340px] */}
            <div className="relative w-[250px] h-[315px] sm:w-[280px] sm:h-[350px] lg:w-[340px] lg:h-[425px] rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="../images/about.png" 
                alt="About Dhanush" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter leading-none">
              ABOUT <span className="text-green-500">ME.</span>
            </h2>
            <div className="h-1.5 w-12 bg-green-500 mx-auto lg:mx-0 rounded-full" />
            <p className="text-lg font-black text-neutral-700 dark:text-neutral-300">Dhanush M • 20 Years Old</p>
          </div>

          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed tracking-wide">
            I'm a Full Stack Developer with over 4 years of experience crafting high-quality web and mobile applications. Based in Tripur, I specialize in the modern MERN stack and Python. My goal is to build digital products that offer seamless user experiences and robust functionality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((cat) => (
              <div key={cat.title} className="space-y-3">
                <h4 className="text-neutral-900 dark:text-white font-black uppercase text-[10px] tracking-widest border-l-4 border-green-500 pl-3">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[10px] px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-black uppercase tracking-widest border border-neutral-200 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
