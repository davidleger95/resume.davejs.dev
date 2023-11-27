import { render } from '@testing-library/react';
import { Button, Props } from '.';

const props: Props = {
  // test props
};

describe('Button', () => {
  it('renders without errors', () => {
    const result = render(<Button {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
