import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteJobVacancyStatusUseCase } from '@modules/jobs_vacancies/usecases/DeleteJobVacancyStatu/DeleteJobVacancyStatusUseCase';

class DeleteJobVacancyStatusController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteJobVacancyStatusUseCase = container.resolve(DeleteJobVacancyStatusUseCase);

    await deleteJobVacancyStatusUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteJobVacancyStatusController();

export { INSTANCE as DeleteJobVacancyStatusController };
