import { styled } from '@linaria/react';

const StyledTag = styled.div`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: 0.8rem;
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-areas: icon;
  justify-items: center;
  align-items: center;

  & > i {
    grid-area: icon;
    display: block;
  }
`;

const Icon = styled.i``;

const IconOutline = styled.i`
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
