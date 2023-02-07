import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Account } from '../infra/typeorm/entities/Account';

/**
 * Model: Account
 */
export type IAccount = NonFunctionProperties<Account>;

/**
 * Method: POST
 * Create Account
 */
export type ICreateAccount = PrimitiveProperties<
  Omit<IAccount, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Account
 */
export type IListAccount = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAccount>[] | string[];
};

/**
 * Method: GET
 * SHOW Account
 */
export type IShowAccount = Pick<IAccount, 'id'> & {
  relations?: ObjectPropertyNames<IAccount>[] | string[];
};

/**
 * Method: PUT
 * Update Account
 */
export type IUpdateAccount = ICreateAccount & { id: number };

/**
 * Method: PATCH
 * Update Account
 */
export type IPartialUpdateAccount = Partial<IUpdateAccount>;

/**
 * DELETE Account
 */
export type IDeleteAccount = Pick<IUpdateAccount, 'id'>;
