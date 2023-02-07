import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Link } from '../infra/typeorm/entities/Link';

/**
 * Model: Link
 */
export type ILink = NonFunctionProperties<Link>;

/**
 * Method: POST
 * Create Link
 */
export type ICreateLink = PrimitiveProperties<
  Omit<ILink, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Link
 */
export type IListLink = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ILink>[] | string[];
};

/**
 * Method: GET
 * SHOW Link
 */
export type IShowLink = Pick<ILink, 'id'> & {
  relations?: ObjectPropertyNames<ILink>[] | string[];
};

/**
 * Method: PUT
 * Update Link
 */
export type IUpdateLink = ICreateLink & { id: number };

/**
 * Method: PATCH
 * Update Link
 */
export type IPartialUpdateLink = Partial<IUpdateLink>;

/**
 * DELETE Link
 */
export type IDeleteLink = Pick<IUpdateLink, 'id'>;
