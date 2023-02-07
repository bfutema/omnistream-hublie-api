import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProfileUseCase } from '@modules/accounts/usecases/UpdateProfile/UpdateProfileUseCase';

class UpdateProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateProfileUseCase = container.resolve(UpdateProfileUseCase);

    const updatedProfile = await updateProfileUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedProfile));
  }
}

const INSTANCE = new UpdateProfileController();

export { INSTANCE as UpdateProfileController };
