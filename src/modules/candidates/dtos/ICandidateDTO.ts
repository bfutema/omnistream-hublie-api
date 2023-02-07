import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Candidate } from '../infra/typeorm/entities/Candidate';

/**
 * Model: Candidate
 */
export type ICandidate = NonFunctionProperties<Candidate>;

/**
 * Method: POST
 * Create Candidate
 */
export type ICreateCandidate = PrimitiveProperties<
  Omit<ICandidate, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Candidate
 */
export type IListCandidate = {
  query?: IQuery;
  relations?: ObjectPropertyNames<ICandidate>[] | string[];
};

/**
 * Method: GET
 * SHOW Candidate
 */
export type IShowCandidate = Pick<ICandidate, 'id'> & {
  relations?: ObjectPropertyNames<ICandidate>[] | string[];
};

/**
 * Method: PUT
 * Update Candidate
 */
export type IUpdateCandidate = ICreateCandidate & { id: number };

/**
 * Method: PATCH
 * Update Candidate
 */
export type IPartialUpdateCandidate = Partial<IUpdateCandidate>;

/**
 * DELETE Candidate
 */
export type IDeleteCandidate = Pick<IUpdateCandidate, 'id'>;
