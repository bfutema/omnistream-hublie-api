import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRecruiterUseCase } from '@modules/recruiters/usecases/UpdateRecruiter/UpdateRecruiterUseCase';

class UpdateRecruiterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateRecruiterUseCase = container.resolve(UpdateRecruiterUseCase);

    const updatedRecruiter = await updateRecruiterUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedRecruiter));
  }
}

const INSTANCE = new UpdateRecruiterController();

export { INSTANCE as UpdateRecruiterController };
