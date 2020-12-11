import { render, screen } from '@testing-library/react';
import CV from './CV';

test('renders learn react link', () => {
  render(<CV />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
