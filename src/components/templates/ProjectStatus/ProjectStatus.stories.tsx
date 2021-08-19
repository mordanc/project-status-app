import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider } from 'react-redux';

import ProjectStatus from './ProjectStatus';
import { store } from '../../../app/store';

export default {
  title: 'components/templates/ProjectStatus',
  component: ProjectStatus,
  decorators: [
    StoryRouter(),
    story => <Provider store={store}>{story()}</Provider>,
  ],
} as ComponentMeta<typeof ProjectStatus>;

const Template: ComponentStory<typeof ProjectStatus> = args => (
  <ProjectStatus {...args} />
);

export const Light = Template.bind({});
Light.args = {
  useRealData: false,
  navTextColor: 'white',
};

export const Dark = Template.bind({});
Dark.args = {
  useRealData: false,
  navTextColor: 'black',
};
