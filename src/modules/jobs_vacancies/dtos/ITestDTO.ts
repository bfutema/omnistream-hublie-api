import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Test } from '../infra/typeorm/entities/Test';

/**
 * Model: Test
 */
export type ITest = NonFunctionProperties<Test>;

/**
 * Method: POST
 * Create Test
 */
export type ICreateTest = PrimitiveProperties<
  Omit<ITest, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Test
 */
export type IListTest = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ITest>[] | string[];
};

/**
 * Method: GET
 * SHOW Test
 */
export type IShowTest = Pick<ITest, 'id'> & {
  relations?: ObjectPropertyNames<ITest>[] | string[];
};

/**
 * Method: PUT
 * Update Test
 */
export type IUpdateTest = ICreateTest & { id: number };

/**
 * Method: PATCH
 * Update Test
 */
export type IPartialUpdateTest = Partial<IUpdateTest>;

/**
 * DELETE Test
 */
export type IDeleteTest = Pick<IUpdateTest, 'id'>;
