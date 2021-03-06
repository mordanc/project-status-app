import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'components/molecules/Loading',
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => <Loading />;

export const Error = Template.bind({});
Error.args = {};
