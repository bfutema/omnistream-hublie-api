import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProfileUseCase } from '@modules/accounts/usecases/CreateProfile/CreateProfileUseCase';

class CreateProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createProfileUseCase = container.resolve(CreateProfileUseCase);

    const createdProfile = await createProfileUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdProfile));
  }
}

const INSTANCE = new CreateProfileController();

export { INSTANCE as CreateProfileController };
