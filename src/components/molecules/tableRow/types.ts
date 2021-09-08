import { Status } from 'types';

export interface TableRowProps {
  projectManager: string;
  projectName: string;
  overallStatus: Status;
  percentageComplete: number;
  modifiedDate: string;
  children: JSX.Element[];
}
