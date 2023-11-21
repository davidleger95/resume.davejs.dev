import { styled } from '@linaria/react';
import { AnchorHTMLAttributes } from 'react';

const StyledLink = styled.a`
  @keyframes blink {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  ::before {
    opacity: 0;
    position: absolute;
    line-height: 1.75;
    content: '_';
  }

  :hover::before {
    animation: blink 1s linear infinite;
  }
`;

const Hidden = styled.span`
  position: absolute;
  top: -100%;
`;

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
};

const Link = ({ children, external, ...rest }: Props) => {
  const externalAttributes = external
    ? { target: '_blank', rel: 'noopener noreferer' }
    : {};

  return (
    <StyledLink {...rest} {...externalAttributes}>
      {children}
      {external && <Hidden>(open in new tab) </Hidden>}
    </StyledLink>
  );
};

export default Link;
