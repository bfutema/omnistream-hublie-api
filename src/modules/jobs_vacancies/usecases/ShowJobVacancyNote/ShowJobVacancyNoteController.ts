import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowJobVacancyNoteUseCase } from '@modules/jobs_vacancies/usecases/ShowJobVacancyNote/ShowJobVacancyNoteUseCase';

class ShowJobVacancyNoteController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showJobVacancyNoteUseCase = container.resolve(ShowJobVacancyNoteUseCase);

    const foundedJobVacancyNote = await showJobVacancyNoteUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedJobVacancyNote));
  }
}

const INSTANCE = new ShowJobVacancyNoteController();

export { INSTANCE as ShowJobVacancyNoteController };
