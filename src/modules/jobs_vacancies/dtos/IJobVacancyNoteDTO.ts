import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { JobVacancyNote } from '../infra/typeorm/entities/JobVacancyNote';

/**
 * Model: JobVacancyNote
 */
export type IJobVacancyNote = NonFunctionProperties<JobVacancyNote>;

/**
 * Method: POST
 * Create JobVacancyNote
 */
export type ICreateJobVacancyNote = PrimitiveProperties<
  Omit<IJobVacancyNote, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST JobVacancyNote
 */
export type IListJobVacancyNote = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IJobVacancyNote>[] | string[];
};

/**
 * Method: GET
 * SHOW JobVacancyNote
 */
export type IShowJobVacancyNote = Pick<IJobVacancyNote, 'id'> & {
  relations?: ObjectPropertyNames<IJobVacancyNote>[] | string[];
};

/**
 * Method: PUT
 * Update JobVacancyNote
 */
export type IUpdateJobVacancyNote = ICreateJobVacancyNote & { id: number };

/**
 * Method: PATCH
 * Update JobVacancyNote
 */
export type IPartialUpdateJobVacancyNote = Partial<IUpdateJobVacancyNote>;

/**
 * DELETE JobVacancyNote
 */
export type IDeleteJobVacancyNote = Pick<IUpdateJobVacancyNote, 'id'>;
