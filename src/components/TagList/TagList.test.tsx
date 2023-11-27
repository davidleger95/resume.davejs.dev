import { render } from '@testing-library/react';
import { TagList, Props } from '.';

const props: Props = {
  // test props
};

describe('TagList', () => {
  it('renders without errors', () => {
    const result = render(<TagList {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
