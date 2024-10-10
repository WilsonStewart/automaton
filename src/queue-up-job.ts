import { Queue } from "bullmq";
import { IJob } from "./types";

function queueTask(jobConfig: IJob, queue: Queue) {}

export default queueUpJob;
