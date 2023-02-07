import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAnswerTestUseCase } from '@modules/jobs_vacancies/usecases/CreateAnswerTest/CreateAnswerTestUseCase';

class CreateAnswerTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAnswerTestUseCase = container.resolve(CreateAnswerTestUseCase);

    const createdAnswerTest = await createAnswerTestUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAnswerTest));
  }
}

const INSTANCE = new CreateAnswerTestController();

export { INSTANCE as CreateAnswerTestController };
