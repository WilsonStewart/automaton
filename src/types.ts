export interface IAutomatonConstructor {}

export interface IMasterAutomatonConstructor extends IAutomatonConstructor {
  jobsFile: string;
}

export interface IWorkerAutomatonConstructor extends IAutomatonConstructor {
  queue: string;
}

export interface IJob {
  name: string;
  displayName: string;
  repeat: string | undefined;
  mainQueue: "main" | "dummy";
  tasks: ITask[];
}

export interface ITask {
  description: string;
  group: number;
  module: string;
  data: TBullJobData;
}

export type TBullJobData = IDevBullJobData;

interface IBaseBullJobDat {
  queue: string;
}

interface IDevBullJobData extends IBaseBullJobDat {
  delay: number;
}
