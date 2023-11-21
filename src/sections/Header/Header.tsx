import { styled } from "@linaria/react";
import { Heading } from "../../components/Heading/Heading";
import Prose from "../../components/Prose/Prose";
import Chip from "../../components/Chip/Chip";

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
      <a href="mailto:davidleger95@gmail.com">📬 davidleger95@gmail.com</a>
    </Chip>
    <Chip>
      <a href="https://davejs.dev">🌐 davejs.dev</a>
    </Chip>
    <Chip>
      <a href="https://davejs.dev">👨‍💼 LinkedIn</a>
    </Chip>
    <Chip>
      <a href="https://davejs.dev">👨‍💻 GitHub</a>
    </Chip>
  </BasicInfoList>
);

const StyledHeader = styled.header`
  display: grid;
  gap: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading level={1}>David Leger</Heading>
      <BasicInfo />
      <Prose size="large">
        <i>
          Front-end engineer with design and product sensibilities. I’m
          passionate about creating great products that people love.
        </i>
      </Prose>
    </StyledHeader>
  );
}

export default Header;
