import { styled } from "@linaria/react";
import { work } from "./content";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 3rem;
`;

const WorkSection = () => {
  return (
    <Section title="Work">
      <StyledList>
        {work.map((item) => (
          <li key={item.slug}>
            <Card
              title={item.jobTitle}
              subtitle={item.company.name}
              website={item.company.website}
              date={item.date}
              logo={item.company.logo!}
              highlights={item.highlights}
            />
          </li>
        ))}
      </StyledList>
    </Section>
  );
};

export default WorkSection;
