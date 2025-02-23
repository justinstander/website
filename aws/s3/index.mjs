import { readFile } from "node:fs/promises";

import {
  CreateBucketCommand,
  DeleteBucketCommand,
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";

import { sendCommand } from "../common.mjs";

const send = sendCommand(new S3Client());

export const createBucket = async (Bucket) => await send(
  new CreateBucketCommand({
    Bucket
  })
);

export const deleteBucket = async (Bucket) => await send(
  new DeleteBucketCommand({
    Bucket
  })
);

/**
 * 
 * @param {string} Bucket 
 * @returns 
 */
export const putObjects = async (Bucket) => await send(
  await new PutObjectCommand({
    Body: await readFile("build/index.html"),
    Bucket,
    ContentType: "text/html",
    Key: "index.html"
  })
);
