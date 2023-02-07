import { injectable, inject } from 'tsyringe';

import { AssociationsRecruitersJobsVacancies } from '../../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';
import { ICreateAssociationsRecruitersJobsVacancies } from '../../dtos/IAssociationsRecruitersJobsVacanciesDTO';
import { IAssociationsRecruitersJobsVacanciesRepository } from '../../repositories/IAssociationsRecruitersJobsVacanciesRepository';

@injectable()
class CreateAssociationsRecruitersJobsVacanciesUseCase {
  constructor(
    @inject('AssociationsRecruitersJobsVacanciesRepository')
    private associationsRecruitersJobsVacanciesRepository: IAssociationsRecruitersJobsVacanciesRepository,
  ) {}

  public async execute(data: ICreateAssociationsRecruitersJobsVacancies): Promise<AssociationsRecruitersJobsVacancies> {
    const { id } = await this.associationsRecruitersJobsVacanciesRepository.create(data);

    const createdAssociationsRecruitersJobsVacancies = await this.associationsRecruitersJobsVacanciesRepository.findById({ id });

    return createdAssociationsRecruitersJobsVacancies;
  }
}

export { CreateAssociationsRecruitersJobsVacanciesUseCase };
