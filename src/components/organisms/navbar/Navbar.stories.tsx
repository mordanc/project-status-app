import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import * as IconStories from 'components/atoms/icon/Icon.stories';

import Navbar from './Navbar';

export default {
  title: 'Components/organisms/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: {
      options: ['red', 'green', 'yellow', 'purple', 'white'],
      control: { type: 'select' },
    },
    iconType: IconStories.default.argTypes?.iconType,
    iconColor: IconStories.default.argTypes?.iconColor,
  },
  decorators: [StoryRouter()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  navItems: [],
};
