import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowEvaluationSkillRecommendationUseCase } from '@modules/common/usecases/ShowEvaluationSkillRecommendation/ShowEvaluationSkillRecommendationUseCase';

class ShowEvaluationSkillRecommendationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showEvaluationSkillRecommendationUseCase = container.resolve(ShowEvaluationSkillRecommendationUseCase);

    const foundedEvaluationSkillRecommendation = await showEvaluationSkillRecommendationUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedEvaluationSkillRecommendation));
  }
}

const INSTANCE = new ShowEvaluationSkillRecommendationController();

export { INSTANCE as ShowEvaluationSkillRecommendationController };
