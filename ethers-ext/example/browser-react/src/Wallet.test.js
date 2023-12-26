import { render, screen } from '@testing-library/react';
import Wallet from './Wallet';

test('renders learn react link', () => {
  render(<Wallet />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
