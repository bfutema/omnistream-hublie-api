import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowTestQuestionUseCase } from '@modules/jobs_vacancies/usecases/ShowTestQuestion/ShowTestQuestionUseCase';

class ShowTestQuestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTestQuestionUseCase = container.resolve(ShowTestQuestionUseCase);

    const foundedTestQuestion = await showTestQuestionUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedTestQuestion));
  }
}

const INSTANCE = new ShowTestQuestionController();

export { INSTANCE as ShowTestQuestionController };
