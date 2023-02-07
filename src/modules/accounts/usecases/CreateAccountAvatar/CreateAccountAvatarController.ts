import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountAvatarUseCase } from '@modules/accounts/usecases/CreateAccountAvatar/CreateAccountAvatarUseCase';

class CreateAccountAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAccountAvatarUseCase = container.resolve(CreateAccountAvatarUseCase);

    const createdAccountAvatar = await createAccountAvatarUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAccountAvatar));
  }
}

const INSTANCE = new CreateAccountAvatarController();

export { INSTANCE as CreateAccountAvatarController };
