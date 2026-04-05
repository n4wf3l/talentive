import type { Translations } from '../types';

const fr: Translations = {
  nav: {
    home: 'Accueil',
    services: 'Nos Services',
    about: 'À Propos',
    contact: 'Contact',
  },
  hero: {
    title: 'Le talent au bon endroit,\nau bon moment.',
    subtitle:
      'Talentive met en relation les entreprises et les travailleurs avec simplicité, professionnalisme et efficacité. Trouvez la bonne personne ou le bon emploi, rapidement.',
    ctaEmployee: 'Chercher un travailleur',
    ctaJob: 'Chercher un emploi',
    scrollDown: 'Découvrir',
  },
  services: {
    title: 'Nos Services',
    subtitle:
      'Des solutions de recrutement adaptées à vos besoins, avec un accompagnement humain et professionnel à chaque étape.',
    recruitment: {
      title: 'Recrutement',
      description:
        'Nous identifions et sélectionnons les meilleurs profils pour vos postes permanents. Un processus rigoureux pour des résultats durables.',
    },
    interim: {
      title: 'Travail Intérimaire',
      description:
        'Des travailleurs qualifiés disponibles rapidement pour vos besoins temporaires. Flexibilité et réactivité garanties.',
    },
    consulting: {
      title: 'Conseil RH',
      description:
        'Un accompagnement personnalisé pour optimiser votre stratégie de ressources humaines et vos processus de recrutement.',
    },
    career: {
      title: 'Accompagnement Carrière',
      description:
        'Nous guidons les candidats dans leur recherche d\'emploi avec des conseils adaptés et un suivi personnalisé.',
    },
  },
  about: {
    title: 'À Propos de Talentive',
    subtitle: 'Une équipe dédiée à votre réussite professionnelle.',
    description:
      'Talentive est née d\'une conviction simple : le monde du travail fonctionne mieux quand les bonnes personnes sont au bon endroit. Nous sommes une société de mise en relation spécialisée dans le recrutement et le travail intérimaire, au service des entreprises et des travailleurs en Belgique.',
    mission:
      'Notre mission est de créer des connexions professionnelles durables, fondées sur la confiance, la transparence et le respect mutuel. Chaque candidat est unique, chaque entreprise a ses besoins spécifiques — nous prenons le temps de comprendre les deux.',
    stats: {
      years: '10',
      yearsLabel: 'Années d\'expérience',
      clients: '500',
      clientsLabel: 'Entreprises partenaires',
      placements: '5000',
      placementsLabel: 'Placements réussis',
      satisfaction: '98',
      satisfactionLabel: 'Taux de satisfaction',
    },
    values: {
      title: 'Nos Valeurs',
      trust: {
        title: 'Confiance',
        description: 'Nous construisons des relations durables basées sur l\'honnêteté et la fiabilité.',
      },
      proximity: {
        title: 'Proximité',
        description: 'Un contact humain et personnalisé, à chaque étape de votre parcours.',
      },
      efficiency: {
        title: 'Efficacité',
        description: 'Des résultats concrets, rapidement, grâce à notre expertise et notre réseau.',
      },
    },
  },
  contact: {
    title: 'Contactez-nous',
    subtitle:
      'Vous avez une question ou souhaitez en savoir plus ? N\'hésitez pas à nous contacter. Notre équipe est à votre disposition.',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    addressValue: 'Bruxelles, Belgique',
    cta: 'Envoyez-nous un message',
    ctaDescription:
      'Que vous soyez une entreprise à la recherche de talents ou un candidat en quête d\'opportunités, nous sommes là pour vous aider.',
  },
  form: {
    title: 'Trouver un Travailleur',
    subtitle:
      'Décrivez-nous vos besoins et nous vous recontacterons rapidement avec les profils les plus adaptés.',
    firstName: 'Prénom',
    lastName: 'Nom',
    phone: 'Téléphone',
    email: 'Email',
    city: 'Ville / Région',
    jobType: 'Type de travail recherché',
    availability: 'Disponibilité',
    message: 'Message complémentaire',
    submit: 'Envoyer ma demande',
    success: {
      title: 'Demande envoyée avec succès !',
      message:
        'Merci pour votre demande. Aizaz vous recontactera dans les plus brefs délais pour discuter de vos besoins et vous proposer les meilleurs profils.',
      back: 'Retour à l\'accueil',
    },
    placeholders: {
      firstName: 'Votre prénom',
      lastName: 'Votre nom',
      phone: '+32 XXX XX XX XX',
      email: 'votre@email.com',
      city: 'Ex : Bruxelles, Anvers, Liège...',
      jobType: 'Ex : Ouvrier, Magasinier, Chauffeur...',
      availability: 'Ex : Immédiate, Dans 2 semaines...',
      message: 'Informations supplémentaires...',
    },
    validation: {
      required: 'Ce champ est requis',
      invalidEmail: 'Adresse email invalide',
      invalidPhone: 'Numéro de téléphone invalide',
    },
    toast: {
      validationError: 'Veuillez remplir tous les champs obligatoires correctement.',
      successMessage: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement.',
      errorMessage: 'Une erreur est survenue. Veuillez réessayer.',
    },
  },
  footer: {
    description:
      'Votre partenaire de confiance pour le recrutement et la mise en relation professionnelle en Belgique.',
    quickLinks: 'Liens Rapides',
    contactInfo: 'Contact',
    rights: '© 2025 Talentive. Tous droits réservés.',
  },
};

export default fr;
