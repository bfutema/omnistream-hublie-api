import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Curriculum } from '../infra/typeorm/entities/Curriculum';

/**
 * Model: Curriculum
 */
export type ICurriculum = NonFunctionProperties<Curriculum>;

/**
 * Method: POST
 * Create Curriculum
 */
export type ICreateCurriculum = PrimitiveProperties<
  Omit<ICurriculum, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Curriculum
 */
export type IListCurriculum = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ICurriculum>[] | string[];
};

/**
 * Method: GET
 * SHOW Curriculum
 */
export type IShowCurriculum = Pick<ICurriculum, 'id'> & {
  relations?: ObjectPropertyNames<ICurriculum>[] | string[];
};

/**
 * Method: PUT
 * Update Curriculum
 */
export type IUpdateCurriculum = ICreateCurriculum & { id: number };

/**
 * Method: PATCH
 * Update Curriculum
 */
export type IPartialUpdateCurriculum = Partial<IUpdateCurriculum>;

/**
 * DELETE Curriculum
 */
export type IDeleteCurriculum = Pick<IUpdateCurriculum, 'id'>;
