import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowConnectionUseCase } from '@modules/accounts/usecases/ShowConnection/ShowConnectionUseCase';

class ShowConnectionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showConnectionUseCase = container.resolve(ShowConnectionUseCase);

    const foundedConnection = await showConnectionUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedConnection));
  }
}

const INSTANCE = new ShowConnectionController();

export { INSTANCE as ShowConnectionController };
