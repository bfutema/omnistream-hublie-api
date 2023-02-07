import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAssociationsAccountsTagsUseCase } from '@modules/associations/usecases/CreateAssociationsAccountsTag/CreateAssociationsAccountsTagsUseCase';

class CreateAssociationsAccountsTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAssociationsAccountsTagsUseCase = container.resolve(CreateAssociationsAccountsTagsUseCase);

    const createdAssociationsAccountsTags = await createAssociationsAccountsTagsUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAssociationsAccountsTags));
  }
}

const INSTANCE = new CreateAssociationsAccountsTagsController();

export { INSTANCE as CreateAssociationsAccountsTagsController };
