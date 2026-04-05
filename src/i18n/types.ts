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
    recruitment: { title: string; description: string };
    interim: { title: string; description: string };
    consulting: { title: string; description: string };
    career: { title: string; description: string };
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
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    addressValue: string;
    cta: string;
    ctaDescription: string;
  };
  form: {
    title: string;
    subtitle: string;
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
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    rights: string;
  };
}
