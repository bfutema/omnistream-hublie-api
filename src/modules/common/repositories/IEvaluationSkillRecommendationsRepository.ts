import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { EvaluationSkillRecommendation } from '../infra/typeorm/entities/EvaluationSkillRecommendation';

export type IEvaluationSkillRecommendationsRepository = IBaseRepository<PrimitiveProperties<EvaluationSkillRecommendation>>;
