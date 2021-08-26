import { IconProps } from 'components/atoms/icon/types';
import { LabelProps } from 'components/atoms/label/types';

import type { Status } from '../../../types';

type SubProps = IconProps & LabelProps;

export interface ContainerProps extends SubProps {
  backgroundColor: 'red' | 'green' | 'yellow' | 'purple' | 'white' | 'blue';
  isFocused?: boolean;
  filterValue: Status;
  onClick?(): any;
}
