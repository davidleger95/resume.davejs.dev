import { styled } from '@linaria/react';
import { Heading } from '../../components/Heading/Heading';
import Prose from '../../components/Prose/Prose';
import Chip from '../../components/Chip/Chip';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
import Link from '../../components/Link/Link';

const BasicInfoList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const BasicInfo = () => (
  <BasicInfoList>
    <Chip>📍 Halifax, Canada</Chip>
    <Chip>
      <Link href="mailto:davidleger95@gmail.com" external>
        📬 davidleger95@gmail.com
      </Link>
    </Chip>
    <Chip>
      <Link href="https://davejs.dev" external>
        🌐 davejs.dev
      </Link>
    </Chip>
    <Chip>
      <Link href="https://davejs.dev" external>
        👨‍💼 LinkedIn
      </Link>
    </Chip>
    <Chip>
      <Link href="https://davejs.dev" external>
        👨‍💻 GitHub
      </Link>
    </Chip>
  </BasicInfoList>
);

const StyledHeader = styled.header`
  display: grid;
  gap: 1rem;
`;

const Lead = styled(Prose)`
  font-style: italic;
`;

const CtaGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

function Header() {
  return (
    <StyledHeader>
      <CtaGroup>
        <Button
          href="https://github.com/davidleger95/resume.davejs.dev"
          target="_blank"
          rel="noopener noreferer"
        >
          <Icon icon="github-plain" />
          source
        </Button>
        <Button
          href="https://github.com/davidleger95/resume.davejs.dev"
          target="_blank"
          rel="noopener noreferer"
        >
          {/* <Icon icon="github-plain" /> */}
          PDF version
        </Button>
      </CtaGroup>
      <Heading level={1}>David Leger</Heading>
      <BasicInfo />
      <Lead size="large">
        Software engineer with design and product sensibilities. I’m passionate
        about creating great experiences on the web.
      </Lead>
    </StyledHeader>
  );
}

export default Header;
