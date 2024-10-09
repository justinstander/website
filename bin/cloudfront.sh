#!/bin/bash

function distribution_create() {
  aws cloudfront create-distribution --distribution-config file://config/cloudfront/aws-cloudfront-distribution-config.json
}

"$@"
