import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faExclamationTriangle,
  faInfoCircle,
  faThumbsUp,
  faPlus,
  faLock,
  faTimesCircle,
  faCircle,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

export interface IconProps {
  iconSize: 'lg' | 'md' | 'sm';
  iconType:
    | 'folder'
    | 'warning'
    | 'info'
    | 'thumbsUp'
    | 'plus'
    | 'lock'
    | 'x'
    | 'circle'
    | 'edit';
  iconColor?: 'white' | 'black' | 'green' | 'yellow' | 'red';
}

const iconLookup = {
  folder: faFolderOpen,
  warning: faExclamationTriangle,
  info: faInfoCircle,
  thumbsUp: faThumbsUp,
  plus: faPlus,
  lock: faLock,
  x: faTimesCircle,
  circle: faCircle,
  edit: faEdit,
};

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
