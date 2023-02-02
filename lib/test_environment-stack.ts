import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';
import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TestEnvironmentStack extends Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      const key = new kms.Key(this, 'my-kms-key', {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        pendingWindow: cdk.Duration.days(7),
        alias: 'alias/testenvkey',
        description: 'KMS key for encrypting the objects in an S3 bucket',
        enableKeyRotation: false,
      });

      const key2 = new kms.Key(this, 'dev-kms-key', {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        pendingWindow: cdk.Duration.days(7),
        alias: 'alias/testenvkey',
        description: 'KMS key for encrypting the objects in an S3 bucket',
        enableKeyRotation: false,
      });
    }
  }