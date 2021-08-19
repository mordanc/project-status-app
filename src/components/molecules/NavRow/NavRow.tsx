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
      className={`flex flex-${orientation} w-56  text-xl font-light text-${
        textColor || 'black'
      }  cursor-pointer  pl-2 py-1 items-center`}
      onClick={onClick}
    >
      <div className=" w-full hover:bg-gray-700 transition p-2 mr-2 ">
        <Icon iconSize="sm" iconType={iconType} iconColor={iconColor} />
        <span className="pl-4 font-georama">{rowText}</span>
      </div>
    </div>
  );
};

export default NavRow;
