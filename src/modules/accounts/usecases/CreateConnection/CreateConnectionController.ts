import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateConnectionUseCase } from '@modules/accounts/usecases/CreateConnection/CreateConnectionUseCase';

class CreateConnectionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createConnectionUseCase = container.resolve(CreateConnectionUseCase);

    const createdConnection = await createConnectionUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdConnection));
  }
}

const INSTANCE = new CreateConnectionController();

export { INSTANCE as CreateConnectionController };
