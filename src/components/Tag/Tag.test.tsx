import { render } from '@testing-library/react';
import { Tag, Props } from '.';

const props: Props = {
  label: 'Text',
};

describe('Tag', () => {
  it('renders without errors', () => {
    const result = render(<Tag {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});