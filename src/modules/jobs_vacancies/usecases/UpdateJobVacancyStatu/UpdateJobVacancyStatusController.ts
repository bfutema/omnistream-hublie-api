import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateJobVacancyStatusUseCase } from '@modules/jobs_vacancies/usecases/UpdateJobVacancyStatu/UpdateJobVacancyStatusUseCase';

class UpdateJobVacancyStatusController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateJobVacancyStatusUseCase = container.resolve(UpdateJobVacancyStatusUseCase);

    const updatedJobVacancyStatus = await updateJobVacancyStatusUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedJobVacancyStatus));
  }
}

const INSTANCE = new UpdateJobVacancyStatusController();

export { INSTANCE as UpdateJobVacancyStatusController };
