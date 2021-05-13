import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Login from 'pages/login';

describe('Login Page Basic Tests', () => {
  test('Page mounts OK', () => {
    render(<Login />);
    expect(screen.getByText('LOGIN PAGE').nodeName.toLowerCase()).toBe('h2');
  });

  test('Login works OK', () => {
    render(<Login />);
    expect(screen.getByText('LOGIN PAGE').nodeName.toLowerCase()).toBe('h2');
  });
});
