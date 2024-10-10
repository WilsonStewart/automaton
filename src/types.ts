export interface IMasterAutomatonConstructor extends IAutomatonConstructor {
  jobsFile: string;
}

export interface IAutomatonConstructor {}

export interface IJob {
  name: string;
  displayName: string;
  repeat: string | false;
  tasks: ITask[];
}

export interface ITask {
  description: string;
  group: number;
  module: string;
  params: any;
}
