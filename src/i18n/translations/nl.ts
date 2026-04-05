import type { Translations } from '../types';

const nl: Translations = {
  nav: {
    home: 'Home',
    services: 'Onze Diensten',
    about: 'Over Ons',
    contact: 'Contact',
  },
  hero: {
    title: 'Het juiste talent,\nop het juiste moment.',
    subtitle:
      'Talentive verbindt bedrijven en werknemers met eenvoud, professionaliteit en efficiëntie. Vind de juiste persoon of de juiste baan, snel.',
    ctaEmployee: 'Zoek een werknemer',
    ctaJob: 'Zoek een werk',
    scrollDown: 'Ontdek meer',
  },
  services: {
    title: 'Onze Diensten',
    subtitle:
      'Rekruteringsoplossingen op maat van uw behoeften, met menselijke en professionele begeleiding bij elke stap.',
    recruitment: {
      title: 'Rekrutering',
      description:
        'Wij identificeren en selecteren de beste profielen voor uw vaste functies. Een grondig proces voor duurzame resultaten.',
    },
    interim: {
      title: 'Uitzendwerk',
      description:
        'Gekwalificeerde werknemers snel beschikbaar voor uw tijdelijke behoeften. Flexibiliteit en reactiesnelheid gegarandeerd.',
    },
    consulting: {
      title: 'HR-Advies',
      description:
        'Persoonlijke begeleiding om uw HR-strategie en rekruteringsprocessen te optimaliseren.',
    },
    career: {
      title: 'Loopbaanbegeleiding',
      description:
        'Wij begeleiden kandidaten bij hun zoektocht naar werk met aangepast advies en persoonlijke opvolging.',
    },
  },
  about: {
    title: 'Over Talentive',
    subtitle: 'Een team toegewijd aan uw professioneel succes.',
    description:
      'Talentive is ontstaan uit een eenvoudige overtuiging: de arbeidsmarkt werkt beter wanneer de juiste mensen op de juiste plaats zitten. Wij zijn een bemiddelingsbedrijf gespecialiseerd in rekrutering en uitzendwerk, ten dienste van bedrijven en werknemers in België.',
    mission:
      'Onze missie is het creëren van duurzame professionele verbindingen, gebaseerd op vertrouwen, transparantie en wederzijds respect. Elke kandidaat is uniek, elk bedrijf heeft specifieke behoeften — wij nemen de tijd om beide te begrijpen.',
    stats: {
      years: '10',
      yearsLabel: 'Jaar ervaring',
      clients: '500',
      clientsLabel: 'Partnerbedrijven',
      placements: '5000',
      placementsLabel: 'Succesvolle plaatsingen',
      satisfaction: '98',
      satisfactionLabel: 'Tevredenheidsscore',
    },
    values: {
      title: 'Onze Waarden',
      trust: {
        title: 'Vertrouwen',
        description: 'Wij bouwen duurzame relaties op basis van eerlijkheid en betrouwbaarheid.',
      },
      proximity: {
        title: 'Nabijheid',
        description: 'Menselijk en persoonlijk contact, bij elke stap van uw traject.',
      },
      efficiency: {
        title: 'Efficiëntie',
        description: 'Concrete resultaten, snel, dankzij onze expertise en ons netwerk.',
      },
    },
  },
  contact: {
    title: 'Contacteer Ons',
    subtitle:
      'Heeft u een vraag of wilt u meer weten? Aarzel niet om ons te contacteren. Ons team staat voor u klaar.',
    phone: 'Telefoon',
    email: 'Email',
    address: 'Adres',
    addressValue: 'Brussel, België',
    cta: 'Stuur ons een bericht',
    ctaDescription:
      'Of u nu een bedrijf bent op zoek naar talent of een kandidaat op zoek naar kansen, wij zijn er om u te helpen.',
  },
  form: {
    title: 'Een Werknemer Zoeken',
    subtitle:
      'Beschrijf uw behoeften en wij nemen snel contact met u op met de meest geschikte profielen.',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    phone: 'Telefoon',
    email: 'Email',
    city: 'Stad / Regio',
    jobType: 'Type werk gezocht',
    availability: 'Beschikbaarheid',
    message: 'Bijkomend bericht',
    submit: 'Mijn aanvraag versturen',
    success: {
      title: 'Aanvraag succesvol verzonden!',
      message:
        'Bedankt voor uw aanvraag. Aizaz zal zo snel mogelijk contact met u opnemen om uw behoeften te bespreken en u de beste profielen voor te stellen.',
      back: 'Terug naar home',
    },
    placeholders: {
      firstName: 'Uw voornaam',
      lastName: 'Uw achternaam',
      phone: '+32 XXX XX XX XX',
      email: 'uw@email.com',
      city: 'Bv: Brussel, Antwerpen, Gent...',
      jobType: 'Bv: Arbeider, Magazijnier, Chauffeur...',
      availability: 'Bv: Onmiddellijk, Binnen 2 weken...',
      message: 'Bijkomende informatie...',
    },
    validation: {
      required: 'Dit veld is verplicht',
      invalidEmail: 'Ongeldig emailadres',
      invalidPhone: 'Ongeldig telefoonnummer',
    },
    toast: {
      validationError: 'Vul alle verplichte velden correct in.',
      successMessage: 'Uw aanvraag is succesvol verzonden! Wij nemen snel contact met u op.',
      errorMessage: 'Er is een fout opgetreden. Probeer het opnieuw.',
    },
  },
  footer: {
    description:
      'Uw betrouwbare partner voor rekrutering en professionele bemiddeling in België.',
    quickLinks: 'Snelle Links',
    contactInfo: 'Contact',
    rights: '© 2025 Talentive. Alle rechten voorbehouden.',
  },
};

export default nl;
