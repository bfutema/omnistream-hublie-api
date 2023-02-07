import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAssociationsRecruitersJobsVacanciesUseCase } from '@modules/associations/usecases/DeleteAssociationsRecruitersJobsVacancy/DeleteAssociationsRecruitersJobsVacanciesUseCase';

class DeleteAssociationsRecruitersJobsVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAssociationsRecruitersJobsVacanciesUseCase = container.resolve(DeleteAssociationsRecruitersJobsVacanciesUseCase);

    await deleteAssociationsRecruitersJobsVacanciesUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAssociationsRecruitersJobsVacanciesController();

export { INSTANCE as DeleteAssociationsRecruitersJobsVacanciesController };
