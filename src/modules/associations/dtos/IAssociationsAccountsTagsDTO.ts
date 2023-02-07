import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AssociationsAccountsTags } from '../infra/typeorm/entities/AssociationsAccountsTags';

/**
 * Model: AssociationsAccountsTags
 */
export type IAssociationsAccountsTags = NonFunctionProperties<AssociationsAccountsTags>;

/**
 * Method: POST
 * Create AssociationsAccountsTags
 */
export type ICreateAssociationsAccountsTags = PrimitiveProperties<
  Omit<IAssociationsAccountsTags, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AssociationsAccountsTags
 */
export type IListAssociationsAccountsTags = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAssociationsAccountsTags>[] | string[];
};

/**
 * Method: GET
 * SHOW AssociationsAccountsTags
 */
export type IShowAssociationsAccountsTags = Pick<IAssociationsAccountsTags, 'id'> & {
  relations?: ObjectPropertyNames<IAssociationsAccountsTags>[] | string[];
};

/**
 * Method: PUT
 * Update AssociationsAccountsTags
 */
export type IUpdateAssociationsAccountsTags = ICreateAssociationsAccountsTags & { id: number };

/**
 * Method: PATCH
 * Update AssociationsAccountsTags
 */
export type IPartialUpdateAssociationsAccountsTags = Partial<IUpdateAssociationsAccountsTags>;

/**
 * DELETE AssociationsAccountsTags
 */
export type IDeleteAssociationsAccountsTags = Pick<IUpdateAssociationsAccountsTags, 'id'>;
