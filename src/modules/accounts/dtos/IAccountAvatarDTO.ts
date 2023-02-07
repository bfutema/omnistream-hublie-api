import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AccountAvatar } from '../infra/typeorm/entities/AccountAvatar';

/**
 * Model: AccountAvatar
 */
export type IAccountAvatar = NonFunctionProperties<AccountAvatar>;

/**
 * Method: POST
 * Create AccountAvatar
 */
export type ICreateAccountAvatar = PrimitiveProperties<
  Omit<IAccountAvatar, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AccountAvatar
 */
export type IListAccountAvatar = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAccountAvatar>[] | string[];
};

/**
 * Method: GET
 * SHOW AccountAvatar
 */
export type IShowAccountAvatar = Pick<IAccountAvatar, 'id'> & {
  relations?: ObjectPropertyNames<IAccountAvatar>[] | string[];
};

/**
 * Method: PUT
 * Update AccountAvatar
 */
export type IUpdateAccountAvatar = ICreateAccountAvatar & { id: number };

/**
 * Method: PATCH
 * Update AccountAvatar
 */
export type IPartialUpdateAccountAvatar = Partial<IUpdateAccountAvatar>;

/**
 * DELETE AccountAvatar
 */
export type IDeleteAccountAvatar = Pick<IUpdateAccountAvatar, 'id'>;
