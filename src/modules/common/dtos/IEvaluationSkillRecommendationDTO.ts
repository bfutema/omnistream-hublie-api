import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { EvaluationSkillRecommendation } from '../infra/typeorm/entities/EvaluationSkillRecommendation';

/**
 * Model: EvaluationSkillRecommendation
 */
export type IEvaluationSkillRecommendation = NonFunctionProperties<EvaluationSkillRecommendation>;

/**
 * Method: POST
 * Create EvaluationSkillRecommendation
 */
export type ICreateEvaluationSkillRecommendation = PrimitiveProperties<
  Omit<IEvaluationSkillRecommendation, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST EvaluationSkillRecommendation
 */
export type IListEvaluationSkillRecommendation = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IEvaluationSkillRecommendation>[] | string[];
};

/**
 * Method: GET
 * SHOW EvaluationSkillRecommendation
 */
export type IShowEvaluationSkillRecommendation = Pick<IEvaluationSkillRecommendation, 'id'> & {
  relations?: ObjectPropertyNames<IEvaluationSkillRecommendation>[] | string[];
};

/**
 * Method: PUT
 * Update EvaluationSkillRecommendation
 */
export type IUpdateEvaluationSkillRecommendation = ICreateEvaluationSkillRecommendation & { id: number };

/**
 * Method: PATCH
 * Update EvaluationSkillRecommendation
 */
export type IPartialUpdateEvaluationSkillRecommendation = Partial<IUpdateEvaluationSkillRecommendation>;

/**
 * DELETE EvaluationSkillRecommendation
 */
export type IDeleteEvaluationSkillRecommendation = Pick<IUpdateEvaluationSkillRecommendation, 'id'>;
