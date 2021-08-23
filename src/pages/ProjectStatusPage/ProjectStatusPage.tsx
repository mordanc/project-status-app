import { useProjectStatusState } from 'pages/ProjectStatusPage/hooks/useProjectStatusState';
import ProjectStatus from 'components/templates/ProjectStatus/ProjectStatusTemplate';

const ProjectStatusPage = () => {
  const { data, loading, error, fetchAndSetData } = useProjectStatusState();
  return (
    <ProjectStatus
      data={data}
      loading={loading}
      error={error}
      fetchAndSetData={fetchAndSetData}
    />
  );
};

export default ProjectStatusPage;
