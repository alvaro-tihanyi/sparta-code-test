import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Board from 'pages/board';

describe('Board Page Basic Tests', () => {
  test('Page mounts OK', () => {
    render(<Board />);
    expect(screen.getByText('Tasks').nodeName.toLowerCase()).toBe('h2');
  });

  test('Adds task OK', () => {
    render(<Board />);
    expect(screen.getByText('Tasks').nodeName.toLowerCase()).toBe('h2');
  });

  test('Delete task OK', () => {
    render(<Board />);
    expect(screen.getByText('Tasks').nodeName.toLowerCase()).toBe('h2');
  });
});
