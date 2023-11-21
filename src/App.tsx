// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { styled } from '@linaria/react';
import Header from './sections/Header/Header';
import Section from './components/Section/Section';
import Prose from './components/Prose/Prose';
import Work from './sections/Work/Work';
import Education from './sections/Education/Education';

const Grid = styled.main`
  display: grid;
  --width: 80ch;
  --gutter: 1rem;
  --content: min(100% - 2 * var(--gutter), var(--width));

  column-gap: var(--gutter);
  grid-template-columns: auto [content-start] var(--content) [content-end] auto;
`;

const Content = styled.div`
  grid-area: content;
  display: grid;
  gap: 3rem;
  padding: 5rem 0;
`;

const skills = [
  'JavaScript, TypeScript',
  'React, Next, Gatsby',
  'GraphQL, Apollo, urql',
  'Web Components, Stencil.js',
  'CSS, CSS-in-JS, PostCSS, Sass/SCSS, Less',
  'HTML',
];

function App() {
  return (
    <Grid>
      <Content>
        <Header />
        <Section title="Skills">
          <Prose>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Prose>
        </Section>
        <Work />
        <Education />
      </Content>
    </Grid>
  );
}

export default App;
