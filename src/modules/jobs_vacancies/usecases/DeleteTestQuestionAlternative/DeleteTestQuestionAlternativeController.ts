import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTestQuestionAlternativeUseCase } from '@modules/jobs_vacancies/usecases/DeleteTestQuestionAlternative/DeleteTestQuestionAlternativeUseCase';

class DeleteTestQuestionAlternativeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTestQuestionAlternativeUseCase = container.resolve(DeleteTestQuestionAlternativeUseCase);

    await deleteTestQuestionAlternativeUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteTestQuestionAlternativeController();

export { INSTANCE as DeleteTestQuestionAlternativeController };
