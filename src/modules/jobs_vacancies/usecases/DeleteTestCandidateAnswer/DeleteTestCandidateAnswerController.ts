import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTestCandidateAnswerUseCase } from '@modules/jobs_vacancies/usecases/DeleteTestCandidateAnswer/DeleteTestCandidateAnswerUseCase';

class DeleteTestCandidateAnswerController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTestCandidateAnswerUseCase = container.resolve(DeleteTestCandidateAnswerUseCase);

    await deleteTestCandidateAnswerUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteTestCandidateAnswerController();

export { INSTANCE as DeleteTestCandidateAnswerController };
