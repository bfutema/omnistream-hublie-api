import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAssociationsRecruitersJobsVacanciesUseCase } from '@modules/associations/usecases/ShowAssociationsRecruitersJobsVacancy/ShowAssociationsRecruitersJobsVacanciesUseCase';

class ShowAssociationsRecruitersJobsVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAssociationsRecruitersJobsVacanciesUseCase = container.resolve(ShowAssociationsRecruitersJobsVacanciesUseCase);

    const foundedAssociationsRecruitersJobsVacancies = await showAssociationsRecruitersJobsVacanciesUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAssociationsRecruitersJobsVacancies));
  }
}

const INSTANCE = new ShowAssociationsRecruitersJobsVacanciesController();

export { INSTANCE as ShowAssociationsRecruitersJobsVacanciesController };
