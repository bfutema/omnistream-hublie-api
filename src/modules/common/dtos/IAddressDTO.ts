import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Address } from '../infra/typeorm/entities/Address';

/**
 * Model: Address
 */
export type IAddress = NonFunctionProperties<Address>;

/**
 * Method: POST
 * Create Address
 */
export type ICreateAddress = PrimitiveProperties<
  Omit<IAddress, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Address
 */
export type IListAddress = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAddress>[] | string[];
};

/**
 * Method: GET
 * SHOW Address
 */
export type IShowAddress = Pick<IAddress, 'id'> & {
  relations?: ObjectPropertyNames<IAddress>[] | string[];
};

/**
 * Method: PUT
 * Update Address
 */
export type IUpdateAddress = ICreateAddress & { id: number };

/**
 * Method: PATCH
 * Update Address
 */
export type IPartialUpdateAddress = Partial<IUpdateAddress>;

/**
 * DELETE Address
 */
export type IDeleteAddress = Pick<IUpdateAddress, 'id'>;
