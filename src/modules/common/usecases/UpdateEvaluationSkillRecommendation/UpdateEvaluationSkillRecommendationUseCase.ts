import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { EvaluationSkillRecommendation } from '../../infra/typeorm/entities/EvaluationSkillRecommendation';
import { IUpdateEvaluationSkillRecommendation } from '../../dtos/IEvaluationSkillRecommendationDTO';
import { IEvaluationSkillRecommendationsRepository } from '../../repositories/IEvaluationSkillRecommendationsRepository';

@injectable()
class UpdateEvaluationSkillRecommendationUseCase {
  constructor(
    @inject('EvaluationSkillRecommendationsRepository')
    private evaluationSkillRecommendationsRepository: IEvaluationSkillRecommendationsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateEvaluationSkillRecommendation): Promise<EvaluationSkillRecommendation> {
    const foundedEvaluationSkillRecommendationById = await this.evaluationSkillRecommendationsRepository.findById({ id });

    if (!foundedEvaluationSkillRecommendationById) {
      throw new AppError('EvaluationSkillRecommendation not found!', 404);
    }

    await this.evaluationSkillRecommendationsRepository.save({ ...foundedEvaluationSkillRecommendationById, ...rest });

    const updatedEvaluationSkillRecommendation = await this.evaluationSkillRecommendationsRepository.findById({ id });

    return updatedEvaluationSkillRecommendation;
  }
}

export { UpdateEvaluationSkillRecommendationUseCase };
