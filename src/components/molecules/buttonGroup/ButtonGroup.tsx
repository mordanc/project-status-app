import React, { useState } from 'react';
import Button, { ButtonProps } from '../../atoms/button/Button';

export interface Buttons {
  label: string;
  onClick(): any;
}
interface ButtonGroupProps {
  buttons: Buttons[];
  enableFocus?: boolean;
  color: 'primary' | 'secondary';
}

const ButtonGroup = ({
  buttons,
  color,
  enableFocus = false,
}: ButtonGroupProps) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  return (
    <div className="flex space-x-0">
      {buttons.map((buttonProps, i) => (
        <Button
          key={i}
          color={color || 'primary'}
          onClick={() => {
            setSelectedButtonIndex(i);
            buttonProps.onClick();
          }}
          label={buttonProps.label}
          isFocused={
            // default first button to have focus
            (enableFocus && selectedButtonIndex === i) ||
            (enableFocus && selectedButtonIndex === -1 && i === 0)
          }
          rounding="none"
          roundLeft={i === 0}
          roundRight={i === buttons.length - 1}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;