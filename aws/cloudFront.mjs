#!/usr/bin/env node

import { get, invalidate, list } from "./cloudFront/index.mjs";

import { commandLine } from "./common.mjs";

const { args, command } = commandLine();

switch (command) {
  case "list":
    await list(...args);
    break;
  case "get":
    await get(...args);
    break;
  case "invalidate":
    await invalidate(...args);
    break;
  default:
    throw new Error("Invalid Command");
};
