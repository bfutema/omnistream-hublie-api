import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateJobVacancyUseCase } from '@modules/jobs_vacancies/usecases/UpdateJobVacancy/UpdateJobVacancyUseCase';

class UpdateJobVacancyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateJobVacancyUseCase = container.resolve(UpdateJobVacancyUseCase);

    const updatedJobVacancy = await updateJobVacancyUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedJobVacancy));
  }
}

const INSTANCE = new UpdateJobVacancyController();

export { INSTANCE as UpdateJobVacancyController };
