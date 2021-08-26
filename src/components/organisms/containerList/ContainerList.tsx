import { ContainerProps } from 'components/molecules/container/types';
import React from 'react';
import { Status } from 'types';

import Container from '../../molecules/container/Container';
import SelectableList from '../selectableList/SelectableList';
import { useContainerListDispatch } from './hooks/useContainerListDispatch';

interface ContainerListProps {
  containers?: Partial<ContainerProps & { filterValue: Status }>[];
}

export type ContainerPropsList = {};

const ContainerList = ({ containers }: ContainerListProps) => {
  const { applyTableStatusFilter } = useContainerListDispatch();

  return (
    <SelectableList
      className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 overflow-auto pt-2"
      defaultSelectedIndex={0}
    >
      {containers?.map(container => {
        return (
          <Container
            iconSize={container.iconSize || 'lg'}
            iconType={container.iconType || 'circle'}
            iconColor={container.iconColor}
            backgroundColor={container.backgroundColor || 'blue'}
            labelBody={container.labelBody || 'No data'}
            labelTitle={container.labelTitle || 'No data'}
            filterValue={container?.filterValue || 'A'}
            onClick={() =>
              applyTableStatusFilter(container?.filterValue || 'A')
            }
          />
        );
      })}
    </SelectableList>
  );
};

export default ContainerList;
