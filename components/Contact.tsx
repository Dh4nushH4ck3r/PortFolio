import React, { useState } from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 space-y-8 lg:space-y-10">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase dark:text-white leading-none">
              GET IN <span className="text-green-500">TOUCH.</span>
            </h2>
            <div className="h-1.5 w-12 bg-green-500 mx-auto lg:mx-0 rounded-full" />
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-medium max-w-sm mx-auto lg:mx-0 leading-relaxed tracking-wide">
              I'm currently accepting new projects and would love to hear about your ideas. Let's create something extraordinary together.
            </p>
          </div>

          <div className="space-y-3.5 max-w-md mx-auto lg:mx-0">
            {[
              { icon: Phone, label: 'Call Me', value: '+91 123-456-7890' },
              { icon: Mail, label: 'Email Me', value: 'dhanush.dev@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Tripur, Tamil Nadu' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl border border-neutral-100 dark:border-white/5 bg-white dark:bg-neutral-900/40 hover:border-green-500/20 transition-all duration-300 flex items-center space-x-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-white/10 flex items-center justify-center text-green-500">
                  <item.icon size={19} />
                </div>
                <div>
                  <span className="text-[8px] text-neutral-400 uppercase font-black tracking-widest block mb-0.5">{item.label}</span>
                  <span className="text-neutral-900 dark:text-white font-black text-sm tracking-tight">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900/40 p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200 dark:border-white/10 space-y-6 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-neutral-500 uppercase tracking-widest ml-1">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Dhanush"
                  className="w-full bg-neutral-50 dark:bg-black/50 border-2 border-neutral-100 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-green-500 outline-none transition-all font-bold placeholder:text-neutral-500/30"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-neutral-500 uppercase tracking-widest ml-1">Last Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="M"
                  className="w-full bg-neutral-50 dark:bg-black/50 border-2 border-neutral-100 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-green-500 outline-none transition-all font-bold placeholder:text-neutral-500/30"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="hello@example.com"
                className="w-full bg-neutral-50 dark:bg-black/50 border-2 border-neutral-100 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-green-500 outline-none transition-all font-bold placeholder:text-neutral-500/30"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-neutral-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-neutral-50 dark:bg-black/50 border-2 border-neutral-100 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-green-500 outline-none transition-all font-bold resize-none placeholder:text-neutral-500/30"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-green-500 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-black px-8 py-3 rounded-lg font-black flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-green-500/20 uppercase tracking-widest text-[10px] sm:text-[11px]"
            >
              <span>Send Message</span>
              <Send size={15} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;