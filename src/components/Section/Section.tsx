import { styled } from '@linaria/react';
import { ReactNode } from 'react';
import { Heading } from '../Heading/Heading';

const StyledSection = styled.section`
  display: grid;
  gap: 1rem;
`;

type Props = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <StyledSection>
      <Heading level={2}>{title}</Heading>
      {children}
    </StyledSection>
  );
};

export default Section;
