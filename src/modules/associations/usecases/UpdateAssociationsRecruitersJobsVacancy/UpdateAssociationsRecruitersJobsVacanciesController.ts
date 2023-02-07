import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAssociationsRecruitersJobsVacanciesUseCase } from '@modules/associations/usecases/UpdateAssociationsRecruitersJobsVacancy/UpdateAssociationsRecruitersJobsVacanciesUseCase';

class UpdateAssociationsRecruitersJobsVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAssociationsRecruitersJobsVacanciesUseCase = container.resolve(UpdateAssociationsRecruitersJobsVacanciesUseCase);

    const updatedAssociationsRecruitersJobsVacancies = await updateAssociationsRecruitersJobsVacanciesUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAssociationsRecruitersJobsVacancies));
  }
}

const INSTANCE = new UpdateAssociationsRecruitersJobsVacanciesController();

export { INSTANCE as UpdateAssociationsRecruitersJobsVacanciesController };
