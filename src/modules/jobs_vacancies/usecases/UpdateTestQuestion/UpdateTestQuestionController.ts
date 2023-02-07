import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTestQuestionUseCase } from '@modules/jobs_vacancies/usecases/UpdateTestQuestion/UpdateTestQuestionUseCase';

class UpdateTestQuestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateTestQuestionUseCase = container.resolve(UpdateTestQuestionUseCase);

    const updatedTestQuestion = await updateTestQuestionUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedTestQuestion));
  }
}

const INSTANCE = new UpdateTestQuestionController();

export { INSTANCE as UpdateTestQuestionController };
