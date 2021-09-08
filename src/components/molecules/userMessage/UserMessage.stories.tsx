import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserMessage from './UserMessage';

export default {
  title: 'components/molecules/UserMessage',
  component: UserMessage,
  argTypes: {},
} as ComponentMeta<typeof UserMessage>;

const Template: ComponentStory<typeof UserMessage> = args => (
  <UserMessage {...args} />
);

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
};

const buttons = [
  { label: 'Retry', onClick: () => alert('Retry button clicked') },
];
export const Error = Template.bind({});
Error.args = {
  label: 'Oops! Something went wrong. Please try again',
  buttons: buttons,
};
