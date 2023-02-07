import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTestQuestionAlternativeUseCase } from '@modules/jobs_vacancies/usecases/CreateTestQuestionAlternative/CreateTestQuestionAlternativeUseCase';

class CreateTestQuestionAlternativeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createTestQuestionAlternativeUseCase = container.resolve(CreateTestQuestionAlternativeUseCase);

    const createdTestQuestionAlternative = await createTestQuestionAlternativeUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdTestQuestionAlternative));
  }
}

const INSTANCE = new CreateTestQuestionAlternativeController();

export { INSTANCE as CreateTestQuestionAlternativeController };
