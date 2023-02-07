import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAccountUseCase } from '@modules/accounts/usecases/ShowAccount/ShowAccountUseCase';

class ShowAccountController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAccountUseCase = container.resolve(ShowAccountUseCase);

    const foundedAccount = await showAccountUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAccount));
  }
}

const INSTANCE = new ShowAccountController();

export { INSTANCE as ShowAccountController };
