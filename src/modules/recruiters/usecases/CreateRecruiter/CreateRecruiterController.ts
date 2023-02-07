import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRecruiterUseCase } from '@modules/recruiters/usecases/CreateRecruiter/CreateRecruiterUseCase';

class CreateRecruiterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createRecruiterUseCase = container.resolve(CreateRecruiterUseCase);

    const createdRecruiter = await createRecruiterUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdRecruiter));
  }
}

const INSTANCE = new CreateRecruiterController();

export { INSTANCE as CreateRecruiterController };
