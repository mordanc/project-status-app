import { Project } from 'types';

export interface ProjectStatusProps {
  navTextColor?: 'white' | 'black';
  useRealData?: boolean;
  data: Project[];
  loading: any;
  error: any;
  fetchAndSetData: any;
}
