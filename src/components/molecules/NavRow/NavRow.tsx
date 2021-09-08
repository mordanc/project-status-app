import { Link } from 'react-router-dom';

import Icon from 'components/atoms/icon/Icon';

import { NavRowProps } from './types';

const NavRow = ({
  rowText,
  orientation = 'row',
  iconType,
  iconColor,
  textColor,
  isFocused,
  onClick,
  route,
}: NavRowProps) => {
  return (
    <Link to={`/${route}`}>
      <div
        className={`flex flex-${orientation} w-56  text-xl font-light text-${
          textColor || 'black'
        }  cursor-pointer  pl-2 py-1 items-center`}
        onClick={onClick}
      >
        <div
          className={`w-full hover:bg-gray-700 ${
            isFocused && 'bg-gray-700'
          } transition p-2 mr-2 rounded`}
        >
          <Icon iconSize="sm" iconType={iconType} iconColor={iconColor} />
          <span className="pl-4 font-georama">{rowText}</span>
        </div>
      </div>
    </Link>
  );
};

export default NavRow;
