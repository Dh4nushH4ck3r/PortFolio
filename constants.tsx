
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram
} from 'lucide-react';
import { Service, Project, Experience, Testimonial } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: <Github size={18} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={18} /> },
  { name: 'YouTube', url: 'https://youtube.com', icon: <Youtube size={18} /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram size={18} /> },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Specializing in high-performance web applications using modern technologies like React and Node.js.',
    icon: 'Layout',
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Building cross-platform mobile experiences with clean architecture and smooth interactions.',
    icon: 'Smartphone',
  },
  {
    id: '3',
    title: 'UI Design',
    description: 'Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience.',
    icon: 'PenTool',
  },
  {
    id: '4',
    title: 'Ethical Hacking',
    description: 'Providing security assessments and vulnerability research to ensure digital asset safety.',
    icon: 'Shield',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce UI Concept',
    category: 'UI Design',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    codeUrl: '#',
    siteUrl: '#',
  },
  {
    id: '2',
    title: 'Health Tracking App',
    category: 'Mobile App',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    codeUrl: '#',
    siteUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Dashboard',
    category: 'Web Dev',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    codeUrl: '#',
    siteUrl: '#',
  },
];

export const EDUCATION_DATA: Experience[] = [
  {
    id: 'edu-1',
    title: 'Bachelor of Science',
    organization: 'Bharathiar University',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Jan 2020 - Dec 2023',
    type: 'education',
  },
  {
    id: 'edu-2',
    title: 'Higher Secondary',
    organization: 'State Board',
    location: 'Tripur, Tamil Nadu',
    period: 'Aug 2018 - Dec 2019',
    type: 'education',
  },
];

export const JOBS_DATA: Experience[] = [
  {
    id: 'job-1',
    title: 'IT Assistant',
    organization: 'Tech Solutions Inc.',
    location: 'Tripur, India',
    period: 'Oct 2021 - Jan 2022',
    type: 'job',
  },
  {
    id: 'job-2',
    title: 'Front-end Developer Intern',
    organization: 'Creative Agency',
    location: 'Remote',
    period: 'Aug 2020 - Aug 2021',
    type: 'job',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Startup Founder',
    quote: "Dhanush is exceptionally skilled. He delivered our landing page with React and Tailwind perfectly on time.",
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Project Lead',
    quote: "His technical grasp and professional approach are impressive. Highly recommended for any dev project.",
    avatarUrl: 'https://i.pravatar.cc/150?u=michael'
  }
];
