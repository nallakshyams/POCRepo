// Button.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Button title="Click Me" />);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <Button title="Click Me" onPress={mockOnPress} />,
    );
    const buttonElement = getByText('Click Me');

    fireEvent.press(buttonElement);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
