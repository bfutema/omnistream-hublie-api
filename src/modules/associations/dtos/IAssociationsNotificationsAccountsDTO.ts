import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AssociationsNotificationsAccounts } from '../infra/typeorm/entities/AssociationsNotificationsAccounts';

/**
 * Model: AssociationsNotificationsAccounts
 */
export type IAssociationsNotificationsAccounts = NonFunctionProperties<AssociationsNotificationsAccounts>;

/**
 * Method: POST
 * Create AssociationsNotificationsAccounts
 */
export type ICreateAssociationsNotificationsAccounts = PrimitiveProperties<
  Omit<IAssociationsNotificationsAccounts, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AssociationsNotificationsAccounts
 */
export type IListAssociationsNotificationsAccounts = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAssociationsNotificationsAccounts>[] | string[];
};

/**
 * Method: GET
 * SHOW AssociationsNotificationsAccounts
 */
export type IShowAssociationsNotificationsAccounts = Pick<IAssociationsNotificationsAccounts, 'id'> & {
  relations?: ObjectPropertyNames<IAssociationsNotificationsAccounts>[] | string[];
};

/**
 * Method: PUT
 * Update AssociationsNotificationsAccounts
 */
export type IUpdateAssociationsNotificationsAccounts = ICreateAssociationsNotificationsAccounts & { id: number };

/**
 * Method: PATCH
 * Update AssociationsNotificationsAccounts
 */
export type IPartialUpdateAssociationsNotificationsAccounts = Partial<IUpdateAssociationsNotificationsAccounts>;

/**
 * DELETE AssociationsNotificationsAccounts
 */
export type IDeleteAssociationsNotificationsAccounts = Pick<IUpdateAssociationsNotificationsAccounts, 'id'>;
