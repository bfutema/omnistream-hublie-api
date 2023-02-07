import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteConnectionUseCase } from '@modules/accounts/usecases/DeleteConnection/DeleteConnectionUseCase';

class DeleteConnectionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteConnectionUseCase = container.resolve(DeleteConnectionUseCase);

    await deleteConnectionUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteConnectionController();

export { INSTANCE as DeleteConnectionController };
