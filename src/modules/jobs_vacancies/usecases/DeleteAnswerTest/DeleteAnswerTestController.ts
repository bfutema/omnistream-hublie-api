import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAnswerTestUseCase } from '@modules/jobs_vacancies/usecases/DeleteAnswerTest/DeleteAnswerTestUseCase';

class DeleteAnswerTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAnswerTestUseCase = container.resolve(DeleteAnswerTestUseCase);

    await deleteAnswerTestUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAnswerTestController();

export { INSTANCE as DeleteAnswerTestController };
