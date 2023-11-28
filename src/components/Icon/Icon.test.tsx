import { render } from '@testing-library/react';
import { Icon, Props } from '.';

const props: Props = {
  // test props
};

describe('Icon', () => {
  it('renders without errors', () => {
    const result = render(<Icon {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
