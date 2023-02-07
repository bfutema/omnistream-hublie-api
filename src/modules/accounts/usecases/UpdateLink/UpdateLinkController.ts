import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateLinkUseCase } from '@modules/accounts/usecases/UpdateLink/UpdateLinkUseCase';

class UpdateLinkController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateLinkUseCase = container.resolve(UpdateLinkUseCase);

    const updatedLink = await updateLinkUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedLink));
  }
}

const INSTANCE = new UpdateLinkController();

export { INSTANCE as UpdateLinkController };
