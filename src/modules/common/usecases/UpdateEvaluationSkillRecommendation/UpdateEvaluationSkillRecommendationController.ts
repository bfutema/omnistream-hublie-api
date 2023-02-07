import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateEvaluationSkillRecommendationUseCase } from '@modules/common/usecases/UpdateEvaluationSkillRecommendation/UpdateEvaluationSkillRecommendationUseCase';

class UpdateEvaluationSkillRecommendationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateEvaluationSkillRecommendationUseCase = container.resolve(UpdateEvaluationSkillRecommendationUseCase);

    const updatedEvaluationSkillRecommendation = await updateEvaluationSkillRecommendationUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedEvaluationSkillRecommendation));
  }
}

const INSTANCE = new UpdateEvaluationSkillRecommendationController();

export { INSTANCE as UpdateEvaluationSkillRecommendationController };
