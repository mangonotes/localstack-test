#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdklocalStack } from '../lib/cdklocal-stack';
import {S3BucketStack} from '../lib/cdklocal-s3-stack'

const app = new cdk.App();
new CdklocalStack(app, 'CdklocalStack');
const s3_bucket_stack = new S3BucketStack(app, 'gefyraS3Stack');

// Re-using assets
const bucket = s3_bucket_stack.bucket;
