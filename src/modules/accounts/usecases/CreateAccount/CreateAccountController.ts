import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from '@modules/accounts/usecases/CreateAccount/CreateAccountUseCase';

class CreateAccountController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const createdAccount = await createAccountUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAccount));
  }
}

const INSTANCE = new CreateAccountController();

export { INSTANCE as CreateAccountController };
