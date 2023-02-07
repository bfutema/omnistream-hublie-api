import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Evaluation } from '../infra/typeorm/entities/Evaluation';

/**
 * Model: Evaluation
 */
export type IEvaluation = NonFunctionProperties<Evaluation>;

/**
 * Method: POST
 * Create Evaluation
 */
export type ICreateEvaluation = PrimitiveProperties<
  Omit<IEvaluation, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Evaluation
 */
export type IListEvaluation = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IEvaluation>[] | string[];
};

/**
 * Method: GET
 * SHOW Evaluation
 */
export type IShowEvaluation = Pick<IEvaluation, 'id'> & {
  relations?: ObjectPropertyNames<IEvaluation>[] | string[];
};

/**
 * Method: PUT
 * Update Evaluation
 */
export type IUpdateEvaluation = ICreateEvaluation & { id: number };

/**
 * Method: PATCH
 * Update Evaluation
 */
export type IPartialUpdateEvaluation = Partial<IUpdateEvaluation>;

/**
 * DELETE Evaluation
 */
export type IDeleteEvaluation = Pick<IUpdateEvaluation, 'id'>;
