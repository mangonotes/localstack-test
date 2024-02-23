import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Duration, Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
export class S3BucketStack extends Stack {
    public readonly bucket: s3.Bucket;
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
    
        // The code that defines your stack goes here
        this.bucket = new s3.Bucket(this, "gefyra-data-collection-dev",{
          versioned: false,
          bucketName: "gefyra-data-collection-dev",
          publicReadAccess: false,
          blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
          removalPolicy: RemovalPolicy.DESTROY
        });
      }
}