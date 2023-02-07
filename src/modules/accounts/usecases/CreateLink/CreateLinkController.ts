import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateLinkUseCase } from '@modules/accounts/usecases/CreateLink/CreateLinkUseCase';

class CreateLinkController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createLinkUseCase = container.resolve(CreateLinkUseCase);

    const createdLink = await createLinkUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdLink));
  }
}

const INSTANCE = new CreateLinkController();

export { INSTANCE as CreateLinkController };
