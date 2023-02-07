import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTagUseCase } from '@modules/common/usecases/UpdateTag/UpdateTagUseCase';

class UpdateTagController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateTagUseCase = container.resolve(UpdateTagUseCase);

    const updatedTag = await updateTagUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedTag));
  }
}

const INSTANCE = new UpdateTagController();

export { INSTANCE as UpdateTagController };
