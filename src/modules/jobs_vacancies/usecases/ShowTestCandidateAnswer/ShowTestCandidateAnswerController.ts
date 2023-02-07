import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowTestCandidateAnswerUseCase } from '@modules/jobs_vacancies/usecases/ShowTestCandidateAnswer/ShowTestCandidateAnswerUseCase';

class ShowTestCandidateAnswerController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTestCandidateAnswerUseCase = container.resolve(ShowTestCandidateAnswerUseCase);

    const foundedTestCandidateAnswer = await showTestCandidateAnswerUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedTestCandidateAnswer));
  }
}

const INSTANCE = new ShowTestCandidateAnswerController();

export { INSTANCE as ShowTestCandidateAnswerController };
