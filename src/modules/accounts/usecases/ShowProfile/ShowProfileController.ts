import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProfileUseCase } from '@modules/accounts/usecases/ShowProfile/ShowProfileUseCase';

class ShowProfileController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProfileUseCase = container.resolve(ShowProfileUseCase);

    const foundedProfile = await showProfileUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedProfile));
  }
}

const INSTANCE = new ShowProfileController();

export { INSTANCE as ShowProfileController };
