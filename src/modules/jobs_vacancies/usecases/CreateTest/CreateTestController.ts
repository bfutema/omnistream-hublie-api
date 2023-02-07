import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTestUseCase } from '@modules/jobs_vacancies/usecases/CreateTest/CreateTestUseCase';

class CreateTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createTestUseCase = container.resolve(CreateTestUseCase);

    const createdTest = await createTestUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdTest));
  }
}

const INSTANCE = new CreateTestController();

export { INSTANCE as CreateTestController };
