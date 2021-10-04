import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders app-component', () => {
  render(<App rentsCount = { 5 } />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
