import snykLogo from '../../assets/snyk-logo.svg';
import manifoldLogo from '../../assets/manifold-logo.svg';
import cventLogo from '../../assets/cvent-logo.svg';
import unbLogo from '../../assets/unb-logo.svg';
import marinerLogo from '../../assets/mariner-logo.svg';
import { Props as Tag } from '../../components/Tag';

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
  tags?: Tag[];
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
    jobTitle: 'Software Engineer, Growth',
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
      'Helped establish growth engineering practices company-wide: A/B testing, data-driven decisions',
      'Built high-quality web experiences with a focus on performance and accessibility',
      'Contributed to design system components and documentation',
      'Interviewed candidates and trained new team members',
    ],
    tags: [
      { label: 'TypeScript', icon: 'typescript-plain' },
      { label: 'Vue', icon: 'vuejs-plain' },
      { label: 'Sass', icon: 'sass-plain' },
      { label: 'Amplitude' },
      { label: 'Segment' },
      { label: 'Storybook', icon: 'storybook-plain' },
      { label: 'Go', icon: 'go-original-wordmark' },
      { label: 'Terraform', icon: 'terraform-plain' },
      { label: 'Testing Library' },
      { label: 'CircleCI', icon: 'circleci-plain' },
    ],
  },
  {
    slug: 'manifold',
    jobTitle: 'Software Engineer',
    date: [new Date(2019, Month.January), new Date(2021, Month.January)],
    company: {
      name: 'Manifold (acquired by Snyk)',
      logo: {
        src: manifoldLogo,
        alt: '',
      },
    },
    highlights: [
      'Primary author and maintainer of Manifold UI, a customer-facing Web Components library',
      'Improved organizational processes resulting in 11% increase in engineering bandwidth',
      'Played a key role in Manifold’s adoption of GraphQL',
      'Interviewed candidates and trained new team members',
    ],
    tags: [
      { label: 'TypeScript', icon: 'typescript-plain' },
      { label: 'React', icon: 'react-plain' },
      { label: 'GraphQL, urql', icon: 'graphql-plain' },
      { label: 'Storybook', icon: 'storybook-plain' },
      { label: 'Web Components, Stencil.js' },
      { label: 'CSS, styled-components', icon: 'css3-plain' },
      { label: 'Jest', icon: 'jest-plain' },
      { label: 'GitHub Actions', icon: 'github-plain' },
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
      'Built large-scale web applications using React and Redux, focusing on performance and accessibility',
      'Maintained internal frameworks and libraries used by hundreds of developers',
      'Mentored coworkers and regularly lead training sessions on web technologies',
    ],
    tags: [
      { label: 'TypeScript', icon: 'typescript-plain' },
      { label: 'React', icon: 'react-plain' },
      { label: 'Redux', icon: 'redux-original' },
      { label: 'CSS, LESS', icon: 'less-plain-wordmark' },
      { label: 'Jest', icon: 'jest-plain' },
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
