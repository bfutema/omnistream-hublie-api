import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { ProfessionalExperience } from '../infra/typeorm/entities/ProfessionalExperience';

/**
 * Model: ProfessionalExperience
 */
export type IProfessionalExperience = NonFunctionProperties<ProfessionalExperience>;

/**
 * Method: POST
 * Create ProfessionalExperience
 */
export type ICreateProfessionalExperience = PrimitiveProperties<
  Omit<IProfessionalExperience, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST ProfessionalExperience
 */
export type IListProfessionalExperience = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IProfessionalExperience>[] | string[];
};

/**
 * Method: GET
 * SHOW ProfessionalExperience
 */
export type IShowProfessionalExperience = Pick<IProfessionalExperience, 'id'> & {
  relations?: ObjectPropertyNames<IProfessionalExperience>[] | string[];
};

/**
 * Method: PUT
 * Update ProfessionalExperience
 */
export type IUpdateProfessionalExperience = ICreateProfessionalExperience & { id: number };

/**
 * Method: PATCH
 * Update ProfessionalExperience
 */
export type IPartialUpdateProfessionalExperience = Partial<IUpdateProfessionalExperience>;

/**
 * DELETE ProfessionalExperience
 */
export type IDeleteProfessionalExperience = Pick<IUpdateProfessionalExperience, 'id'>;
