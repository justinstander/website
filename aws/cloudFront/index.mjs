import { CloudFrontClient, CreateInvalidationCommand, GetDistributionCommand, ListDistributionsCommand } from "@aws-sdk/client-cloudfront";

import { sendCommand } from "../common.mjs";

const send = sendCommand(new CloudFrontClient());

export const get = async (Id) => await send(new GetDistributionCommand({ Id }));

/**
 * 
 * @param {string} DistributionId 
 * @returns 
 */
export const invalidate = async (DistributionId) => await send(
  new CreateInvalidationCommand({
    DistributionId,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: ["/"]
      }
    }
  }
  ));

export const list = async () => await send(new ListDistributionsCommand());
