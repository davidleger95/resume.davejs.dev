import { render } from '@testing-library/react';
import { Button, Props } from '.';

const props: Props = {
  children: 'Button text',
};

describe('Button', () => {
  it('renders without errors', () => {
    const result = render(<Button {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
