import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAccountAvatarUseCase } from '@modules/accounts/usecases/DeleteAccountAvatar/DeleteAccountAvatarUseCase';

class DeleteAccountAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAccountAvatarUseCase = container.resolve(DeleteAccountAvatarUseCase);

    await deleteAccountAvatarUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAccountAvatarController();

export { INSTANCE as DeleteAccountAvatarController };
