#!/usr/bin/env node

import { createBucket, deleteBucket, putObjects } from "./s3/index.mjs";
import { commandLine } from "./common.mjs";

const { args, command } = commandLine();

switch(command) {
  case "createBucket":
    await createBucket(...args);
    break;
  case "deleteBucket":
    await deleteBucket(...args);
    break;
  // todo: list/delete aborted/unfinished multipart uploads
  case "putObjects":
    await putObjects(...args);
    break;
  default:
    throw new Error("Invalid Command");
}

