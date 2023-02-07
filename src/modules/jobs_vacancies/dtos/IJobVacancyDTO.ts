import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { JobVacancy } from '../infra/typeorm/entities/JobVacancy';

/**
 * Model: JobVacancy
 */
export type IJobVacancy = NonFunctionProperties<JobVacancy>;

/**
 * Method: POST
 * Create JobVacancy
 */
export type ICreateJobVacancy = PrimitiveProperties<
  Omit<IJobVacancy, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST JobVacancy
 */
export type IListJobVacancy = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IJobVacancy>[] | string[];
};

/**
 * Method: GET
 * SHOW JobVacancy
 */
export type IShowJobVacancy = Pick<IJobVacancy, 'id'> & {
  relations?: ObjectPropertyNames<IJobVacancy>[] | string[];
};

/**
 * Method: PUT
 * Update JobVacancy
 */
export type IUpdateJobVacancy = ICreateJobVacancy & { id: number };

/**
 * Method: PATCH
 * Update JobVacancy
 */
export type IPartialUpdateJobVacancy = Partial<IUpdateJobVacancy>;

/**
 * DELETE JobVacancy
 */
export type IDeleteJobVacancy = Pick<IUpdateJobVacancy, 'id'>;
