import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import Login from 'pages/login';

describe('Login Page Basic Tests', () => {
  test('Page mounts OK', () => {
    render(<Login />);
    expect(screen.getByText('LOGIN PAGE').nodeName.toLowerCase()).toBe('h2');
  });
});
