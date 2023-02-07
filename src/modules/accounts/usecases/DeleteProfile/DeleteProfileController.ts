import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProfileUseCase } from '@modules/accounts/usecases/DeleteProfile/DeleteProfileUseCase';

class DeleteProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProfileUseCase = container.resolve(DeleteProfileUseCase);

    await deleteProfileUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteProfileController();

export { INSTANCE as DeleteProfileController };
