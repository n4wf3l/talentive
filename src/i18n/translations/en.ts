import type { Translations } from '../types';

const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    contact: 'Contact',
  },
  hero: {
    title: 'Recruitment,\ndone right.',
    subtitle:
      'Permanent, contract, and payroll staffing for businesses across Belgium. Tell us who you\'re hiring — we deliver the shortlist.',
    ctaEmployee: 'I\'m hiring',
    ctaJob: 'Find a job',
    scrollDown: 'Our services',
  },
  services: {
    title: 'What we deliver',
    subtitle:
      'Three staffing solutions, one reliable partner. No fluff — just the right people, at the right time.',
    permanent: {
      title: 'Permanent Staffing',
      description:
        'We find the long-term hires your business needs. Full search, selection and onboarding handled — you sign the offer, we handle the rest.',
    },
    contract: {
      title: 'Contract Staffing',
      description:
        'Flexible professionals, deployed fast. Scale your team up or down without the overhead of a permanent hire.',
    },
    payroll: {
      title: 'Payroll / EOR',
      description:
        'You pick the talent, we employ them. Contracts, payroll and compliance — all managed on our side, fully legal.',
    },
  },
  about: {
    title: 'Why Talentive',
    subtitle: 'The recruitment partner you can actually trust.',
    description:
      'Talentive is a Belgian recruitment agency built on one principle: hiring shouldn\'t be painful. We match businesses with the right professionals — permanent, contract, or payrolled — cleanly and quickly.',
    mission:
      'We take the time to understand your role, shortlist only relevant candidates, and stay accountable through placement. No templates, no pressure, no surprises.',
    stats: {
      years: '2',
      yearsLabel: 'Years in the market',
      clients: '30',
      clientsLabel: 'Client companies',
      placements: '150',
      placementsLabel: 'Successful placements',
      satisfaction: '96',
      satisfactionLabel: 'Satisfaction rate',
    },
    values: {
      title: 'Why choose us',
      trust: {
        title: 'Trustworthy',
        description: 'We put our name on every placement. Straightforward communication, fair fees, full transparency.',
      },
      proximity: {
        title: 'Responsive',
        description: 'One dedicated contact who answers fast and actually understands your business.',
      },
      efficiency: {
        title: 'Effective',
        description: 'Qualified candidates on your desk within days — not stacks of irrelevant CVs.',
      },
    },
  },
  contact: {
    title: 'Let\'s talk about your hiring',
    subtitle:
      'Tell us about the role, the team, the timeline. We\'ll come back with qualified candidates — fast.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: 'Brussels, Belgium',
    cta: 'Send us your brief',
    ctaDescription:
      'Whether you have one urgent vacancy or a long-term hiring plan, we\'re ready to help.',
  },
  form: {
    title: 'Tell us who you\'re hiring',
    subtitle:
      'Fill in your hiring brief below. We\'ll respond within 24 hours with suitable candidates.',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    email: 'Email',
    city: 'City / Region',
    jobType: 'Role / Position to fill',
    availability: 'When do you need someone?',
    message: 'Additional details',
    submit: 'Send my brief',
    success: {
      title: 'Brief sent successfully!',
      message:
        'Your hiring brief is in. We\'ll contact you within 24 hours with suitable candidates.',
      back: 'Back to home',
    },
    placeholders: {
      firstName: 'Your first name',
      lastName: 'Your last name',
      phone: '+32 XXX XX XX XX',
      email: 'your@email.com',
      city: 'E.g.: Brussels, Antwerp, Ghent...',
      jobType: 'E.g.: Warehouse operator, Developer, Driver...',
      availability: 'E.g.: Immediately, within 2 weeks...',
      message: 'Anything else we should know...',
    },
    validation: {
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidPhone: 'Invalid phone number',
    },
    toast: {
      validationError: 'Please fill in all required fields correctly.',
      successMessage: 'Your brief has been sent successfully! We\'ll get back to you within 24 hours.',
      errorMessage: 'An error occurred. Please try again.',
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know before hiring with Talentive.',
    q1: 'What types of staffing do you offer?',
    a1: 'Three: Permanent Staffing (direct hires on your payroll), Contract Staffing (flexible professionals for a defined period), and Payroll / EOR (you choose the person, we handle employment and compliance).',
    q2: 'How fast can you deliver candidates?',
    a2: 'Contract and payroll profiles: typically within 24-48 hours. Permanent hires: expect a qualified shortlist within 1-3 weeks depending on the role.',
    q3: 'Which sectors do you recruit for?',
    a3: 'We work across logistics, construction, industry, hospitality, transport, administration, tech, and more. If we\'re not the right fit for your sector, we\'ll tell you upfront.',
    q4: 'How do your fees work?',
    a4: 'Permanent staffing: a one-time success fee based on the placed salary. Contract and payroll: a transparent hourly markup. No placement, no fee. No surprises.',
    q5: 'How does the hiring process start?',
    a5: 'Click "I\'m hiring", fill in the brief, and we\'ll reach out within 24 hours to align on the role and timeline. From there, you get a qualified shortlist fast.',
    q6: 'Do you operate across Belgium?',
    a6: 'Yes — Brussels, Wallonia, and Flanders. We adapt to each region\'s specifics, language, and legal frameworks.',
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
    dataContent: 'We collect data you provide directly: name, email, phone number, city, availability, and any information in your hiring brief or messages. This data is collected through our hiring and contact forms.',
    purposeTitle: 'Purpose of Processing',
    purposeContent: 'Your data is used exclusively to: respond to your hiring brief or contact request, match you with suitable candidates or employers, improve our staffing services, and keep you informed of relevant opportunities.',
    cookiesTitle: 'Cookies',
    cookiesContent: 'Our site uses essential cookies for site functionality (language preference). We do not use advertising or tracking cookies. You can disable cookies at any time in your browser settings.',
    rightsTitle: 'Your Rights',
    rightsContent: 'Under the GDPR, you have the right to access, rectify, delete, restrict processing, and port your data. You can exercise these rights by contacting us at info@talentive.be.',
    contactTitle: 'Contact',
    contactContent: 'For any questions regarding the protection of your data, contact us at info@talentive.be or by mail at our address in Brussels, Belgium.',
  },
  bottomBar: {
    worker: 'I\'m hiring',
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
    step1Desc: 'Click here to send us your hiring brief — we respond within 24 hours.',
    step2Title: 'Looking for a job?',
    step2Desc: 'Browse open positions on our jobs platform.',
    skip: 'Skip',
    next: 'Next',
    done: 'Let\'s go',
  },
  footer: {
    description:
      'Permanent, contract, and payroll staffing for businesses across Belgium.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact',
    legal: 'Privacy Policy',
    rights: '© 2025 Talentive. All rights reserved.',
  },
};

export default en;
