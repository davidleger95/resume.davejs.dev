import snykLogo from '../../assets/snyk-logo.svg';
import manifoldLogo from '../../assets/manifold-logo.svg';
import cventLogo from '../../assets/cvent-logo.svg';
import unbLogo from '../../assets/unb-logo.svg';
import marinerLogo from '../../assets/mariner-logo.svg';

type Image = {
  src: string;
  alt: string;
};

type Link = {
  href: string;
  label?: string;
};

export type Company = {
  name: string;
  website?: Link;
  logo: Image;
  description?: string;
};

export type Work = {
  slug: string;
  jobTitle: string;
  specialty?: string;
  date: [Date, Date];
  company: Company;
  highlights?: string[];
  description?: string;
};

enum Month {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export const work: Work[] = [
  {
    slug: 'snyk',
    jobTitle: 'Software Engineer',
    specialty: 'Growth',
    date: [new Date(2021, Month.January), new Date(Date.now())],
    company: {
      name: 'Snyk',
      logo: {
        src: snykLogo,
        alt: '',
      },
      website: {
        href: 'https://snyk.io',
        label: 'snyk.io',
      },
    },
    highlights: [
      'Built A/B testing experiments using Amplitude',
      'Contributed to design system components and documentation',
      'Shaped feature plans',
    ],
  },
  {
    slug: 'manifold',
    jobTitle: 'Software Engineer',
    date: [new Date(2019, Month.January), new Date(2021, Month.January)],
    company: {
      name: 'Manifold (aquired by Snyk)',
      logo: {
        src: manifoldLogo,
        alt: '',
      },
    },
    highlights: [
      'Primary author and maintainer of Manifold UI, a customer-facing Web Components library',
      'Built high-quality web experiences with a focus on performance and accessibility',
      'Played a key role in Manifold’s adoption of GraphQL',
      'Facilitated meetings and refined agile processes to improve my team’s productivity',
    ],
  },
  {
    slug: 'cvent',
    jobTitle: 'UI Developer',
    date: [new Date(2017, Month.May), new Date(2019, Month.January)],
    company: {
      name: 'Cvent',
      logo: {
        src: cventLogo,
        alt: '',
      },
      website: {
        href: 'https://cvent.com',
        label: 'cvent.com',
      },
    },
    highlights: [
      'Built large-scale web applications using React and Redux.',
      'Worked on a globally distributed team located in Canada, India, USA, and Russia.',
      'Maintained internal frameworks and libraries used by hundreds of developers.',
      'Mentored coworkers and regularly lead training sessions.',
    ],
  },
  {
    slug: 'cvent-internship',
    jobTitle: 'Software Engineering Intern (Internship)',
    date: [new Date(2017, Month.May), new Date(2019, Month.January)],
    company: {
      name: 'Cvent',
      logo: {
        src: cventLogo,
        alt: '',
      },
      website: {
        href: 'https://cvent.com',
        label: 'cvent.com',
      },
    },
  },
  {
    slug: 'unb-internship',
    jobTitle: 'Full-Stack Developer (Internship)',
    date: [new Date(2017, Month.May), new Date(2019, Month.January)],
    company: {
      name: 'University of New Brunswick',
      logo: {
        src: unbLogo,
        alt: '',
      },
      website: {
        href: 'https://unb.ca',
        label: 'unb.ca',
      },
    },
  },
  {
    slug: 'mariner-internship',
    jobTitle: 'Junior Program Analyst (Internship)',
    date: [new Date(2017, Month.May), new Date(2019, Month.January)],
    company: {
      name: 'Mariner Innovations',
      logo: {
        src: marinerLogo,
        alt: '',
      },
      website: {
        href: 'https://marinerinnovations.com',
        label: 'marinerinnovations.com',
      },
    },
  },
];
