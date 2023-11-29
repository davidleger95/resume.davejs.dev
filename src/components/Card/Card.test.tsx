import { render } from '@testing-library/react';
import { Card, Props } from '.';

const props: Props = {
  date: new Date(Date.now()),
  logo: {
    src: 'https://fillmurray.com/50/50',
  },
  website: {
    href: 'https://davejs.dev',
    label: 'davejs.dev',
  },
  title: 'Card Title',
  subtitle: 'Card subtitle',
  highlights: [
    'This is something important',
    <>
      This is a <em>JSX</em> highlight
    </>,
    'Another important thing',
  ],
  tags: [
    { label: 'My First Tag' },
    { label: 'Another Tag' },
    { label: 'Tag with an Icon', icon: 'typescript-plain' },
  ],
};

describe('Icon', () => {
  it('renders without errors', () => {
    const result = render(<Card {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
