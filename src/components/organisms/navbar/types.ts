import NavRow from 'components/molecules/NavRow/NavRow';

export interface NavbarProps {
  navItems: Array<typeof NavRow>;
  textColor?: 'white' | 'black';
}
