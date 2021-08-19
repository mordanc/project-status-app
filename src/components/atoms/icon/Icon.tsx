import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProps } from './types';
import { iconLookup } from './utils';

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
