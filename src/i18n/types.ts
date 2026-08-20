export interface Translations {
  meta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    findEmployee: { title: string; description: string };
    findJob: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    privacy: { title: string; description: string };
  };
  breadcrumb: {
    home: string;
    services: string;
    findEmployee: string;
    findJob: string;
    about: string;
    contact: string;
    privacy: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaEmployee: string;
    ctaJob: string;
    scrollDown: string;
    badges: {
      reach: string;
      vetted: string;
      security: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroEyebrow: string;
    heroTitleLead: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    deliverEyebrow: string;
    deliverTitle: string;
    deliverSubtitle: string;
    learnMore: string;
    processEyebrow: string;
    processTitle: string;
    processSubtitle: string;
    permanent: {
      title: string;
      description: string;
      bullets: [string, string, string, string];
    };
    contract: {
      title: string;
      description: string;
      bullets: [string, string, string, string];
    };
    payroll: {
      title: string;
      description: string;
      bullets: [string, string, string, string];
    };
    process: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
      step5: { title: string; description: string };
    };
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    heroEyebrow: string;
    heroTitleLead: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    learnMoreCta: string;
    chooseUs: {
      title: string;
      cards: {
        trustworthy: { title: string; description: string };
        responsive: { title: string; description: string };
        quality: { title: string; description: string };
        longterm: { title: string; description: string };
      };
    };
    bottom: {
      title: string;
      features: {
        global: string;
        industry: string;
        communication: string;
        clientFocused: string;
      };
    };
    benefits: {
      expertise: string;
      placements: string;
      tailored: string;
      results: string;
    };
    stats: {
      years: string;
      yearsLabel: string;
      clients: string;
      clientsLabel: string;
      placements: string;
      placementsLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
    };
    values: {
      title: string;
      readMore: string;
      trust: { title: string; description: string; details: string };
      proximity: { title: string; description: string; details: string };
      efficiency: { title: string; description: string; details: string };
    };
    team: {
      eyebrow: string;
      titleLead: string;
      titleAccent: string;
      title: string;
      subtitle: string;
      readMore: string;
      viewAll: string;
      available: string;
      languages: string;
      members: {
        founder: { role: string; bio: string };
        partner: { role: string; bio: string };
        consultant: { role: string; bio: string };
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    addressVenue: string;
    addressValue: string;
    cta: string;
    ctaDescription: string;
    getInTouch: string;
  };
  form: {
    title: string;
    subtitle: string;
    viewFullPage: string;
    steps: {
      yourDetails: string;
      roleDetails: string;
      additionalInfo: string;
    };
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    jobType: string;
    availability: string;
    message: string;
    submit: string;
    success: { title: string; message: string; back: string };
    placeholders: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      city: string;
      jobType: string;
      availability: string;
      message: string;
    };
    validation: {
      required: string;
      invalidEmail: string;
      invalidPhone: string;
    };
    toast: {
      validationError: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  findEmployee: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    whyTitle: string;
    benefits: {
      fast: { title: string; description: string };
      vetted: { title: string; description: string };
      results: { title: string; description: string };
    };
    trustedBy: string;
  };
  findJob: {
    title: string;
    subtitle: string;
    viewFullPage: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    desiredRole: string;
    availability: string;
    availabilityOptions: {
      now: string;
      week: string;
      month: string;
      later: string;
    };
    cv: string;
    cvHint: string;
    cvSelect: string;
    cvNoFile: string;
    cvReminder: string;
    cvLimitReached: string;
    message: string;
    submit: string;
    success: { title: string; message: string; back: string };
    placeholders: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      city: string;
      desiredRole: string;
      availability: string;
      message: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string; a1: string;
    q2: string; a2: string;
    q3: string; a3: string;
    q4: string; a4: string;
    q5: string; a5: string;
    q6: string; a6: string;
  };
  contactForm: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
  };
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    intro: string;
    dataTitle: string;
    dataContent: string;
    purposeTitle: string;
    purposeContent: string;
    cookiesTitle: string;
    cookiesContent: string;
    rightsTitle: string;
    rightsContent: string;
    contactTitle: string;
    contactContent: string;
  };
  bottomBar: {
    worker: string;
    job: string;
    quickContact: string;
  };
  quickContact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
  tutorial: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    skip: string;
    next: string;
    done: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    legal: string;
    rights: string;
  };
}
