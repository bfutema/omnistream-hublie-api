import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAnswerTestUseCase } from '@modules/jobs_vacancies/usecases/ShowAnswerTest/ShowAnswerTestUseCase';

class ShowAnswerTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAnswerTestUseCase = container.resolve(ShowAnswerTestUseCase);

    const foundedAnswerTest = await showAnswerTestUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAnswerTest));
  }
}

const INSTANCE = new ShowAnswerTestController();

export { INSTANCE as ShowAnswerTestController };
