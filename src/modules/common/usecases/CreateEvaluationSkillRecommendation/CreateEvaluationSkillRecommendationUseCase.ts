import { injectable, inject } from 'tsyringe';

import { EvaluationSkillRecommendation } from '../../infra/typeorm/entities/EvaluationSkillRecommendation';
import { ICreateEvaluationSkillRecommendation } from '../../dtos/IEvaluationSkillRecommendationDTO';
import { IEvaluationSkillRecommendationsRepository } from '../../repositories/IEvaluationSkillRecommendationsRepository';

@injectable()
class CreateEvaluationSkillRecommendationUseCase {
  constructor(
    @inject('EvaluationSkillRecommendationsRepository')
    private evaluationSkillRecommendationsRepository: IEvaluationSkillRecommendationsRepository,
  ) {}

  public async execute(data: ICreateEvaluationSkillRecommendation): Promise<EvaluationSkillRecommendation> {
    const { id } = await this.evaluationSkillRecommendationsRepository.create(data);

    const createdEvaluationSkillRecommendation = await this.evaluationSkillRecommendationsRepository.findById({ id });

    return createdEvaluationSkillRecommendation;
  }
}

export { CreateEvaluationSkillRecommendationUseCase };
