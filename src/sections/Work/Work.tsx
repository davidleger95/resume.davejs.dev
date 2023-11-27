import { styled } from '@linaria/react';
import { work } from './content';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useState } from 'react';
import { Button } from '../../components/Button';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 3rem;
`;

const featuredWork = work.slice(0, 3);
const otherWork = work.slice(3);

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section title="Work">
      <StyledList>
        {featuredWork.map((item) => (
          <li key={item.slug}>
            <Card
              title={item.jobTitle}
              subtitle={item.company.name}
              website={item.company.website}
              date={item.date}
              logo={item.company.logo}
              highlights={item.highlights}
              tags={item.tags}
            />
          </li>
        ))}
        {showAll &&
          otherWork.map((item) => (
            <li key={item.slug}>
              <Card
                title={item.jobTitle}
                subtitle={item.company.name}
                website={item.company.website}
                date={item.date}
                logo={item.company.logo}
                highlights={item.highlights}
                tags={item.tags}
              />
            </li>
          ))}
        <div>
          <Button
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? '- collapse' : '+ show all'}
          </Button>
        </div>
      </StyledList>
    </Section>
  );
};

export default WorkSection;
