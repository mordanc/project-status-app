import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { useProjectStatusState } from 'pages/ProjectStatusPage/hooks/useProjectStatusState';

import ProjectStatus from './ProjectStatusTemplate';

export default {
  title: 'components/templates/ProjectStatus',
  component: ProjectStatus,
  decorators: [
    StoryRouter(),
    story => <Provider store={store}>{story()}</Provider>,
  ],
} as ComponentMeta<typeof ProjectStatus>;

const Template: ComponentStory<typeof ProjectStatus> = args => {
  const { data, loading, error, fetchAndSetData } = useProjectStatusState(
    false,
  );

  return <ProjectStatus {...{ args, data, error, loading, fetchAndSetData }} />;
};

export const Default = Template.bind({});
Default.args = {};
