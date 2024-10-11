import { styled } from '@linaria/react';
import { work, Work } from './content';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 3rem;
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const WorkItem = ({ jobTitle, company, ...rest }: Work) => (
  <li>
    <Card
      title={jobTitle}
      subtitle={
        <CompanyName>
          {company.name}{' '}
          {company.tag && <Tag label={company.tag} size="small" />}
        </CompanyName>
      }
      website={company.website}
      logo={company.logo}
      {...rest}
    />
  </li>
);

const featuredWork = work.slice(0, 3);
const otherWork = work.slice(3);

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section title="Work">
      <StyledList>
        {featuredWork.map((item) => (
          <WorkItem key={item.slug} {...item} />
        ))}
        {showAll &&
          otherWork.map((item) => <WorkItem key={item.slug} {...item} />)}
        <li>
          <Button
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? '- collapse' : '+ show all'}
          </Button>
        </li>
      </StyledList>
    </Section>
  );
};

export default WorkSection;
