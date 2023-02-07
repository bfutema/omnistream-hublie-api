import { getRepository } from 'typeorm';

import { IEvaluationSkillRecommendationsRepository } from '@modules/commons/repositories/IEvaluationSkillRecommendationsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { EvaluationSkillRecommendation } from '../entities/EvaluationSkillRecommendation';

class EvaluationSkillRecommendationsRepository
  extends BaseRepository<EvaluationSkillRecommendation>
  implements IEvaluationSkillRecommendationsRepository {
    constructor() {
      super(getRepository(EvaluationSkillRecommendation));
    }
  }

export { EvaluationSkillRecommendationsRepository };
