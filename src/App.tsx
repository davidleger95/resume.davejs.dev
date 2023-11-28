import { styled } from '@linaria/react';
import Header from './sections/Header/Header';
import Work from './sections/Work/Work';
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';

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
  gap: 5rem;
  padding: 5rem 0;
`;

function App() {
  return (
    <Grid>
      <Content>
        <Header />
        <Skills />
        <Work />
        <Education />
      </Content>
    </Grid>
  );
}

export default App;
