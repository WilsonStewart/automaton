import Automaton from "./automaton";
import queueUpJob from "./queue-up-job";
import * as fs from "node:fs/promises";
import { IJob, TBullJobData, IMasterAutomatonConstructor } from "./types";

class MasterAutomaton extends Automaton {
  jobsFile: string;

  constructor(params: IMasterAutomatonConstructor) {
    super();

    this.jobsFile = params.jobsFile;
  }

  async init() {
    console.log("Starting master...");
    this.processJobsFile();
  }

  async processJobsFile() {
    const jobs: IJob[] = JSON.parse(await fs.readFile(this.jobsFile, "utf8"));

    jobs.forEach(async (job) => {
      if (job.repeat) {
      } else {
      }

      job.tasks.sort((a, b) => (a.group > b.group ? -1 : 1));

      var groups: number[] = [];

      job.tasks.forEach((task) => {
        if (!groups.includes(task.group)) {
          groups.push(task.group);
        }
      });
      groups.sort((a, b) => (a > b ? -1 : 1));

      console.log(groups);

      var jobData: TBullJobData;

      if (job.tasks.length > 1) {
        groups.forEach((group) => {
          console.log(`processing group ${group}`);
          job.tasks
            .filter((x) => x.group == group)
            .forEach((task) => {
              console.log(task.description);
            });
          console.log(" ");
        });
      } else if (job.tasks.length === 1) {
        let result = await this.queues[job.mainQueue].upsertJobScheduler(
          job.name,
          {
            pattern: job.repeat,
          },
          {
            data: job.tasks[0].data,
          }
        );

        console.log(`Scheduled a job: ${result.name}`);
      }
    });

    // jobs.forEach((job: IJob) => {
    //   queueUpJob(job, this.mainQueue);
    // });
  }
}

export default MasterAutomaton;
