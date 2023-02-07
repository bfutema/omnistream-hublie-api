import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { AssociationJobsVacanciesTags } from '../infra/typeorm/entities/AssociationJobsVacanciesTags';

/**
 * Model: AssociationJobsVacanciesTags
 */
export type IAssociationJobsVacanciesTags = NonFunctionProperties<AssociationJobsVacanciesTags>;

/**
 * Method: POST
 * Create AssociationJobsVacanciesTags
 */
export type ICreateAssociationJobsVacanciesTags = PrimitiveProperties<
  Omit<IAssociationJobsVacanciesTags, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST AssociationJobsVacanciesTags
 */
export type IListAssociationJobsVacanciesTags = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IAssociationJobsVacanciesTags>[] | string[];
};

/**
 * Method: GET
 * SHOW AssociationJobsVacanciesTags
 */
export type IShowAssociationJobsVacanciesTags = Pick<IAssociationJobsVacanciesTags, 'id'> & {
  relations?: ObjectPropertyNames<IAssociationJobsVacanciesTags>[] | string[];
};

/**
 * Method: PUT
 * Update AssociationJobsVacanciesTags
 */
export type IUpdateAssociationJobsVacanciesTags = ICreateAssociationJobsVacanciesTags & { id: number };

/**
 * Method: PATCH
 * Update AssociationJobsVacanciesTags
 */
export type IPartialUpdateAssociationJobsVacanciesTags = Partial<IUpdateAssociationJobsVacanciesTags>;

/**
 * DELETE AssociationJobsVacanciesTags
 */
export type IDeleteAssociationJobsVacanciesTags = Pick<IUpdateAssociationJobsVacanciesTags, 'id'>;
