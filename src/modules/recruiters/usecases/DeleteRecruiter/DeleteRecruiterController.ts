import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteRecruiterUseCase } from '@modules/recruiters/usecases/DeleteRecruiter/DeleteRecruiterUseCase';

class DeleteRecruiterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRecruiterUseCase = container.resolve(DeleteRecruiterUseCase);

    await deleteRecruiterUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteRecruiterController();

export { INSTANCE as DeleteRecruiterController };
