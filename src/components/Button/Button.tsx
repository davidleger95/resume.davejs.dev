import { styled } from '@linaria/react';
import { ButtonHTMLAttributes } from 'react';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 0.8em;
  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }

  &:hover,
  &:focus {
    color: var(--color-primary);
  }
`;

export type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
