import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAddressUseCase } from '@modules/common/usecases/UpdateAddres/UpdateAddressUseCase';

class UpdateAddressController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

    const updatedAddress = await updateAddressUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAddress));
  }
}

const INSTANCE = new UpdateAddressController();

export { INSTANCE as UpdateAddressController };
