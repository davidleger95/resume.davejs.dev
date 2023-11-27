import { styled } from '@linaria/react';

const StyledTag = styled.div`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: 0.8rem;
`;

export type Props = { label: string; icon?: string };

const Tag = ({ label, icon }: Props) => {
  return (
    <StyledTag>
      {icon && <i className={`devicon-${icon}`} />} {label}
    </StyledTag>
  );
};

export default Tag;
