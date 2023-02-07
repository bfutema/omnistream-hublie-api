import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsRecruitersJobsVacancies } from '../../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';
import { IUpdateAssociationsRecruitersJobsVacancies } from '../../dtos/IAssociationsRecruitersJobsVacanciesDTO';
import { IAssociationsRecruitersJobsVacanciesRepository } from '../../repositories/IAssociationsRecruitersJobsVacanciesRepository';

@injectable()
class UpdateAssociationsRecruitersJobsVacanciesUseCase {
  constructor(
    @inject('AssociationsRecruitersJobsVacanciesRepository')
    private associationsRecruitersJobsVacanciesRepository: IAssociationsRecruitersJobsVacanciesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAssociationsRecruitersJobsVacancies): Promise<AssociationsRecruitersJobsVacancies> {
    const foundedAssociationsRecruitersJobsVacanciesById = await this.associationsRecruitersJobsVacanciesRepository.findById({ id });

    if (!foundedAssociationsRecruitersJobsVacanciesById) {
      throw new AppError('AssociationsRecruitersJobsVacancies not found!', 404);
    }

    await this.associationsRecruitersJobsVacanciesRepository.save({ ...foundedAssociationsRecruitersJobsVacanciesById, ...rest });

    const updatedAssociationsRecruitersJobsVacancies = await this.associationsRecruitersJobsVacanciesRepository.findById({ id });

    return updatedAssociationsRecruitersJobsVacancies;
  }
}

export { UpdateAssociationsRecruitersJobsVacanciesUseCase };
