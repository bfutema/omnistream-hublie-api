import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { TestQuestionAlternative } from '../infra/typeorm/entities/TestQuestionAlternative';

/**
 * Model: TestQuestionAlternative
 */
export type ITestQuestionAlternative = NonFunctionProperties<TestQuestionAlternative>;

/**
 * Method: POST
 * Create TestQuestionAlternative
 */
export type ICreateTestQuestionAlternative = PrimitiveProperties<
  Omit<ITestQuestionAlternative, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST TestQuestionAlternative
 */
export type IListTestQuestionAlternative = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ITestQuestionAlternative>[] | string[];
};

/**
 * Method: GET
 * SHOW TestQuestionAlternative
 */
export type IShowTestQuestionAlternative = Pick<ITestQuestionAlternative, 'id'> & {
  relations?: ObjectPropertyNames<ITestQuestionAlternative>[] | string[];
};

/**
 * Method: PUT
 * Update TestQuestionAlternative
 */
export type IUpdateTestQuestionAlternative = ICreateTestQuestionAlternative & { id: number };

/**
 * Method: PATCH
 * Update TestQuestionAlternative
 */
export type IPartialUpdateTestQuestionAlternative = Partial<IUpdateTestQuestionAlternative>;

/**
 * DELETE TestQuestionAlternative
 */
export type IDeleteTestQuestionAlternative = Pick<IUpdateTestQuestionAlternative, 'id'>;
