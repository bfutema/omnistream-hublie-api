import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateConnectionUseCase } from '@modules/accounts/usecases/UpdateConnection/UpdateConnectionUseCase';

class UpdateConnectionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateConnectionUseCase = container.resolve(UpdateConnectionUseCase);

    const updatedConnection = await updateConnectionUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedConnection));
  }
}

const INSTANCE = new UpdateConnectionController();

export { INSTANCE as UpdateConnectionController };
