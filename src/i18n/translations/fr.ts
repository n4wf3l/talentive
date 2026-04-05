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
      years: '2',
      yearsLabel: 'Années d\'expérience',
      clients: '30',
      clientsLabel: 'Entreprises partenaires',
      placements: '150',
      placementsLabel: 'Placements réussis',
      satisfaction: '96',
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
  faq: {
    title: 'Questions Fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur nos services de recrutement et d\'intérim.',
    q1: 'Comment fonctionne le processus de recrutement ?',
    a1: 'Nous commençons par une analyse approfondie de vos besoins, puis nous recherchons dans notre base de données et notre réseau les profils les plus adaptés. Après une présélection rigoureuse, nous vous présentons les meilleurs candidats.',
    q2: 'Quels sont les délais pour trouver un candidat ?',
    a2: 'Pour le travail intérimaire, nous pouvons proposer des candidats sous 24 à 48 heures. Pour le recrutement permanent, comptez en moyenne 2 à 4 semaines selon la complexité du profil recherché.',
    q3: 'Quels secteurs couvrez-vous ?',
    a3: 'Nous couvrons un large éventail de secteurs : logistique, construction, industrie, horeca, transport, administration, et bien d\'autres. N\'hésitez pas à nous contacter pour vos besoins spécifiques.',
    q4: 'Quels sont vos tarifs ?',
    a4: 'Nos tarifs varient en fonction du type de service (intérim, recrutement, conseil RH) et de la complexité de la mission. Contactez-nous pour recevoir un devis personnalisé et transparent.',
    q5: 'Comment puis-je postuler en tant que candidat ?',
    a5: 'Rendez-vous sur notre page "Chercher un emploi" pour consulter nos offres disponibles. Vous pouvez également nous envoyer votre CV directement par email à info@talentive.be.',
    q6: 'Travaillez-vous dans toute la Belgique ?',
    a6: 'Oui, nous opérons sur l\'ensemble du territoire belge, avec une forte présence à Bruxelles, en Wallonie et en Flandre. Nous adaptons nos services aux spécificités de chaque région.',
  },
  contactForm: {
    title: 'Envoyez-nous un message',
    name: 'Nom complet',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours...',
    success: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    placeholders: {
      name: 'Votre nom complet',
      email: 'votre@email.com',
      subject: 'Comment pouvons-nous vous aider ?',
      message: 'Décrivez votre demande...',
    },
  },
  privacy: {
    title: 'Politique de Confidentialité',
    subtitle: 'Comment nous protégeons vos données personnelles.',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    intro: 'Chez Talentive, nous prenons la protection de vos données personnelles très au sérieux. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).',
    dataTitle: 'Données collectées',
    dataContent: 'Nous collectons les données que vous nous fournissez directement : nom, prénom, adresse email, numéro de téléphone, ville, disponibilité et toute information incluse dans vos messages. Ces données sont collectées via nos formulaires de contact et de recherche d\'emploi.',
    purposeTitle: 'Finalité du traitement',
    purposeContent: 'Vos données sont utilisées exclusivement pour : répondre à vos demandes de contact, vous mettre en relation avec des employeurs ou candidats potentiels, améliorer nos services de recrutement et vous tenir informé de nos opportunités professionnelles.',
    cookiesTitle: 'Cookies',
    cookiesContent: 'Notre site utilise des cookies essentiels au fonctionnement du site (préférence de langue). Nous n\'utilisons pas de cookies de suivi publicitaire. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.',
    rightsTitle: 'Vos droits',
    rightsContent: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression, de limitation du traitement et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à info@talentive.be.',
    contactTitle: 'Contact',
    contactContent: 'Pour toute question relative à la protection de vos données, contactez-nous à info@talentive.be ou par courrier à notre adresse à Bruxelles, Belgique.',
  },
  bottomBar: {
    worker: 'Chercher un travailleur',
    job: 'Chercher un emploi',
    quickContact: 'Contact rapide',
  },
  quickContact: {
    title: 'Contact Rapide',
    subtitle: 'Envoyez-nous un court message et nous vous recontacterons rapidement.',
    name: 'Votre nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi...',
    success: 'Message envoyé ! Nous vous recontacterons rapidement.',
    placeholders: {
      name: 'Votre nom complet',
      email: 'votre@email.com',
      message: 'Comment pouvons-nous vous aider ?',
    },
  },
  tutorial: {
    step1Title: 'Vous recrutez ?',
    step1Desc: 'Trouvez rapidement le travailleur ideal pour votre entreprise.',
    step2Title: 'Vous cherchez un emploi ?',
    step2Desc: 'Parcourez nos offres et trouvez le poste qui vous correspond.',
    skip: 'Passer',
    next: 'Suivant',
    done: 'C\'est parti',
  },
  footer: {
    description:
      'Votre partenaire de confiance pour le recrutement et la mise en relation professionnelle en Belgique.',
    quickLinks: 'Liens Rapides',
    contactInfo: 'Contact',
    legal: 'Politique de confidentialité',
    rights: '© 2025 Talentive. Tous droits réservés.',
  },
};

export default fr;
