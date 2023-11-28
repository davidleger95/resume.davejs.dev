import { styled } from '@linaria/react';

const StyledTag = styled.div`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: 0.8rem;
`;

const IconContainer = styled.div`
  display: inline-grid;
  grid-template-areas: icon;
  justify-items: center;
  align-items: center;
`;

const Icon = styled.i`
  padding: 2px;
  border-radius: 3px;
  grid-area: icon;
`;

const IconOutline = styled.i`
  grid-area: icon;
  paint-order: stroke fill;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
`;

export type Props = { label: string; icon?: string; colored?: boolean };

const Tag = ({ label, icon, colored = true }: Props) => {
  return (
    <StyledTag>
      {icon && (
        <IconContainer>
          <IconOutline className={`devicon-${icon}`} />
          <Icon className={`devicon-${icon} ${colored && 'colored'}`} />
        </IconContainer>
      )}{' '}
      {label}
    </StyledTag>
  );
};

export default Tag;
