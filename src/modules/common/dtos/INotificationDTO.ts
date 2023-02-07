import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Notification } from '../infra/typeorm/entities/Notification';

/**
 * Model: Notification
 */
export type INotification = NonFunctionProperties<Notification>;

/**
 * Method: POST
 * Create Notification
 */
export type ICreateNotification = PrimitiveProperties<
  Omit<INotification, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Notification
 */
export type IListNotification = {
  query?: IQuery;
  relations?: ObjectPropertyNames<INotification>[] | string[];
};

/**
 * Method: GET
 * SHOW Notification
 */
export type IShowNotification = Pick<INotification, 'id'> & {
  relations?: ObjectPropertyNames<INotification>[] | string[];
};

/**
 * Method: PUT
 * Update Notification
 */
export type IUpdateNotification = ICreateNotification & { id: number };

/**
 * Method: PATCH
 * Update Notification
 */
export type IPartialUpdateNotification = Partial<IUpdateNotification>;

/**
 * DELETE Notification
 */
export type IDeleteNotification = Pick<IUpdateNotification, 'id'>;
