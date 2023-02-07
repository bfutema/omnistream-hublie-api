import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTestCandidateAnswerUseCase } from '@modules/jobs_vacancies/usecases/UpdateTestCandidateAnswer/UpdateTestCandidateAnswerUseCase';

class UpdateTestCandidateAnswerController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateTestCandidateAnswerUseCase = container.resolve(UpdateTestCandidateAnswerUseCase);

    const updatedTestCandidateAnswer = await updateTestCandidateAnswerUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedTestCandidateAnswer));
  }
}

const INSTANCE = new UpdateTestCandidateAnswerController();

export { INSTANCE as UpdateTestCandidateAnswerController };
