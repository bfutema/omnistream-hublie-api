import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAssociationJobsVacanciesTagsUseCase } from '@modules/associations/usecases/ShowAssociationJobsVacanciesTag/ShowAssociationJobsVacanciesTagsUseCase';

class ShowAssociationJobsVacanciesTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAssociationJobsVacanciesTagsUseCase = container.resolve(ShowAssociationJobsVacanciesTagsUseCase);

    const foundedAssociationJobsVacanciesTags = await showAssociationJobsVacanciesTagsUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAssociationJobsVacanciesTags));
  }
}

const INSTANCE = new ShowAssociationJobsVacanciesTagsController();

export { INSTANCE as ShowAssociationJobsVacanciesTagsController };
