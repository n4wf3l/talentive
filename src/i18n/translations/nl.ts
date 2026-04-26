import type { Translations } from '../types';

const nl: Translations = {
  nav: {
    home: 'Home',
    services: 'Diensten',
    about: 'Over Ons',
    contact: 'Contact',
  },
  hero: {
    title: 'We go deeper\nthan hiring.',
    subtitle:
      'Vast, contractueel en payroll personeel in heel België. Vertel ons wie u aanwerft, wij leveren de shortlist.',
    ctaEmployee: 'Ik werf aan',
    ctaJob: 'Zoek een werk',
    scrollDown: 'Onze diensten',
  },
  services: {
    title: 'Wat wij leveren',
    subtitle:
      'Drie staffingoplossingen, één betrouwbare partner. Geen gezwets, gewoon de juiste mensen op het juiste moment.',
    permanent: {
      title: 'Vast Personeel',
      description:
        'Wij vinden en onboarden het langetermijntalent dat uw bedrijf nodig heeft. U tekent enkel het uiteindelijke aanbod.',
    },
    contract: {
      title: 'Contractueel Personeel',
      description:
        'Flexibele professionals, snel inzetbaar. Schaal uw team op of neer zonder de verplichting van een vast contract.',
    },
    payroll: {
      title: 'Payroll / EOR',
      description:
        'U kiest het talent, wij zijn de werkgever. Contracten, loonadministratie en compliance, wij regelen alles, volledig in orde.',
    },
  },
  about: {
    title: 'Waarom Talentive',
    subtitle: 'De aanwervingspartner die u écht kunt vertrouwen.',
    description:
      'Talentive is een Belgisch rekruteringsbureau gebouwd op één principe: aanwerven hoeft niet ingewikkeld te zijn. Wij brengen bedrijven en professionals samen, of het nu vast, contractueel of payroll is, helder en snel.',
    mission:
      'Wij nemen de tijd om uw functie te begrijpen, shortlisten enkel relevante kandidaten en blijven verantwoordelijk tot de plaatsing. Geen templates, geen druk, geen verrassingen.',
    stats: {
      years: '2',
      yearsLabel: 'Jaar op de markt',
      clients: '30',
      clientsLabel: 'Klantbedrijven',
      placements: '150',
      placementsLabel: 'Succesvolle plaatsingen',
      satisfaction: '96',
      satisfactionLabel: 'Tevredenheidsscore',
    },
    values: {
      title: 'Waarom voor ons kiezen',
      trust: {
        title: 'Betrouwbaar',
        description: 'Wij zetten onze naam onder elke plaatsing. Directe communicatie, eerlijke tarieven, volledige transparantie.',
      },
      proximity: {
        title: 'Responsief',
        description: 'Eén vast aanspreekpunt dat snel antwoordt en uw bedrijf écht begrijpt.',
      },
      efficiency: {
        title: 'Efficiënt',
        description: 'Gekwalificeerde kandidaten op uw bureau binnen dagen. Geen stapels irrelevante CV\'s.',
      },
    },
    team: {
      title: 'Ontmoet het Team',
      subtitle: 'De mensen achter Talentive: recruiters die de telefoon écht opnemen.',
      readMore: 'Meer lezen',
      members: {
        founder: {
          role: 'Managing Director',
          bio: 'Aizaz leidt Talentive dagelijks. Gevestigd in Antwerpen en zeer actief in Brussel, verdeelt hij zijn week tussen beide steden om dicht bij klanten en kandidaten te blijven. Hij volgt elk sleutelaccount persoonlijk op en leest elke briefing die binnenkomt.',
        },
        partner: {
          role: 'Business Development Manager',
          bio: 'Fatima Zzahra leidt de business development bij Talentive: nieuwe klantenrelaties opbouwen, hun aanwervingsbehoeften in kaart brengen en ervoor zorgen dat elke briefing klaar is om te slagen voordat de rekrutering start. Zij werkt in logistiek, industrie en tech, en is regelmatig op locatie bij klanten.',
        },
        consultant: {
          role: 'Recruitment Consultant',
          bio: 'Ahrar staat dagelijks in voor sourcing en screening van kandidaten. Hij voert de eerste gesprekken, stelt de shortlist samen en blijft in contact met kandidaten van intake tot onboarding. De persoon die effectief opneemt als u over een profiel belt.',
        },
      },
    },
  },
  contact: {
    title: 'Laten we over uw aanwerving praten',
    subtitle:
      'Beschrijf ons de functie, het team, de timing. Wij komen terug met gekwalificeerde kandidaten, snel.',
    phone: 'Telefoon',
    email: 'Email',
    address: 'Adres',
    addressVenue: 'Antwerp Tower',
    addressValue: 'De Keyserlei 5, 2018 Antwerpen',
    cta: 'Stuur uw briefing',
    ctaDescription:
      'Eén dringende vacature of een langetermijnplan : wij staan klaar om u te helpen.',
  },
  form: {
    title: 'Vertel ons wie u aanwerft',
    subtitle:
      'Vul hieronder uw aanwervingsbriefing in. Wij reageren binnen 24 uur met geschikte kandidaten.',
    viewFullPage: 'Volledige pagina openen',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    phone: 'Telefoon',
    email: 'Email',
    city: 'Stad / Regio',
    jobType: 'Te vervullen functie',
    availability: 'Wanneer heeft u iemand nodig?',
    message: 'Aanvullende informatie',
    submit: 'Briefing versturen',
    success: {
      title: 'Briefing succesvol verzonden!',
      message:
        'Uw aanwervingsbriefing is goed ontvangen. Wij nemen binnen 24 uur contact met u op met geschikte kandidaten.',
      back: 'Terug naar home',
    },
    placeholders: {
      firstName: 'Uw voornaam',
      lastName: 'Uw achternaam',
      phone: '+32 XXX XX XX XX',
      email: 'uw@email.com',
      city: 'Bv: Brussel, Antwerpen, Gent...',
      jobType: 'Bv: Magazijnier, Developer, Chauffeur...',
      availability: 'Bv: Onmiddellijk, binnen 2 weken...',
      message: 'Nog iets wat we moeten weten...',
    },
    validation: {
      required: 'Dit veld is verplicht',
      invalidEmail: 'Ongeldig emailadres',
      invalidPhone: 'Ongeldig telefoonnummer',
    },
    toast: {
      validationError: 'Vul alle verplichte velden correct in.',
      successMessage: 'Uw briefing is succesvol verzonden! Wij nemen binnen 24 uur contact met u op.',
      errorMessage: 'Er is een fout opgetreden. Probeer het opnieuw.',
    },
  },
  findJob: {
    title: 'Vind uw volgende job',
    subtitle:
      'Stuur ons uw gegevens en CV. Wij koppelen u snel aan relevante openstaande vacatures.',
    viewFullPage: 'Volledige pagina openen',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    phone: 'Telefoon',
    email: 'Email',
    city: 'Stad / Regio',
    desiredRole: 'Gezochte functie',
    availability: 'Beschikbaarheid',
    availabilityOptions: {
      now: 'Onmiddellijk',
      week: 'Binnen een week',
      month: '1 week – 1 maand',
      later: 'Meer dan een maand',
    },
    cv: 'CV',
    cvHint: 'PDF, DOC of DOCX, max. 3 bestanden',
    cvSelect: 'Bestand toevoegen',
    cvNoFile: 'Geen bestand geselecteerd',
    cvReminder: 'Vergeet niet uw documenten bij de e-mail te voegen voordat u verstuurt.',
    cvLimitReached: 'U kunt maximaal 3 bestanden toevoegen.',
    message: 'Aanvullende info',
    submit: 'Mijn sollicitatie versturen',
    success: {
      title: 'Sollicitatie verzonden!',
      message: 'Uw gegevens zijn binnen. Vergeet niet uw CV bij de e-mail toe te voegen als dat nog niet is gebeurd. Wij nemen binnen 48 uur contact op.',
      back: 'Terug naar home',
    },
    placeholders: {
      firstName: 'Uw voornaam',
      lastName: 'Uw achternaam',
      phone: '+32 XXX XX XX XX',
      email: 'uw@email.com',
      city: 'Bijv.: Brussel, Antwerpen, Gent...',
      desiredRole: 'Bijv.: Magazijnier, Ontwikkelaar, Chauffeur...',
      availability: 'Bijv.: Onmiddellijk, binnen 2 weken...',
      message: 'Iets anders dat we moeten weten...',
    },
  },
  faq: {
    title: 'Veelgestelde Vragen',
    subtitle: 'Alles wat u moet weten voor u aanwerft met Talentive.',
    q1: 'Welke types van staffing bieden jullie aan?',
    a1: 'Drie: Vast Personeel (directe aanwerving op uw payroll), Contractueel Personeel (flexibele professionals voor een bepaalde periode) en Payroll / EOR (u kiest de persoon, wij regelen de tewerkstelling en compliance).',
    q2: 'Hoe snel leveren jullie kandidaten?',
    a2: 'Contractuele en payroll profielen: meestal binnen 24-48 uur. Vaste aanwervingen: reken op een gekwalificeerde shortlist binnen 1-3 weken afhankelijk van de functie.',
    q3: 'Voor welke sectoren rekruteren jullie?',
    a3: 'We werken in logistiek, bouw, industrie, horeca, transport, administratie, tech en meer. Past uw sector er niet bij, dan zeggen we dat meteen.',
    q4: 'Hoe werken jullie tarieven?',
    a4: 'Vast: een eenmalig succesfee op basis van het geplaatste salaris. Contractueel en payroll: een transparante uurlijkse markup. Geen plaatsing, geen kost. Geen verrassingen.',
    q5: 'Hoe start het aanwervingsproces?',
    a5: 'Klik op "Ik werf aan", vul de briefing in, en wij nemen binnen 24 uur contact op om de functie en timing af te stemmen. Daarna: snelle gekwalificeerde shortlist.',
    q6: 'Werken jullie in heel België?',
    a6: 'Ja. Brussel, Wallonië en Vlaanderen. We passen ons aan de specificiteiten, taal en wettelijk kader van elke regio aan.',
  },
  contactForm: {
    title: 'Stuur ons een bericht',
    name: 'Volledige naam',
    email: 'Email',
    subject: 'Onderwerp',
    message: 'Bericht',
    submit: 'Bericht versturen',
    sending: 'Verzenden...',
    success: 'Uw bericht is succesvol verzonden! We nemen zo snel mogelijk contact met u op.',
    placeholders: {
      name: 'Uw volledige naam',
      email: 'uw@email.com',
      subject: 'Hoe kunnen we u helpen?',
      message: 'Beschrijf uw vraag...',
    },
  },
  privacy: {
    title: 'Privacybeleid',
    subtitle: 'Hoe wij uw persoonlijke gegevens beschermen.',
    lastUpdated: 'Laatst bijgewerkt: april 2026',
    intro: 'Bij Talentive nemen we de bescherming van uw persoonlijke gegevens zeer serieus. Dit privacybeleid beschrijft hoe we uw informatie verzamelen, gebruiken en beschermen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).',
    dataTitle: 'Verzamelde gegevens',
    dataContent: 'We verzamelen gegevens die u rechtstreeks aan ons verstrekt: naam, emailadres, telefoonnummer, stad, beschikbaarheid en alle informatie in uw briefing of berichten. Deze gegevens worden verzameld via onze aanwervings- en contactformulieren.',
    purposeTitle: 'Doel van verwerking',
    purposeContent: 'Uw gegevens worden uitsluitend gebruikt om: te reageren op uw briefing of contactverzoek, u in contact te brengen met geschikte kandidaten of werkgevers, onze staffingdiensten te verbeteren en u op de hoogte te houden van relevante kansen.',
    cookiesTitle: 'Cookies',
    cookiesContent: 'Onze site gebruikt essentiële cookies voor de werking van de site (taalvoorkeur). We gebruiken geen advertentietrackingcookies. U kunt cookies op elk moment uitschakelen in uw browserinstellingen.',
    rightsTitle: 'Uw rechten',
    rightsContent: 'Op grond van de AVG heeft u het recht op inzage, rectificatie, verwijdering, beperking van verwerking en overdraagbaarheid van uw gegevens. U kunt deze rechten uitoefenen door contact met ons op te nemen via info@talentivegroup.be.',
    contactTitle: 'Contact',
    contactContent: 'Voor vragen over de bescherming van uw gegevens kunt u contact met ons opnemen via info@talentivegroup.be of per post op Antwerp Tower, De Keyserlei 5, 2018 Antwerpen, België.',
  },
  bottomBar: {
    worker: 'Ik werf aan',
    job: 'Zoek een werk',
    quickContact: 'Snel contact',
  },
  quickContact: {
    title: 'Snel Contact',
    subtitle: 'Stuur ons een kort bericht en wij nemen zo snel mogelijk contact met u op.',
    name: 'Uw naam',
    email: 'Email',
    message: 'Bericht',
    send: 'Versturen',
    sending: 'Verzenden...',
    success: 'Bericht verzonden! Wij nemen snel contact met u op.',
    placeholders: {
      name: 'Uw volledige naam',
      email: 'uw@email.com',
      message: 'Hoe kunnen we u helpen?',
    },
  },
  tutorial: {
    step1Title: 'Op zoek naar personeel?',
    step1Desc: 'Klik hier om uw briefing te versturen. Antwoord binnen 24 uur.',
    step2Title: 'Op zoek naar werk?',
    step2Desc: 'Bekijk onze vacatures op ons jobsplatform.',
    skip: 'Overslaan',
    next: 'Volgende',
    done: 'Aan de slag',
  },
  footer: {
    description:
      'Vast, contractueel en payroll personeel voor bedrijven in België.',
    quickLinks: 'Snelle Links',
    contactInfo: 'Contact',
    legal: 'Privacybeleid',
    rights: '© 2025 Talentive. Alle rechten voorbehouden.',
  },
};

export default nl;
