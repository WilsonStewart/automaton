import "dotenv/config";
import Automaton from "./automaton";
import MasterAutomaton from "./master";

const app = new MasterAutomaton({jobsFile: "jobs.json"})
app.init().then(
    
)
