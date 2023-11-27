import { styled } from '@linaria/react';

const StyledTag = styled.div`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: 0.8rem;
`;

const Icon = styled.i`
  background-color: #fff;
  padding: 2px;
  border-radius: 3px;
`;

export type Props = { label: string; icon?: string; colored?: boolean };

const Tag = ({ label, icon, colored = true }: Props) => {
  return (
    <StyledTag>
      {icon && <Icon className={`devicon-${icon} ${colored && 'colored'}`} />}{' '}
      {label}
    </StyledTag>
  );
};

export default Tag;
