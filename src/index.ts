import "dotenv/config";
import MasterAutomaton from "./master-automaton";
import WorkerAutomaton from "./worker-automaton";

if (process.env.AUTOMATONMODE == "master") {
  const app = new MasterAutomaton({
    jobsFile: "/Users/wilson/reeps/automaton/src/jobs/job-test02.json",
  });

  app.init();
} else if (process.env.AUTOMATONMODE == "worker") {
  if (process.env.WORKERQUEUE) {
    const app = new WorkerAutomaton({
      queue: process.env.WORKERQUEUE,
    });

    app.init();
  } else {
    throw "Please provide a queue for this worker!";
  }
}
