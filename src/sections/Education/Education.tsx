import Card from '../../components/Card/Card';
import Section from '../../components/Section/Section';
import unbLogo from '../../assets/unb-logo.svg';

const content = {
  title: 'Bachelor of Science in Software Engineering',
  date: new Date(2018, 4),
  institution: {
    name: 'University of New Brunswick',
    logo: {
      src: unbLogo,
    },
    website: {
      href: 'https://unb.ca',
      label: 'unb.ca',
    },
  },
};

const Education = () => {
  return (
    <Section title="Education">
      <Card
        title={content.title}
        subtitle={content.institution.name}
        date={content.date}
        logo={content.institution.logo}
        website={content.institution.website}
      />
    </Section>
  );
};

export default Education;
