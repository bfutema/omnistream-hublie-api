import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTestCandidateAnswerUseCase } from '@modules/jobs_vacancies/usecases/CreateTestCandidateAnswer/CreateTestCandidateAnswerUseCase';

class CreateTestCandidateAnswerController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createTestCandidateAnswerUseCase = container.resolve(CreateTestCandidateAnswerUseCase);

    const createdTestCandidateAnswer = await createTestCandidateAnswerUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdTestCandidateAnswer));
  }
}

const INSTANCE = new CreateTestCandidateAnswerController();

export { INSTANCE as CreateTestCandidateAnswerController };
