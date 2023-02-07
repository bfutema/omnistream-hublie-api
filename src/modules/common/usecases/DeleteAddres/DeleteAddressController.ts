import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAddressUseCase } from '@modules/common/usecases/DeleteAddres/DeleteAddressUseCase';

class DeleteAddressController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAddressUseCase = container.resolve(DeleteAddressUseCase);

    await deleteAddressUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAddressController();

export { INSTANCE as DeleteAddressController };
