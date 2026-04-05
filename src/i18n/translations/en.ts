import type { Translations } from '../types';

const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Our Services',
    about: 'About Us',
    contact: 'Contact',
  },
  hero: {
    title: 'The right talent,\nat the right time.',
    subtitle:
      'Talentive connects businesses and workers with simplicity, professionalism, and efficiency. Find the right person or the right job, fast.',
    ctaEmployee: 'Find a worker',
    ctaJob: 'Find a job',
    scrollDown: 'Discover',
  },
  services: {
    title: 'Our Services',
    subtitle:
      'Recruitment solutions tailored to your needs, with human and professional support at every step.',
    recruitment: {
      title: 'Recruitment',
      description:
        'We identify and select the best profiles for your permanent positions. A rigorous process for lasting results.',
    },
    interim: {
      title: 'Temporary Work',
      description:
        'Qualified workers available quickly for your temporary needs. Flexibility and responsiveness guaranteed.',
    },
    consulting: {
      title: 'HR Consulting',
      description:
        'Personalized support to optimize your human resources strategy and recruitment processes.',
    },
    career: {
      title: 'Career Guidance',
      description:
        'We guide candidates in their job search with tailored advice and personalized follow-up.',
    },
  },
  about: {
    title: 'About Talentive',
    subtitle: 'A team dedicated to your professional success.',
    description:
      'Talentive was born from a simple conviction: the job market works better when the right people are in the right place. We are a staffing agency specializing in recruitment and temporary work, serving businesses and workers across Belgium.',
    mission:
      'Our mission is to create lasting professional connections built on trust, transparency, and mutual respect. Every candidate is unique, every company has specific needs — we take the time to understand both.',
    stats: {
      years: '10',
      yearsLabel: 'Years of experience',
      clients: '500',
      clientsLabel: 'Partner companies',
      placements: '5000',
      placementsLabel: 'Successful placements',
      satisfaction: '98',
      satisfactionLabel: 'Satisfaction rate',
    },
    values: {
      title: 'Our Values',
      trust: {
        title: 'Trust',
        description: 'We build lasting relationships based on honesty and reliability.',
      },
      proximity: {
        title: 'Proximity',
        description: 'Human and personalized contact, at every step of your journey.',
      },
      efficiency: {
        title: 'Efficiency',
        description: 'Concrete results, fast, thanks to our expertise and our network.',
      },
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle:
      'Have a question or want to learn more? Don\'t hesitate to reach out. Our team is here for you.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: 'Brussels, Belgium',
    cta: 'Send us a message',
    ctaDescription:
      'Whether you\'re a business looking for talent or a candidate seeking opportunities, we\'re here to help.',
  },
  form: {
    title: 'Find a Worker',
    subtitle:
      'Describe your needs and we\'ll get back to you quickly with the most suitable profiles.',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    email: 'Email',
    city: 'City / Region',
    jobType: 'Type of work needed',
    availability: 'Availability',
    message: 'Additional message',
    submit: 'Send my request',
    success: {
      title: 'Request sent successfully!',
      message:
        'Thank you for your request. Aizaz will contact you as soon as possible to discuss your needs and suggest the best profiles.',
      back: 'Back to home',
    },
    placeholders: {
      firstName: 'Your first name',
      lastName: 'Your last name',
      phone: '+32 XXX XX XX XX',
      email: 'your@email.com',
      city: 'E.g.: Brussels, Antwerp, Ghent...',
      jobType: 'E.g.: Worker, Warehouse, Driver...',
      availability: 'E.g.: Immediate, In 2 weeks...',
      message: 'Additional information...',
    },
    validation: {
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidPhone: 'Invalid phone number',
    },
    toast: {
      validationError: 'Please fill in all required fields correctly.',
      successMessage: 'Your request has been sent successfully! We will get back to you shortly.',
      errorMessage: 'An error occurred. Please try again.',
    },
  },
  footer: {
    description:
      'Your trusted partner for recruitment and professional staffing in Belgium.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact',
    rights: '© 2025 Talentive. All rights reserved.',
  },
};

export default en;
