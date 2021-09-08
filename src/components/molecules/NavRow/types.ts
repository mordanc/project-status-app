import { IconProps } from 'components/atoms/icon/types';

export type NavRowIcon = Omit<IconProps, 'iconSize'>;

export interface NavRowProps extends NavRowIcon {
  orientation?: 'row' | 'col';
  rowText: string;
  textColor?: 'white' | 'black';
  onClick(): any;
  isFocused?: boolean;
  route: string;
}
