import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAddressUseCase } from '@modules/common/usecases/ShowAddres/ShowAddressUseCase';

class ShowAddressController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAddressUseCase = container.resolve(ShowAddressUseCase);

    const foundedAddress = await showAddressUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAddress));
  }
}

const INSTANCE = new ShowAddressController();

export { INSTANCE as ShowAddressController };
