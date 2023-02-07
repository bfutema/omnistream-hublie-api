import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateJobVacancyUseCase } from '@modules/jobs_vacancies/usecases/CreateJobVacancy/CreateJobVacancyUseCase';

class CreateJobVacancyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createJobVacancyUseCase = container.resolve(CreateJobVacancyUseCase);

    const createdJobVacancy = await createJobVacancyUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdJobVacancy));
  }
}

const INSTANCE = new CreateJobVacancyController();

export { INSTANCE as CreateJobVacancyController };
