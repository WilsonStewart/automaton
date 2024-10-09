import Automaton, { IAutomatonConstructor } from "./automaton";
import queueUpJob from "./generate-job";

class MasterAutomaton extends Automaton {

  jobsFile: string
  
  constructor(params: IMasterAutomatonConstructor){
    super()

    this.jobsFile = params.jobsFile
  }

  async init() {
    this.processJobsFile()
  }

  processJobsFile() {
    const jobs = JSON.parse(await fs.readFile(this.jobsFile))

    jobs.forEach(job => {
      queueUpJob(job, this.mainQueue)
    });
  }
}

export interface IMasterAutomatonConstructor extends IAutomatonConstructor {
  jobsFile: string
}

export default MasterAutomaton