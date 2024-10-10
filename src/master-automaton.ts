import Automaton from "./automaton";
import queueUpJob from "./queue-up-job";
import * as fs from "node:fs/promises";
import { IJob, IMasterAutomatonConstructor } from "./types";

class MasterAutomaton extends Automaton {
  jobsFile: string;

  constructor(params: IMasterAutomatonConstructor) {
    super();

    this.jobsFile = params.jobsFile;
  }

  async init() {
    this.processJobsFile();
  }

  async processJobsFile() {
    const jobs: IJob[] = JSON.parse(await fs.readFile(this.jobsFile, "utf8"));

    jobs.forEach((job) => {
      job.tasks.sort((a, b) => (a.group > b.group ? 1 : -1));

      const bob = Object.groupBy(job.tasks, ({ group }) => group);

      console.log(bob.entries);
    });

    // jobs.forEach((job: IJob) => {
    //   queueUpJob(job, this.mainQueue);
    // });
  }
}

export default MasterAutomaton;
