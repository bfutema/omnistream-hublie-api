import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { TestCandidateAnswer } from '../infra/typeorm/entities/TestCandidateAnswer';

/**
 * Model: TestCandidateAnswer
 */
export type ITestCandidateAnswer = NonFunctionProperties<TestCandidateAnswer>;

/**
 * Method: POST
 * Create TestCandidateAnswer
 */
export type ICreateTestCandidateAnswer = PrimitiveProperties<
  Omit<ITestCandidateAnswer, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST TestCandidateAnswer
 */
export type IListTestCandidateAnswer = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ITestCandidateAnswer>[] | string[];
};

/**
 * Method: GET
 * SHOW TestCandidateAnswer
 */
export type IShowTestCandidateAnswer = Pick<ITestCandidateAnswer, 'id'> & {
  relations?: ObjectPropertyNames<ITestCandidateAnswer>[] | string[];
};

/**
 * Method: PUT
 * Update TestCandidateAnswer
 */
export type IUpdateTestCandidateAnswer = ICreateTestCandidateAnswer & { id: number };

/**
 * Method: PATCH
 * Update TestCandidateAnswer
 */
export type IPartialUpdateTestCandidateAnswer = Partial<IUpdateTestCandidateAnswer>;

/**
 * DELETE TestCandidateAnswer
 */
export type IDeleteTestCandidateAnswer = Pick<IUpdateTestCandidateAnswer, 'id'>;
