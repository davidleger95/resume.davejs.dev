import Section from '../../components/Section/Section';
import { Heading } from '../../components/Heading/Heading';
import { TagList } from '../../components/TagList';
import Prose from '../../components/Prose/Prose';

type Skill = { label: string; icon?: string };

const skills: Skill[] = [
  { label: 'TypeScript', icon: 'typescript-plain' },
  { label: 'React', icon: 'react-plain' },
  { label: 'Vue', icon: 'vuejs-plain' },
  { label: 'GraphQL', icon: 'graphql-plain' },
  { label: 'CSS', icon: 'css3-plain' },
  { label: 'HTML', icon: 'html5-plain' },
  { label: 'Amplitude' },
  { label: 'Web Components' },
  { label: 'Storybook', icon: 'storybook-plain' },
  { label: 'Testing Library' },
];

const learning: Skill[] = [
  { label: 'Kubernetes', icon: 'kubernetes-plain' },
  { label: 'Terraform', icon: 'terraform-plain' },
  { label: 'Docker', icon: 'docker-plain' },
  { label: 'Go', icon: 'go-plain' },
];

const softSkills: Skill[] = [
  { label: 'Growth engineering' },
  { label: 'Design systems' },
  { label: 'Web accessibility & best practices' },
  { label: 'Testing methodologies (Unit, E2E, VRT)' },
  { label: 'Remote communication' },
];

function Skills() {
  return (
    <Section title="Skills">
      <header>
        <Heading level={3}>Technologies</Heading>
        <Prose size="small">
          Languages, frameworks, and tools that I know exceptionally well
        </Prose>
      </header>
      <TagList items={skills} />
      <header>
        <Heading level={3}>Specialties</Heading>
        <Prose size="small">
          Areas in which I have valuable domain knowledge and experience
        </Prose>
      </header>

      <TagList items={softSkills} />
      <header>
        <Heading level={3}>Learning</Heading>
        <Prose size="small">
          Technologies I&apos;m picking up in my spare time
        </Prose>
      </header>
      <TagList items={learning} />
    </Section>
  );
}

export default Skills;
