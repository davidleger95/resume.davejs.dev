import { styled } from '@linaria/react';
import { Icon } from '../Icon';

const StyledTag = styled.div<{ size?: 'small' }>`
  background: #ffffff11;
  padding: 0.25em 0.5em;
  font-size: ${(p) => (p.size === 'small' ? '0.6em' : '0.8em')};
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export type Props = { label: string; icon?: string; size?: 'small' };

const Tag = ({ label, icon, ...rest }: Props) => {
  return (
    <StyledTag {...rest}>
      {icon && <Icon icon={icon} colored outline />} {label}
    </StyledTag>
  );
};

export default Tag;
