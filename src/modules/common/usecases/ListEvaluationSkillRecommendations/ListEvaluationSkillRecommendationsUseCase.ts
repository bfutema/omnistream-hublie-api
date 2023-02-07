import { injectable, inject } from 'tsyringe';

import { EvaluationSkillRecommendation } from '../../infra/typeorm/entities/EvaluationSkillRecommendation';
import { IListEvaluationSkillRecommendation } from '../../dtos/IEvaluationSkillRecommendationDTO';
import { IEvaluationSkillRecommendationsRepository } from '../../repositories/IEvaluationSkillRecommendationsRepository';

@injectable()
class ListEvaluationSkillRecommendationUseCase {
  constructor(
    @inject('EvaluationSkillRecommendationsRepository')
    private evaluationSkillRecommendationsRepository: IEvaluationSkillRecommendationsRepository,
  ) {}

  public async execute(params: IListEvaluationSkillRecommendation): Promise<[EvaluationSkillRecommendation[], number]> {
    const evaluationSkillRecommendations = await this.evaluationSkillRecommendationsRepository.find(params);

    return evaluationSkillRecommendations;
  }
}

export { ListEvaluationSkillRecommendationUseCase };
