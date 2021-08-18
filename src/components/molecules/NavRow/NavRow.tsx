import React from 'react';
import Icon, { IconProps } from '../../atoms/icon/Icon';

type NavRowIcon = Omit<IconProps, 'iconSize'>;

interface NavRowProps extends NavRowIcon {
  orientation?: 'row' | 'col';
  rowText: string;
  textColor?: 'white' | 'black';
  onClick(): any;
}

const NavRow = ({
  rowText,
  orientation = 'row',
  iconType,
  iconColor,
  textColor,
  onClick,
}: NavRowProps) => {
  return (
    <div
      className={`flex flex-${orientation} text-2xl text-${
        textColor || 'black'
      }  cursor-pointer  pl-2 py-1 items-center`}
      onClick={onClick}
    >
      <div className="transform hover:scale-105 hover:text-blue-400 transition">
        <Icon iconSize="sm" iconType={iconType} iconColor={iconColor} />
        <span className="pl-4 font-georama">{rowText}</span>
      </div>
    </div>
  );
};

export default NavRow;
