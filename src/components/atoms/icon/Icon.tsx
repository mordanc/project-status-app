import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconLookup } from './utils';

import { IconProps } from './types';

const Icon = ({
  iconSize,
  iconColor = 'black',
  iconType = 'folder',
}: IconProps) => {
  const iconSizeNum =
    iconSize === 'lg' ? '5x' : iconSize === 'md' ? '3x' : '1x';
  const icon = iconLookup[iconType];
  return <FontAwesomeIcon size={iconSizeNum} color={iconColor} icon={icon} />;
};

export default Icon;
