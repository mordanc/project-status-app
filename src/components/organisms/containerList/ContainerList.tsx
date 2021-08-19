import { ContainerProps } from '@chakra-ui/react';
import React from 'react';
import Container from '../../molecules/container/Container';

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
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 overflow-auto pt-2">
      <Container
        iconSize="lg"
        iconType="folder"
        iconColor="black"
        backgroundColor="blue"
        labelBody="All Projects"
        labelTitle="28"
        statusFilterValue="A"
      />
      <Container
        iconSize="lg"
        iconType="info"
        iconColor="black"
        backgroundColor="yellow"
        labelBody="Yellow Projects"
        labelTitle="12"
        statusFilterValue="Y"
      />
      <Container
        iconSize="lg"
        iconType="warning"
        iconColor="black"
        backgroundColor="red"
        labelBody="Red Projects"
        labelTitle="12"
        statusFilterValue="R"
      />
      <Container
        iconSize="lg"
        iconType="thumbsUp"
        iconColor="black"
        backgroundColor="green"
        labelBody="Green Projects"
        labelTitle="12"
        statusFilterValue="G"
      />
    </div>
  );
};

export default ContainerList;
