import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAssociationJobsVacanciesTagsUseCase } from '@modules/associations/usecases/CreateAssociationJobsVacanciesTag/CreateAssociationJobsVacanciesTagsUseCase';

class CreateAssociationJobsVacanciesTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAssociationJobsVacanciesTagsUseCase = container.resolve(CreateAssociationJobsVacanciesTagsUseCase);

    const createdAssociationJobsVacanciesTags = await createAssociationJobsVacanciesTagsUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAssociationJobsVacanciesTags));
  }
}

const INSTANCE = new CreateAssociationJobsVacanciesTagsController();

export { INSTANCE as CreateAssociationJobsVacanciesTagsController };
