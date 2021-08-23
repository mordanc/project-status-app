import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { Header } from './Header';
import * as IconStories from '../../atoms/icon/Icon.stories';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    iconType: IconStories.default.argTypes?.iconType,
    iconColor: IconStories.default.argTypes?.iconColor,
  },
  decorators: [StoryRouter()],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  navItems: [],
};
