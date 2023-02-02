import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DoubleStackOidcStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'double-stack-oidc-bukect-test', {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });

      const s3Buckettwo = new s3.Bucket(this, 'double-stack-oidc-bukect-test-two', {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });
  }
}
