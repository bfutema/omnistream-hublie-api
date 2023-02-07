import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAccountAvatarUseCase } from '@modules/accounts/usecases/ShowAccountAvatar/ShowAccountAvatarUseCase';

class ShowAccountAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAccountAvatarUseCase = container.resolve(ShowAccountAvatarUseCase);

    const foundedAccountAvatar = await showAccountAvatarUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAccountAvatar));
  }
}

const INSTANCE = new ShowAccountAvatarController();

export { INSTANCE as ShowAccountAvatarController };
