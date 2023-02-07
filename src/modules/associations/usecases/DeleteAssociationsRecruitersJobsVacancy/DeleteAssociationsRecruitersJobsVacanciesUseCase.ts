import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAssociationsRecruitersJobsVacancies } from '../../dtos/IAssociationsRecruitersJobsVacanciesDTO';
import { IAssociationsRecruitersJobsVacanciesRepository } from '../../repositories/IAssociationsRecruitersJobsVacanciesRepository';

@injectable()
class DeleteAssociationsRecruitersJobsVacanciesUseCase {
  constructor(
    @inject('AssociationsRecruitersJobsVacanciesRepository')
    private associationsRecruitersJobsVacanciesRepository: IAssociationsRecruitersJobsVacanciesRepository,
  ) {}

  public async execute({ id }: IDeleteAssociationsRecruitersJobsVacancies): Promise<void> {
    const foundedAssociationsRecruitersJobsVacancies = await this.associationsRecruitersJobsVacanciesRepository.findById({ id });

    if (!foundedAssociationsRecruitersJobsVacancies) {
      throw new AppError('AssociationsRecruitersJobsVacancies not found!', 404);
    }

    await this.associationsRecruitersJobsVacanciesRepository.delete(id);
  }
}

export { DeleteAssociationsRecruitersJobsVacanciesUseCase };
