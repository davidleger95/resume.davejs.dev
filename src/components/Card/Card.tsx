import { ReactNode } from 'react';
import { styled } from '@linaria/react';
import { Heading } from '../../components/Heading/Heading';
import { formatDate } from '../../lib/utils/format';
import Link from '../../components/Link/Link';
import Prose from '../Prose/Prose';
import { Props as Tag } from '../Tag';
import { TagList } from '../TagList';
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

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Header = styled.header`
  display: grid;
  gap: 0 1em;
  grid-template-columns: 2.5em 1fr auto;
  grid-template-areas:
    'logo title date'
    'logo subtitle site';

  h3 {
    font-style: normal;
  }

  @media (max-width: 500px) {
    grid-template-columns: 2.5em 1fr;
    grid-template-areas:
      'logo title'
      'logo subtitle'
      '_ date'
      '_ site';
  }
`;

const Logo = styled.img`
  justify-self: center;
  align-self: center;
  grid-area: logo;
  max-width: 2.5em;
  max-height: 2.5em;
`;

const Website = styled(Link)`
  grid-area: site;

  @media (min-width: 500px) {
    text-align: end;
    justify-self: end;
  }
`;

const StyledDate = styled.div`
  grid-area: date;
  @media (min-width: 500px) {
    text-align: end;
  }
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
  tags?: Tag[];
  children?: ReactNode;
};

const Card = ({
  logo,
  title,
  subtitle,
  website,
  date,
  highlights,
  tags,
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
          <Website href={website.href} external size="small">
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
      {tags && <TagList items={tags} limit={6} />}
    </StyledSection>
  );
};

export default Card;
