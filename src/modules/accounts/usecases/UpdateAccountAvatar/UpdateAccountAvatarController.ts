import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAccountAvatarUseCase } from '@modules/accounts/usecases/UpdateAccountAvatar/UpdateAccountAvatarUseCase';

class UpdateAccountAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAccountAvatarUseCase = container.resolve(UpdateAccountAvatarUseCase);

    const updatedAccountAvatar = await updateAccountAvatarUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAccountAvatar));
  }
}

const INSTANCE = new UpdateAccountAvatarController();

export { INSTANCE as UpdateAccountAvatarController };
