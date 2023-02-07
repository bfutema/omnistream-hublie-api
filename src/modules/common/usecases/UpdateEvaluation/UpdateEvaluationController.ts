import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateEvaluationUseCase } from '@modules/common/usecases/UpdateEvaluation/UpdateEvaluationUseCase';

class UpdateEvaluationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateEvaluationUseCase = container.resolve(UpdateEvaluationUseCase);

    const updatedEvaluation = await updateEvaluationUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedEvaluation));
  }
}

const INSTANCE = new UpdateEvaluationController();

export { INSTANCE as UpdateEvaluationController };
