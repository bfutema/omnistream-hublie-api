import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateJobVacancyStatusUseCase } from '@modules/jobs_vacancies/usecases/CreateJobVacancyStatu/CreateJobVacancyStatusUseCase';

class CreateJobVacancyStatusController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createJobVacancyStatusUseCase = container.resolve(CreateJobVacancyStatusUseCase);

    const createdJobVacancyStatus = await createJobVacancyStatusUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdJobVacancyStatus));
  }
}

const INSTANCE = new CreateJobVacancyStatusController();

export { INSTANCE as CreateJobVacancyStatusController };
