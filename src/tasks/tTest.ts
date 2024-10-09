import TBasic from "./tBasic";

interface tTestConfig {
  delayCompletion?: number;
}

class TTest extends TBasic {
  delayCompletion?: number;

  constructor(config?: tTestConfig) {
    super();
    if (config?.delayCompletion) {
      this.delayCompletion = config.delayCompletion;
    }
  }
}

export default TTest;
