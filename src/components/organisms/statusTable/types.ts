import { Buttons } from 'components/molecules/buttonGroup/types';

import { Project, Status } from 'types';

export interface StatusTableProps {
  buttons: Buttons[];
  apiData?: Project[];
}

export type NumberOfProjects = { [k in Status]: number };

export interface RowData {
  id: number;
  projectName: string;
  projectManager: string;
  overallStatus: Status;
  percentageComplete: number;
  modifiedDate: string;
}
