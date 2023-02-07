import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowTestQuestionAlternativeUseCase } from '@modules/jobs_vacancies/usecases/ShowTestQuestionAlternative/ShowTestQuestionAlternativeUseCase';

class ShowTestQuestionAlternativeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTestQuestionAlternativeUseCase = container.resolve(ShowTestQuestionAlternativeUseCase);

    const foundedTestQuestionAlternative = await showTestQuestionAlternativeUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedTestQuestionAlternative));
  }
}

const INSTANCE = new ShowTestQuestionAlternativeController();

export { INSTANCE as ShowTestQuestionAlternativeController };
