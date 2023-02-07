import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowEvaluationUseCase } from '@modules/common/usecases/ShowEvaluation/ShowEvaluationUseCase';

class ShowEvaluationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showEvaluationUseCase = container.resolve(ShowEvaluationUseCase);

    const foundedEvaluation = await showEvaluationUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedEvaluation));
  }
}

const INSTANCE = new ShowEvaluationController();

export { INSTANCE as ShowEvaluationController };
