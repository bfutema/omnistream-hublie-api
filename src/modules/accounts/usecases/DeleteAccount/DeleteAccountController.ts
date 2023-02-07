import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAccountUseCase } from '@modules/accounts/usecases/DeleteAccount/DeleteAccountUseCase';

class DeleteAccountController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAccountUseCase = container.resolve(DeleteAccountUseCase);

    await deleteAccountUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAccountController();

export { INSTANCE as DeleteAccountController };
