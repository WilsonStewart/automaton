// automaton

import { Queue } from "bullmq";

class Automaton {
  mainQueue: Queue;

  constructor() {
    this.mainQueue = new Queue("main", {
      connection: {
        host: "localhost",
        port: 8000,
      },
    });
  }
}

export default Automaton;
