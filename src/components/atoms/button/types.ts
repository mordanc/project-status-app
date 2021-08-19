export interface ButtonProps {
  label: string | number;
  color: 'primary' | 'secondary';
  rounding: 'none' | 'small' | 'large';
  roundLeft?: boolean;
  roundRight?: boolean;
  isFocused: boolean;
  onClick(): any;
}
