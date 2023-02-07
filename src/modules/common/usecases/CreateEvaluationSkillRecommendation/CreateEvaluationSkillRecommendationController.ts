import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEvaluationSkillRecommendationUseCase } from '@modules/common/usecases/CreateEvaluationSkillRecommendation/CreateEvaluationSkillRecommendationUseCase';

class CreateEvaluationSkillRecommendationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createEvaluationSkillRecommendationUseCase = container.resolve(CreateEvaluationSkillRecommendationUseCase);

    const createdEvaluationSkillRecommendation = await createEvaluationSkillRecommendationUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdEvaluationSkillRecommendation));
  }
}

const INSTANCE = new CreateEvaluationSkillRecommendationController();

export { INSTANCE as CreateEvaluationSkillRecommendationController };
