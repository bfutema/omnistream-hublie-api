import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAnswerTestUseCase } from '@modules/jobs_vacancies/usecases/UpdateAnswerTest/UpdateAnswerTestUseCase';

class UpdateAnswerTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAnswerTestUseCase = container.resolve(UpdateAnswerTestUseCase);

    const updatedAnswerTest = await updateAnswerTestUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAnswerTest));
  }
}

const INSTANCE = new UpdateAnswerTestController();

export { INSTANCE as UpdateAnswerTestController };
