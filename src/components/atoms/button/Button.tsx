import React, { useState } from 'react';

export interface ButtonProps {
  label: string | number;
  color: 'primary' | 'secondary';
  rounding: 'none' | 'small' | 'large';
  roundLeft?: boolean;
  roundRight?: boolean;
  isFocused: boolean;
  onClick(): any;
}
export const Button = ({
  label,
  onClick,
  color,
  rounding,
  roundLeft,
  roundRight,
  isFocused,
}: ButtonProps) => {
  // const [isFocused, setIsFocused] = useState(false);
  const hoverColor = color === 'primary' ? 'blue' : 'gray';
  const roundingAmount =
    rounding === 'large'
      ? 'rounded-2xl'
      : rounding === 'small'
      ? 'rounded'
      : '';

  return (
    <button
      className={`${
        isFocused ? `bg-${hoverColor}-300` : ''
      } border-2 border-gray-300 px-2 py-1 hover:bg-${hoverColor}-300 hover:border-white transition ${roundingAmount} ${
        roundLeft && 'rounded-l-lg'
      } ${roundRight && 'rounded-r-lg'}`}
      onClick={() => {
        // setIsFocused(!isFocused);
        onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
