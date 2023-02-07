import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteEvaluationSkillRecommendation } from '../../dtos/IEvaluationSkillRecommendationDTO';
import { IEvaluationSkillRecommendationsRepository } from '../../repositories/IEvaluationSkillRecommendationsRepository';

@injectable()
class DeleteEvaluationSkillRecommendationUseCase {
  constructor(
    @inject('EvaluationSkillRecommendationsRepository')
    private evaluationSkillRecommendationsRepository: IEvaluationSkillRecommendationsRepository,
  ) {}

  public async execute({ id }: IDeleteEvaluationSkillRecommendation): Promise<void> {
    const foundedEvaluationSkillRecommendation = await this.evaluationSkillRecommendationsRepository.findById({ id });

    if (!foundedEvaluationSkillRecommendation) {
      throw new AppError('EvaluationSkillRecommendation not found!', 404);
    }

    await this.evaluationSkillRecommendationsRepository.delete(id);
  }
}

export { DeleteEvaluationSkillRecommendationUseCase };
