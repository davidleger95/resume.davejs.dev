import Section from '../../components/Section/Section';
import { Heading } from '../../components/Heading/Heading';
import { TagList } from '../../components/TagList';

type Skill = { label: string; icon?: string };

const skills: Skill[] = [
  { label: 'TypeScript', icon: 'typescript-plain' },
  { label: 'React', icon: 'react-plain' },
  { label: 'GraphQL', icon: 'graphql-plain' },
  { label: 'Web Components, Stencil.js' },
  { label: 'CSS, CSS-in-JS, PostCSS, Sass/SCSS, Less', icon: 'css3-plain' },
  { label: 'HTML', icon: 'html5-plain' },
  { label: 'Jest', icon: 'jest-plain' },
  { label: 'Storybook', icon: 'storybook-plain' },
];

const learning: Skill[] = [
  { label: 'Kubernetes', icon: 'kubernetes-plain' },
  { label: 'Terraform', icon: 'terraform-plain' },
  { label: 'Go', icon: 'go-original-wordmark' },
  { label: 'Rust', icon: 'rust-plain' },
  { label: 'Docker', icon: 'docker-plain' },
];

const softSkills: Skill[] = [
  { label: 'Remote Communication' },
  { label: 'Agile Methodologies' },
  { label: 'CI/CD' },
  { label: 'Web Accessibility' },
  { label: 'A/B Testing' },
];

function Skills() {
  return (
    <Section title="Skills">
      <Heading level={3}>Core Technologies</Heading>
      <TagList items={skills} />
      <Heading level={3}>Soft Skills</Heading>
      <TagList items={softSkills} />
      <Heading level={3}>Learning</Heading>
      <TagList items={learning} />
    </Section>
  );
}

export default Skills;
