#!/usr/bin/env node

import { invalidate } from "./cloudFront/index.mjs";
import { commandLine } from "./common.mjs";
import { putObjects } from "./s3/index.mjs";

/**
 * 
 * @param {string} Bucket 
 * @param {string} DistributionId 
 */
const deploy = async (Bucket, DistributionId) => {
    await putObjects(Bucket);
    await invalidate(DistributionId);
};

const { args, command } = commandLine();

switch(command) {
  case "deploy":
    await deploy(...args);
    break;
  default:
    throw new Error("Invalid Command");
}
