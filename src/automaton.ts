// automaton

import { Queue } from "bullmq";

class Automaton {
  mainQueue: Queue;
  dummyQueue: Queue;
  queues: {
    main: Queue;
    dummy: Queue;
  };

  constructor() {
    this.mainQueue = new Queue("main", {
      connection: {
        host: "localhost",
        port: 8000,
      },
    });
    this.dummyQueue = new Queue("dummy", {
      connection: {
        host: "localhost",
        port: 8000,
      },
    });

    this.queues = {
      main: this.mainQueue,
      dummy: this.dummyQueue,
    };
  }
}

export default Automaton;
