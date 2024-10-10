import "dotenv/config";
import MasterAutomaton from "./master-automaton";

const app = new MasterAutomaton({
  jobsFile: "/Users/wilson/reeps/automaton/src/jobs/job-test01.json",
});
app.init().then();
