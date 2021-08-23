import type { ButtonProps } from './types';

export const Button = ({
  label,
  onClick,
  color,
  rounding,
  roundLeft,
  roundRight,
  isFocused,
}: ButtonProps) => {
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
      } border-2 border-gray-300 px-2 py-1 hover:bg-${hoverColor}-300 transition ${roundingAmount} ${
        roundLeft && 'rounded-l-lg'
      } ${roundRight && 'rounded-r-lg'}`}
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
