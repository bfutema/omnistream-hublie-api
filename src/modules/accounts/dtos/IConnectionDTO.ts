import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Connection } from '../infra/typeorm/entities/Connection';

/**
 * Model: Connection
 */
export type IConnection = NonFunctionProperties<Connection>;

/**
 * Method: POST
 * Create Connection
 */
export type ICreateConnection = PrimitiveProperties<
  Omit<IConnection, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Connection
 */
export type IListConnection = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IConnection>[] | string[];
};

/**
 * Method: GET
 * SHOW Connection
 */
export type IShowConnection = Pick<IConnection, 'id'> & {
  relations?: ObjectPropertyNames<IConnection>[] | string[];
};

/**
 * Method: PUT
 * Update Connection
 */
export type IUpdateConnection = ICreateConnection & { id: number };

/**
 * Method: PATCH
 * Update Connection
 */
export type IPartialUpdateConnection = Partial<IUpdateConnection>;

/**
 * DELETE Connection
 */
export type IDeleteConnection = Pick<IUpdateConnection, 'id'>;
