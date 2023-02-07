import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEvaluationUseCase } from '@modules/common/usecases/CreateEvaluation/CreateEvaluationUseCase';

class CreateEvaluationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createEvaluationUseCase = container.resolve(CreateEvaluationUseCase);

    const createdEvaluation = await createEvaluationUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdEvaluation));
  }
}

const INSTANCE = new CreateEvaluationController();

export { INSTANCE as CreateEvaluationController };
