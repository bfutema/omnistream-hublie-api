import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteEvaluationUseCase } from '@modules/common/usecases/DeleteEvaluation/DeleteEvaluationUseCase';

class DeleteEvaluationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEvaluationUseCase = container.resolve(DeleteEvaluationUseCase);

    await deleteEvaluationUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteEvaluationController();

export { INSTANCE as DeleteEvaluationController };
