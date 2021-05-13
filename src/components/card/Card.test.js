import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import { Card } from 'components';

const editMock = jest.fn();
const doneMock = jest.fn();
const deleteMock = jest.fn();

const testCard = <Card done={false} onEdit={editMock} onDelete={deleteMock} onDone={doneMock} title="TEST CARD" />;

describe('Card Basic Tests', () => {
  test('Card mounts OK', () => {
    render(testCard);
    expect(screen.getByText('TEST CARD').nodeName.toLowerCase()).toBe('h4');
  });
});

describe('Card handlers Tests', () => {
  test('Done works OK', () => {
    render(testCard);
    fireEvent.click(screen.getByText('Done'));
    expect(doneMock).toHaveBeenCalled();
  });

  test('Delete works OK', () => {
    render(testCard);
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteMock).toHaveBeenCalled();
  });
});
