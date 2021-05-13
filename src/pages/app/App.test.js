import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page first', () => {
  render(<App />);
  const loginPage = screen.getByText('LOGIN PAGE');
  expect(loginPage).toBeInTheDocument();
});
