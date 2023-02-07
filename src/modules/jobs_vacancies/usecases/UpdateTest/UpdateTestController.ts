import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTestUseCase } from '@modules/jobs_vacancies/usecases/UpdateTest/UpdateTestUseCase';

class UpdateTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateTestUseCase = container.resolve(UpdateTestUseCase);

    const updatedTest = await updateTestUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedTest));
  }
}

const INSTANCE = new UpdateTestController();

export { INSTANCE as UpdateTestController };
