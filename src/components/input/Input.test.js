import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import { Input } from 'components';

const onChangeMock = jest.fn();
const testInput = <Input type="text" value="Test" label="TEST LABEL" onChange={onChangeMock} />;

describe('Input Basic Tests', () => {
  test('Input mounts OK', () => {
    render(testInput);
    expect(screen.getByText('TEST LABEL').nodeName.toLowerCase()).toBe('p');
  });

  test('Input change works OK', () => {
    render(testInput);
    fireEvent.change(screen.getByDisplayValue('Test'));
    expect(onChangeMock).toHaveBeenCalled();
  });
});
