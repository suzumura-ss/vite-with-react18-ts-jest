import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe(App, () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
