import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Tag } from '../infra/typeorm/entities/Tag';

/**
 * Model: Tag
 */
export type ITag = NonFunctionProperties<Tag>;

/**
 * Method: POST
 * Create Tag
 */
export type ICreateTag = PrimitiveProperties<
  Omit<ITag, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Tag
 */
export type IListTag = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ITag>[] | string[];
};

/**
 * Method: GET
 * SHOW Tag
 */
export type IShowTag = Pick<ITag, 'id'> & {
  relations?: ObjectPropertyNames<ITag>[] | string[];
};

/**
 * Method: PUT
 * Update Tag
 */
export type IUpdateTag = ICreateTag & { id: number };

/**
 * Method: PATCH
 * Update Tag
 */
export type IPartialUpdateTag = Partial<IUpdateTag>;

/**
 * DELETE Tag
 */
export type IDeleteTag = Pick<IUpdateTag, 'id'>;
