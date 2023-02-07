import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Company } from '../infra/typeorm/entities/Company';

/**
 * Model: Company
 */
export type ICompany = NonFunctionProperties<Company>;

/**
 * Method: POST
 * Create Company
 */
export type ICreateCompany = PrimitiveProperties<
  Omit<ICompany, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Company
 */
export type IListCompany = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ICompany>[] | string[];
};

/**
 * Method: GET
 * SHOW Company
 */
export type IShowCompany = Pick<ICompany, 'id'> & {
  relations?: ObjectPropertyNames<ICompany>[] | string[];
};

/**
 * Method: PUT
 * Update Company
 */
export type IUpdateCompany = ICreateCompany & { id: number };

/**
 * Method: PATCH
 * Update Company
 */
export type IPartialUpdateCompany = Partial<IUpdateCompany>;

/**
 * DELETE Company
 */
export type IDeleteCompany = Pick<IUpdateCompany, 'id'>;
