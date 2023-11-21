import { ReactNode } from 'react';
import { styled } from '@linaria/react';
import { Heading } from '../../components/Heading/Heading';
import { formatDate } from '../../lib/utils/format';
import Link from '../../components/Link/Link';
import Prose from '../Prose/Prose';

const Time = (props: { value: Date }) => {
  const formattedValue = formatDate(props.value);
  const stringValue = props.value.toDateString();
  return <time dateTime={stringValue}>{formattedValue}</time>;
};

const Duration = (props: { start: Date; end: Date }) => (
  <>
    <Time value={props.start} /> &ndash; <Time value={props.end} />
  </>
);

const StyledSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const Header = styled.header`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: 40px 1fr auto;
  grid-template-areas:
    'logo title date'
    'logo subtitle site';
  font-style: italic;

  h3 {
    font-style: normal;
  }
`;

const Logo = styled.img`
  justify-self: center;
  align-self: center;
  grid-area: logo;
  max-width: 40px;
  max-height: 40px;
`;

const Website = styled(Link)`
  justify-self: end;
`;

const StyledDate = styled.div`
  justify-self: end;
`;

type Props = {
  logo: {
    src: string;
  };
  title: string;
  subtitle: string;
  website?: {
    href: string;
    label?: string;
  };
  date: Date | [Date, Date];
  highlights?: ReactNode[];
  children?: ReactNode;
};

const Card = ({
  logo,
  title,
  subtitle,
  website,
  date,
  highlights,
  children,
}: Props) => {
  const dateValue = Array.isArray(date) ? (
    <Duration start={date[0]} end={date[1]} />
  ) : (
    <Time value={date} />
  );

  return (
    <StyledSection>
      <Header>
        <Logo src={logo.src} alt="" />

        <Heading level={3}>{title}</Heading>
        <StyledDate>{dateValue}</StyledDate>
        <div>{subtitle}</div>
        {website && (
          <Website href={website.href} external>
            {website.label ?? website.href}
          </Website>
        )}
      </Header>
      {highlights && (
        <Prose size="small">
          <ul>
            {highlights.map((item) => (
              <li key={item?.toString()}>{item}</li>
            ))}
          </ul>
        </Prose>
      )}
      {children}
    </StyledSection>
  );
};

export default Card;
