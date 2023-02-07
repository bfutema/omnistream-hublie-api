import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteJobVacancyUseCase } from '@modules/jobs_vacancies/usecases/DeleteJobVacancy/DeleteJobVacancyUseCase';

class DeleteJobVacancyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteJobVacancyUseCase = container.resolve(DeleteJobVacancyUseCase);

    await deleteJobVacancyUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteJobVacancyController();

export { INSTANCE as DeleteJobVacancyController };
