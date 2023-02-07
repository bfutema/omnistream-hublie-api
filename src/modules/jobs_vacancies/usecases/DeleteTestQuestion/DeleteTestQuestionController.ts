import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTestQuestionUseCase } from '@modules/jobs_vacancies/usecases/DeleteTestQuestion/DeleteTestQuestionUseCase';

class DeleteTestQuestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTestQuestionUseCase = container.resolve(DeleteTestQuestionUseCase);

    await deleteTestQuestionUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteTestQuestionController();

export { INSTANCE as DeleteTestQuestionController };
