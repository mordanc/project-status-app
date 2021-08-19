export interface Buttons {
  label: string;
  onClick(): any;
}

export interface ButtonGroupProps {
  buttons: Buttons[];
  enableFocus?: boolean;
  color: 'primary' | 'secondary';
}
