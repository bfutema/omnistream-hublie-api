import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressUseCase } from '@modules/common/usecases/CreateAddres/CreateAddressUseCase';

class CreateAddressController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const createdAddress = await createAddressUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAddress));
  }
}

const INSTANCE = new CreateAddressController();

export { INSTANCE as CreateAddressController };
