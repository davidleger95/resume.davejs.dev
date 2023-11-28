import { styled } from '@linaria/react';
import { Icon } from '../Icon';

const StyledTag = styled.div`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: 0.8em;
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export type Props = { label: string; icon?: string };

const Tag = ({ label, icon }: Props) => {
  return (
    <StyledTag>
      {icon && <Icon icon={icon} colored outline />} {label}
    </StyledTag>
  );
};

export default Tag;
