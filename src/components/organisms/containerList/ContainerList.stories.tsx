import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import * as IconStories from 'components/atoms/icon/Icon.stories';
import { ContainerProps } from 'components/molecules/container/types';

import ContainerList from './ContainerList';

import { Status } from 'types';

export default {
  title: 'Components/organisms/ContainerList',
  component: ContainerList,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    iconType: IconStories.default.argTypes?.iconType,
    iconColor: IconStories.default.argTypes?.iconColor,
  },
} as ComponentMeta<typeof ContainerList>;

const containers: Partial<ContainerProps & { filterValue: Status }>[] = [
  {
    iconSize: 'lg',
    iconType: 'folder',
    iconColor: 'black',
    backgroundColor: 'blue',
    labelBody: 'All Projects',
    labelTitle: '83',
    filterValue: 'A',
  },
  {
    iconSize: 'lg',
    iconType: 'info',
    iconColor: 'black',
    backgroundColor: 'yellow',
    labelBody: 'Yellow Projects',
    labelTitle: '83',
    filterValue: 'Y',
  },
  {
    iconSize: 'lg',
    iconType: 'warning',
    iconColor: 'black',
    backgroundColor: 'red',
    labelBody: 'Red Projects',
    labelTitle: '83',
    filterValue: 'R',
  },
  {
    iconSize: 'lg',
    iconType: 'thumbsUp',
    iconColor: 'black',
    backgroundColor: 'green',
    labelBody: 'Green Projects',
    labelTitle: '83',
    filterValue: 'G',
  },
];

const Template: ComponentStory<typeof ContainerList> = args => (
  <ContainerList {...args} />
);

export const Standard = Template.bind({});
Standard.args = { containers };
