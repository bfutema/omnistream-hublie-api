import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAssociationJobsVacanciesTagsUseCase } from '@modules/associations/usecases/UpdateAssociationJobsVacanciesTag/UpdateAssociationJobsVacanciesTagsUseCase';

class UpdateAssociationJobsVacanciesTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAssociationJobsVacanciesTagsUseCase = container.resolve(UpdateAssociationJobsVacanciesTagsUseCase);

    const updatedAssociationJobsVacanciesTags = await updateAssociationJobsVacanciesTagsUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAssociationJobsVacanciesTags));
  }
}

const INSTANCE = new UpdateAssociationJobsVacanciesTagsController();

export { INSTANCE as UpdateAssociationJobsVacanciesTagsController };
