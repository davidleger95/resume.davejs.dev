import { css } from '@linaria/core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const className = css`
  --_border: 2px;
  display: flex;
  align-items: center;
  gap: 1ch;
  border: var(--_border) solid var(--color-text);

  cursor: pointer;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: calc(0.6em - 2 * var(--_border)) calc(0.8em - 2 * var(--_border));
  font-size: 0.8em;
  line-height: 1.05;
  font-weight: 600;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: var(--color-text);
    color: var(--color-background);
    text-decoration: none;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: 2px;
  }
`;

// Note: can't do discriminated union type on these... :/
export type Props =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
  if (anchorProps.href) {
    return <a className={className} {...anchorProps} />;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={className} type="button" {...buttonProps} />;
};

export default Button;
