import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import ContainerList from './ContainerList';
import * as IconStories from '../../atoms/icon/Icon.stories';

export default {
  title: 'Components/organisms/ContainerList',
  component: ContainerList,
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    iconType: IconStories.default.argTypes?.iconType,
    iconColor: IconStories.default.argTypes?.iconColor,
  },
  decorators: [StoryRouter()],
} as ComponentMeta<typeof ContainerList>;

const Template: ComponentStory<typeof ContainerList> = args => (
  <ContainerList {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'hey',
};
