import { render } from '@testing-library/react';
import { TagList, Props } from '.';

const props: Props = {
  items: [
    { label: 'One', icon: 'github-plain' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

describe('TagList', () => {
  it('renders without errors', () => {
    const result = render(<TagList {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
