import { ContainerProps } from 'components/molecules/container/types';

import { Status } from 'types';

export interface ContainerListProps {
  containers?: Partial<ContainerProps & { filterValue: Status }>[];
}
