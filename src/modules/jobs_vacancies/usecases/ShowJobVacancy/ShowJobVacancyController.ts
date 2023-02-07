import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowJobVacancyUseCase } from '@modules/jobs_vacancies/usecases/ShowJobVacancy/ShowJobVacancyUseCase';

class ShowJobVacancyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showJobVacancyUseCase = container.resolve(ShowJobVacancyUseCase);

    const foundedJobVacancy = await showJobVacancyUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedJobVacancy));
  }
}

const INSTANCE = new ShowJobVacancyController();

export { INSTANCE as ShowJobVacancyController };
