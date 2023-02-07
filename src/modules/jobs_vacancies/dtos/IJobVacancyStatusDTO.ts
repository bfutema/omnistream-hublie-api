import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { JobVacancyStatus } from '../infra/typeorm/entities/JobVacancyStatus';

/**
 * Model: JobVacancyStatus
 */
export type IJobVacancyStatus = NonFunctionProperties<JobVacancyStatus>;

/**
 * Method: POST
 * Create JobVacancyStatus
 */
export type ICreateJobVacancyStatus = PrimitiveProperties<
  Omit<IJobVacancyStatus, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST JobVacancyStatus
 */
export type IListJobVacancyStatus = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IJobVacancyStatus>[] | string[];
};

/**
 * Method: GET
 * SHOW JobVacancyStatus
 */
export type IShowJobVacancyStatus = Pick<IJobVacancyStatus, 'id'> & {
  relations?: ObjectPropertyNames<IJobVacancyStatus>[] | string[];
};

/**
 * Method: PUT
 * Update JobVacancyStatus
 */
export type IUpdateJobVacancyStatus = ICreateJobVacancyStatus & { id: number };

/**
 * Method: PATCH
 * Update JobVacancyStatus
 */
export type IPartialUpdateJobVacancyStatus = Partial<IUpdateJobVacancyStatus>;

/**
 * DELETE JobVacancyStatus
 */
export type IDeleteJobVacancyStatus = Pick<IUpdateJobVacancyStatus, 'id'>;
