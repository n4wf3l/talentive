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
      years: '2',
      yearsLabel: 'Years of experience',
      clients: '30',
      clientsLabel: 'Partner companies',
      placements: '150',
      placementsLabel: 'Successful placements',
      satisfaction: '96',
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
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our recruitment and staffing services.',
    q1: 'How does the recruitment process work?',
    a1: 'We start with a thorough analysis of your needs, then search our database and network for the most suitable profiles. After a rigorous pre-selection, we present you with the best candidates.',
    q2: 'How long does it take to find a candidate?',
    a2: 'For temporary work, we can propose candidates within 24 to 48 hours. For permanent recruitment, expect an average of 2 to 4 weeks depending on the complexity of the profile sought.',
    q3: 'What sectors do you cover?',
    a3: 'We cover a wide range of sectors: logistics, construction, industry, hospitality, transport, administration, and many more. Don\'t hesitate to contact us for your specific needs.',
    q4: 'What are your rates?',
    a4: 'Our rates vary depending on the type of service (temporary work, recruitment, HR consulting) and the complexity of the assignment. Contact us for a personalized and transparent quote.',
    q5: 'How can I apply as a candidate?',
    a5: 'Visit our "Find a Job" page to browse available positions. You can also send us your CV directly by email at info@talentive.be.',
    q6: 'Do you operate across all of Belgium?',
    a6: 'Yes, we operate throughout Belgium, with a strong presence in Brussels, Wallonia and Flanders. We adapt our services to the specificities of each region.',
  },
  contactForm: {
    title: 'Send us a message',
    name: 'Full name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending...',
    success: 'Your message has been sent successfully! We will get back to you as soon as possible.',
    placeholders: {
      name: 'Your full name',
      email: 'your@email.com',
      subject: 'How can we help you?',
      message: 'Describe your request...',
    },
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we protect your personal data.',
    lastUpdated: 'Last updated: April 2026',
    intro: 'At Talentive, we take the protection of your personal data very seriously. This privacy policy describes how we collect, use, and protect your information in accordance with the General Data Protection Regulation (GDPR).',
    dataTitle: 'Data Collected',
    dataContent: 'We collect data that you provide directly: name, email address, phone number, city, availability, and any information included in your messages. This data is collected through our contact and job search forms.',
    purposeTitle: 'Purpose of Processing',
    purposeContent: 'Your data is used exclusively to: respond to your contact requests, connect you with potential employers or candidates, improve our recruitment services, and keep you informed of professional opportunities.',
    cookiesTitle: 'Cookies',
    cookiesContent: 'Our site uses essential cookies for site functionality (language preference). We do not use advertising tracking cookies. You can disable cookies at any time in your browser settings.',
    rightsTitle: 'Your Rights',
    rightsContent: 'Under the GDPR, you have the right to access, rectify, delete, restrict processing, and port your data. You can exercise these rights by contacting us at info@talentive.be.',
    contactTitle: 'Contact',
    contactContent: 'For any questions regarding the protection of your data, contact us at info@talentive.be or by mail at our address in Brussels, Belgium.',
  },
  bottomBar: {
    worker: 'Find a worker',
    job: 'Find a job',
    quickContact: 'Quick contact',
  },
  quickContact: {
    title: 'Quick Contact',
    subtitle: 'Send us a short message and we\'ll get back to you as soon as possible.',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    success: 'Message sent! We\'ll get back to you shortly.',
    placeholders: {
      name: 'Your full name',
      email: 'your@email.com',
      message: 'How can we help you?',
    },
  },
  tutorial: {
    step1Title: 'Looking to hire?',
    step1Desc: 'Quickly find the right worker for your company.',
    step2Title: 'Looking for a job?',
    step2Desc: 'Browse our offers and find the position that suits you.',
    skip: 'Skip',
    next: 'Next',
    done: 'Let\'s go',
  },
  footer: {
    description:
      'Your trusted partner for recruitment and professional staffing in Belgium.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact',
    legal: 'Privacy Policy',
    rights: '© 2025 Talentive. All rights reserved.',
  },
};

export default en;
