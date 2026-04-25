export interface Translations {
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
  };
  services: {
    title: string;
    subtitle: string;
    permanent: { title: string; description: string };
    contract: { title: string; description: string };
    payroll: { title: string; description: string };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
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
      trust: { title: string; description: string };
      proximity: { title: string; description: string };
      efficiency: { title: string; description: string };
    };
    team: {
      title: string;
      subtitle: string;
      readMore: string;
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
  };
  form: {
    title: string;
    subtitle: string;
    viewFullPage: string;
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
