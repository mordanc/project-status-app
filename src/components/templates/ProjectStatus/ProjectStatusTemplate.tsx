import ContainerList from 'components/organisms/containerList/ContainerList';
import StatusTable from 'components/organisms/statusTable/StatusTable';
import UserMessage from 'components/molecules/userMessage/UserMessage';
import Loading from 'components/molecules/loading/Loading';
import { ContainerProps } from 'components/molecules/container/types';

import { Status } from 'types';
import { ProjectStatusProps } from './types';

const buttons = [
  { label: '1', onClick: () => console.log('1') },
  { label: '2', onClick: () => console.log('2') },
  { label: '3', onClick: () => console.log('3') },
  { label: '4', onClick: () => console.log('4') },
];

// make the container component itself get the number of projects by its filterValue
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

const ProjectStatusTemplate = ({
  data,
  loading,
  error,
  fetchAndSetData,
}: ProjectStatusProps) => {
  return (
    <div className="flex">
      <div className="md:overflow-auto md:ml-10 md:mt-20">
        <ContainerList containers={containers} />

        {loading ? (
          <Loading color="hi" />
        ) : error ? (
          <UserMessage
            label="Oops! Something went wrong, please try again."
            buttons={[{ label: 'Retry', onClick: fetchAndSetData }]}
          />
        ) : (
          <StatusTable buttons={buttons} apiData={data} />
        )}
      </div>
    </div>
  );
};

export default ProjectStatusTemplate;
