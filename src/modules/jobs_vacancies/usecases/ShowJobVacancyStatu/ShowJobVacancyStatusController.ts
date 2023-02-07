import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowJobVacancyStatusUseCase } from '@modules/jobs_vacancies/usecases/ShowJobVacancyStatu/ShowJobVacancyStatusUseCase';

class ShowJobVacancyStatusController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showJobVacancyStatusUseCase = container.resolve(ShowJobVacancyStatusUseCase);

    const foundedJobVacancyStatus = await showJobVacancyStatusUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedJobVacancyStatus));
  }
}

const INSTANCE = new ShowJobVacancyStatusController();

export { INSTANCE as ShowJobVacancyStatusController };
