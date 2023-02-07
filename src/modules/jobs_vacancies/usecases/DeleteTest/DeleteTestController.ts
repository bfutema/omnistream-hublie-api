import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTestUseCase } from '@modules/jobs_vacancies/usecases/DeleteTest/DeleteTestUseCase';

class DeleteTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTestUseCase = container.resolve(DeleteTestUseCase);

    await deleteTestUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteTestController();

export { INSTANCE as DeleteTestController };
