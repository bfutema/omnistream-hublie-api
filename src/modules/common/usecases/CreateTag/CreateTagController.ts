import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTagUseCase } from '@modules/common/usecases/CreateTag/CreateTagUseCase';

class CreateTagController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createTagUseCase = container.resolve(CreateTagUseCase);

    const createdTag = await createTagUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdTag));
  }
}

const INSTANCE = new CreateTagController();

export { INSTANCE as CreateTagController };
