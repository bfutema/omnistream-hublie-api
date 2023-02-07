import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsRecruitersJobsVacancies } from '../../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';
import { IShowAssociationsRecruitersJobsVacancies } from '../../dtos/IAssociationsRecruitersJobsVacanciesDTO';
import { IAssociationsRecruitersJobsVacanciesRepository } from '../../repositories/IAssociationsRecruitersJobsVacanciesRepository';

@injectable()
class ShowAssociationsRecruitersJobsVacanciesUseCase {
  constructor(
    @inject('AssociationsRecruitersJobsVacanciesRepository')
    private associationsRecruitersJobsVacanciesRepository: IAssociationsRecruitersJobsVacanciesRepository,
  ) {}

  public async execute({ id }: IShowAssociationsRecruitersJobsVacancies): Promise<AssociationsRecruitersJobsVacancies> {
    const associationsRecruitersJobsVacancies = await this.associationsRecruitersJobsVacanciesRepository.findById({ id });

    if (!associationsRecruitersJobsVacancies) {
      throw new AppError('AssociationsRecruitersJobsVacancies not found!', 404);
    }

    return associationsRecruitersJobsVacancies;
  }
}

export { ShowAssociationsRecruitersJobsVacanciesUseCase };
