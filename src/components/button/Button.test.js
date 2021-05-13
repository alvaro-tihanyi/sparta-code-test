import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from 'components';

const onClickMock = jest.fn();
const testButton = <Button label="TEST" onClick={onClickMock} />;

describe('Button Basic Tests', () => {
  test('Button mounts OK', () => {
    render(testButton);
    expect(screen.getByText('TEST').nodeName.toLowerCase()).toBe('button');
  });

  test('onClick works OK', () => {
    render(testButton);
    fireEvent.click(screen.getByText('TEST'));
    expect(onClickMock).toBeCalled();
  });
});
