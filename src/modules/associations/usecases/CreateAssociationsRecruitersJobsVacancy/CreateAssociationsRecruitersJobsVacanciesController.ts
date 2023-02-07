import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAssociationsRecruitersJobsVacanciesUseCase } from '@modules/associations/usecases/CreateAssociationsRecruitersJobsVacancy/CreateAssociationsRecruitersJobsVacanciesUseCase';

class CreateAssociationsRecruitersJobsVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAssociationsRecruitersJobsVacanciesUseCase = container.resolve(CreateAssociationsRecruitersJobsVacanciesUseCase);

    const createdAssociationsRecruitersJobsVacancies = await createAssociationsRecruitersJobsVacanciesUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAssociationsRecruitersJobsVacancies));
  }
}

const INSTANCE = new CreateAssociationsRecruitersJobsVacanciesController();

export { INSTANCE as CreateAssociationsRecruitersJobsVacanciesController };
