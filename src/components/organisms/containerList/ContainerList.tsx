import React from 'react';

import Container from '../../molecules/container/Container';
import SelectableList from '../selectableList/SelectableList';
import { useContainerListDispatch } from './hooks/useContainerListDispatch';

interface ContainerListProps {
  title: string;
  iconSize?: 'lg' | 'md' | 'sm';
  iconColors?: 'white' | 'black' | 'green' | 'yellow' | 'red';
}

const ContainerList = ({
  title,
  iconSize = 'lg',
  iconColors = 'black',
}: ContainerListProps) => {
  const { applyTableStatusFilter } = useContainerListDispatch();

  return (
    <SelectableList
      className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 overflow-auto pt-2"
      defaultSelectedIndex={0}
    >
      <Container
        iconSize="lg"
        iconType="folder"
        iconColor="black"
        backgroundColor="blue"
        labelBody="All Projects"
        labelTitle="28"
        onClick={() => applyTableStatusFilter('A')}
      />
      <Container
        iconSize="lg"
        iconType="info"
        iconColor="black"
        backgroundColor="yellow"
        labelBody="Yellow Projects"
        labelTitle="12"
        onClick={() => applyTableStatusFilter('Y')}
      />
      <Container
        iconSize="lg"
        iconType="warning"
        iconColor="black"
        backgroundColor="red"
        labelBody="Red Projects"
        labelTitle="12"
        onClick={() => applyTableStatusFilter('R')}
      />
      <Container
        iconSize="lg"
        iconType="thumbsUp"
        iconColor="black"
        backgroundColor="green"
        labelBody="Green Projects"
        labelTitle="12"
        onClick={() => applyTableStatusFilter('G')}
      />
    </SelectableList>
  );
};

export default ContainerList;
