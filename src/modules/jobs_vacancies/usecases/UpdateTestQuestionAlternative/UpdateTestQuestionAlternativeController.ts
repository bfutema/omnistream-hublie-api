import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTestQuestionAlternativeUseCase } from '@modules/jobs_vacancies/usecases/UpdateTestQuestionAlternative/UpdateTestQuestionAlternativeUseCase';

class UpdateTestQuestionAlternativeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateTestQuestionAlternativeUseCase = container.resolve(UpdateTestQuestionAlternativeUseCase);

    const updatedTestQuestionAlternative = await updateTestQuestionAlternativeUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedTestQuestionAlternative));
  }
}

const INSTANCE = new UpdateTestQuestionAlternativeController();

export { INSTANCE as UpdateTestQuestionAlternativeController };
