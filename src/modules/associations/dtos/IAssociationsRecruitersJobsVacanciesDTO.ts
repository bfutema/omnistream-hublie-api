import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AssociationsRecruitersJobsVacancies } from '../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';

/**
 * Model: AssociationsRecruitersJobsVacancies
 */
export type IAssociationsRecruitersJobsVacancies = NonFunctionProperties<AssociationsRecruitersJobsVacancies>;

/**
 * Method: POST
 * Create AssociationsRecruitersJobsVacancies
 */
export type ICreateAssociationsRecruitersJobsVacancies = PrimitiveProperties<
  Omit<IAssociationsRecruitersJobsVacancies, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AssociationsRecruitersJobsVacancies
 */
export type IListAssociationsRecruitersJobsVacancies = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAssociationsRecruitersJobsVacancies>[] | string[];
};

/**
 * Method: GET
 * SHOW AssociationsRecruitersJobsVacancies
 */
export type IShowAssociationsRecruitersJobsVacancies = Pick<IAssociationsRecruitersJobsVacancies, 'id'> & {
  relations?: ObjectPropertyNames<IAssociationsRecruitersJobsVacancies>[] | string[];
};

/**
 * Method: PUT
 * Update AssociationsRecruitersJobsVacancies
 */
export type IUpdateAssociationsRecruitersJobsVacancies = ICreateAssociationsRecruitersJobsVacancies & { id: number };

/**
 * Method: PATCH
 * Update AssociationsRecruitersJobsVacancies
 */
export type IPartialUpdateAssociationsRecruitersJobsVacancies = Partial<IUpdateAssociationsRecruitersJobsVacancies>;

/**
 * DELETE AssociationsRecruitersJobsVacancies
 */
export type IDeleteAssociationsRecruitersJobsVacancies = Pick<IUpdateAssociationsRecruitersJobsVacancies, 'id'>;
