import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Recruiter } from '../infra/typeorm/entities/Recruiter';

/**
 * Model: Recruiter
 */
export type IRecruiter = NonFunctionProperties<Recruiter>;

/**
 * Method: POST
 * Create Recruiter
 */
export type ICreateRecruiter = PrimitiveProperties<
  Omit<IRecruiter, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Recruiter
 */
export type IListRecruiter = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IRecruiter>[] | string[];
};

/**
 * Method: GET
 * SHOW Recruiter
 */
export type IShowRecruiter = Pick<IRecruiter, 'id'> & {
  relations?: ObjectPropertyNames<IRecruiter>[] | string[];
};

/**
 * Method: PUT
 * Update Recruiter
 */
export type IUpdateRecruiter = ICreateRecruiter & { id: number };

/**
 * Method: PATCH
 * Update Recruiter
 */
export type IPartialUpdateRecruiter = Partial<IUpdateRecruiter>;

/**
 * DELETE Recruiter
 */
export type IDeleteRecruiter = Pick<IUpdateRecruiter, 'id'>;
