import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import Board from 'pages/board';

describe('Board Page Basic Tests', () => {
  test('Page mounts OK', () => {
    render(<Board />);
    expect(screen.getByText('Tasks').nodeName.toLowerCase()).toBe('h2');
  });
});
