import { Project } from 'types';

export interface ProjectStatusProps {
  data: Project[];
  loading: any;
  error: any;
  fetchAndSetData: any;
}
