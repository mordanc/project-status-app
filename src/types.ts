export type Status = 'R' | 'G' | 'Y' | 'A';

export enum StatusTypes {
  ALL_PROJECTS = 'blue',
  RED_PROJECTS = 'red',
  YELLOW_PROJECTS = 'yellow',
  GREEN_PROJECTS = 'green',
}

export type Project = {
  id: number;
  projectManager: string;
  projectName: string;
  overallStatus: Status;
  percentageComplete: number;
  modifiedDate: string;
};
