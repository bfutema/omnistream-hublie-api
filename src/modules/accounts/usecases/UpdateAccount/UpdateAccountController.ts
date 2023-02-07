import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAccountUseCase } from '@modules/accounts/usecases/UpdateAccount/UpdateAccountUseCase';

class UpdateAccountController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAccountUseCase = container.resolve(UpdateAccountUseCase);

    const updatedAccount = await updateAccountUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAccount));
  }
}

const INSTANCE = new UpdateAccountController();

export { INSTANCE as UpdateAccountController };
