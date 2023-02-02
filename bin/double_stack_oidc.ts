#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DoubleStackOidcStack } from '../lib/double_stack_oidc-stack';
import { TestEnvironmentStack } from '../lib/test_environment-stack';

const app = new cdk.App();

new DoubleStackOidcStack(app, 'DoubleStackOidcStack', {
  stackName: 'DoubleStackOidcStack'
});

new TestEnvironmentStack(app, 'TestEnvironmentStack', {
  stackName: 'TestEnvironmentStack'
});