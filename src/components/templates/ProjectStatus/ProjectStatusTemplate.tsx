import ContainerList from 'components/organisms/containerList/ContainerList';
import StatusTable from 'components/organisms/statusTable/StatusTable';
import UserMessage from 'components/molecules/userMessage/UserMessage';
import Loading from 'components/molecules/loading/Loading';

import { ProjectStatusProps } from './types';

const buttons = [
  { label: '1', onClick: () => console.log('1') },
  { label: '2', onClick: () => console.log('2') },
  { label: '3', onClick: () => console.log('3') },
  { label: '4', onClick: () => console.log('4') },
];

const ProjectStatusTemplate = ({
  data,
  loading,
  error,
  fetchAndSetData,
}: ProjectStatusProps) => {
  return (
    <div className="h-screen">
      <div className="flex " style={{ height: '90%' }}>
        <div className="w-1/5" />
        <div className="overflow-scroll ml-10 mt-20">
          <ContainerList title="test" />

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
    </div>
  );
};

export default ProjectStatusTemplate;
