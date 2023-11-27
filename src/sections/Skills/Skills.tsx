import Section from '../../components/Section/Section';
import { Heading } from '../../components/Heading/Heading';
import { TagList } from '../../components/TagList';

type Skill = { label: string; icon?: string };

const skills: Skill[] = [
  { label: 'TypeScript', icon: 'typescript-plain' },
  { label: 'React', icon: 'react-plain' },
  { label: 'GraphQL', icon: 'graphql-plain' },
  { label: 'Web Components' },
  { label: 'CSS', icon: 'css3-plain' },
  { label: 'HTML', icon: 'html5-plain' },
  { label: 'Amplitude' },
  { label: 'Testing Library' },
];

const learning: Skill[] = [
  { label: 'Kubernetes', icon: 'kubernetes-plain' },
  { label: 'Terraform', icon: 'terraform-plain' },
  { label: 'Go', icon: 'go-original-wordmark' },
  { label: 'Docker', icon: 'docker-plain' },
];

const softSkills: Skill[] = [
  { label: 'Growth engineering' },
  { label: 'Remote communication' },
  { label: 'Design systems' },
  { label: 'Web Accessibility' },
  { label: 'Testing methodologies' },
];

function Skills() {
  return (
    <Section title="Skills">
      <Heading level={3}>Core Technologies</Heading>
      <TagList items={skills} />
      <Heading level={3}>Specialties</Heading>
      <TagList items={softSkills} />
      <Heading level={3}>Currently Learning</Heading>
      <TagList items={learning} />
    </Section>
  );
}

export default Skills;
