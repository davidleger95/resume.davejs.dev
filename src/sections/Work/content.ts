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
      { label: 'Pinia' },
      { label: 'Sass', icon: 'sass-plain' },
      { label: 'Storybook', icon: 'storybook-plain' },
      { label: 'Testing Library' },
      { label: 'Vite' },
      { label: 'Vitest' },
      { label: 'Jest', icon: 'jest-plain' },
      { label: 'express', icon: 'express-original' },
      { label: 'Amplitude' },
      { label: 'Datadog' },
      { label: 'Terraform', icon: 'terraform-plain' },
      { label: 'Kubernetes', icon: 'kubernetes-plain' },
      { label: 'Go', icon: 'go-plain' },
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
      'Core author and maintainer of Manifold UI, a customer-facing Web Components library',
      'Improved organizational processes resulting in 12.5% increase in engineering bandwidth',
      'Played a key role in Manifold’s adoption of GraphQL',
      'Interviewed candidates and trained new team members',
    ],
    tags: [
      { label: 'TypeScript', icon: 'typescript-plain' },
      { label: 'React', icon: 'react-plain' },
      { label: 'GraphQL', icon: 'graphql-plain' },
      { label: 'Web Components' },
      { label: 'Stencil.js' },
      { label: 'Storybook', icon: 'storybook-plain' },
      { label: 'Testing Library' },
      { label: 'Jest', icon: 'jest-plain' },
      { label: 'styled-components' },
      { label: 'Next.js', icon: 'nextjs-plain' },
      { label: 'express', icon: 'express-original' },
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
      { label: 'JavaScript + Flow', icon: 'javascript-plain' },
      { label: 'React', icon: 'react-plain' },
      { label: 'Redux', icon: 'redux-original' },
      { label: 'LESS', icon: 'less-plain-wordmark' },
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
    tags: [
      { label: 'JavaScript', icon: 'javascript-plain' },
      { label: 'React', icon: 'react-plain' },
      { label: 'Redux', icon: 'redux-original' },
      { label: 'LESS', icon: 'less-plain-wordmark' },
      { label: 'Jest', icon: 'jest-plain' },
    ],
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
    tags: [
      { label: 'php', icon: 'php-plain' },
      { label: 'jQuery', icon: 'jquery-plain' },
      { label: 'Sass', icon: 'sass-plain' },
      { label: 'MySQL', icon: 'mysql-plain' },
    ],
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
    tags: [
      { label: 'Java', icon: 'java-plain' },
      { label: 'awk' },
      { label: 'COBOL' },
      { label: 'JCL' },
    ],
  },
];
