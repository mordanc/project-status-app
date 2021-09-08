import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import * as IconStories from 'components/atoms/icon/Icon.stories';

import { Header } from './Header';

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

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Standard = Template.bind({});
Standard.args = {
  navItems: [],
};
