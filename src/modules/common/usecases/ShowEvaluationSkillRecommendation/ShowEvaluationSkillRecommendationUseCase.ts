import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { EvaluationSkillRecommendation } from '../../infra/typeorm/entities/EvaluationSkillRecommendation';
import { IShowEvaluationSkillRecommendation } from '../../dtos/IEvaluationSkillRecommendationDTO';
import { IEvaluationSkillRecommendationsRepository } from '../../repositories/IEvaluationSkillRecommendationsRepository';

@injectable()
class ShowEvaluationSkillRecommendationUseCase {
  constructor(
    @inject('EvaluationSkillRecommendationsRepository')
    private evaluationSkillRecommendationsRepository: IEvaluationSkillRecommendationsRepository,
  ) {}

  public async execute({ id }: IShowEvaluationSkillRecommendation): Promise<EvaluationSkillRecommendation> {
    const evaluationSkillRecommendation = await this.evaluationSkillRecommendationsRepository.findById({ id });

    if (!evaluationSkillRecommendation) {
      throw new AppError('EvaluationSkillRecommendation not found!', 404);
    }

    return evaluationSkillRecommendation;
  }
}

export { ShowEvaluationSkillRecommendationUseCase };
