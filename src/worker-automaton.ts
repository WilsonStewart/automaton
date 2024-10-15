import { Job, Worker } from "bullmq";
import Automaton from "./automaton";
import { IWorkerAutomatonConstructor } from "./types";
import { splitModuleAndFunction } from "./helper";
import { placeholder } from "./module-dev";

class WorkerAutomaton extends Automaton {
  bullWorker: Worker;

  constructor(params: IWorkerAutomatonConstructor) {
    super();

    this.bullWorker = new Worker(params.queue, this.processBullJob, {
      connection: {
        host: "localhost",
        port: 8000,
      },
    });
  }

  init(): void {
    console.log("Starting worker...");
  }

  async processBullJob(bullJob: Job) {
    let moduleAndAction = splitModuleAndFunction(bullJob.data.action);

    switch (moduleAndAction.module) {
      case "dev":
        switch (moduleAndAction.action) {
          case "placeholder":
            placeholder(bullJob.data.delay);
            break;
        }
        break;
    }
  }
}

export default WorkerAutomaton;
