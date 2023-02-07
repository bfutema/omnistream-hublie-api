import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AnswerTest } from '../infra/typeorm/entities/AnswerTest';

/**
 * Model: AnswerTest
 */
export type IAnswerTest = NonFunctionProperties<AnswerTest>;

/**
 * Method: POST
 * Create AnswerTest
 */
export type ICreateAnswerTest = PrimitiveProperties<
  Omit<IAnswerTest, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AnswerTest
 */
export type IListAnswerTest = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAnswerTest>[] | string[];
};

/**
 * Method: GET
 * SHOW AnswerTest
 */
export type IShowAnswerTest = Pick<IAnswerTest, 'id'> & {
  relations?: ObjectPropertyNames<IAnswerTest>[] | string[];
};

/**
 * Method: PUT
 * Update AnswerTest
 */
export type IUpdateAnswerTest = ICreateAnswerTest & { id: number };

/**
 * Method: PATCH
 * Update AnswerTest
 */
export type IPartialUpdateAnswerTest = Partial<IUpdateAnswerTest>;

/**
 * DELETE AnswerTest
 */
export type IDeleteAnswerTest = Pick<IUpdateAnswerTest, 'id'>;
