import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTestQuestionUseCase } from '@modules/jobs_vacancies/usecases/CreateTestQuestion/CreateTestQuestionUseCase';

class CreateTestQuestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createTestQuestionUseCase = container.resolve(CreateTestQuestionUseCase);

    const createdTestQuestion = await createTestQuestionUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdTestQuestion));
  }
}

const INSTANCE = new CreateTestQuestionController();

export { INSTANCE as CreateTestQuestionController };
