
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  codeUrl: string;
  siteUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'education' | 'job';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}
