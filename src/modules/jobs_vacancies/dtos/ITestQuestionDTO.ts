import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { TestQuestion } from '../infra/typeorm/entities/TestQuestion';

/**
 * Model: TestQuestion
 */
export type ITestQuestion = NonFunctionProperties<TestQuestion>;

/**
 * Method: POST
 * Create TestQuestion
 */
export type ICreateTestQuestion = PrimitiveProperties<
  Omit<ITestQuestion, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST TestQuestion
 */
export type IListTestQuestion = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ITestQuestion>[] | string[];
};

/**
 * Method: GET
 * SHOW TestQuestion
 */
export type IShowTestQuestion = Pick<ITestQuestion, 'id'> & {
  relations?: ObjectPropertyNames<ITestQuestion>[] | string[];
};

/**
 * Method: PUT
 * Update TestQuestion
 */
export type IUpdateTestQuestion = ICreateTestQuestion & { id: number };

/**
 * Method: PATCH
 * Update TestQuestion
 */
export type IPartialUpdateTestQuestion = Partial<IUpdateTestQuestion>;

/**
 * DELETE TestQuestion
 */
export type IDeleteTestQuestion = Pick<IUpdateTestQuestion, 'id'>;
