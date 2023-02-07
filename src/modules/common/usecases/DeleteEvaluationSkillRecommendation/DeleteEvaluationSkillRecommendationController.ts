import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteEvaluationSkillRecommendationUseCase } from '@modules/common/usecases/DeleteEvaluationSkillRecommendation/DeleteEvaluationSkillRecommendationUseCase';

class DeleteEvaluationSkillRecommendationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEvaluationSkillRecommendationUseCase = container.resolve(DeleteEvaluationSkillRecommendationUseCase);

    await deleteEvaluationSkillRecommendationUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteEvaluationSkillRecommendationController();

export { INSTANCE as DeleteEvaluationSkillRecommendationController };
