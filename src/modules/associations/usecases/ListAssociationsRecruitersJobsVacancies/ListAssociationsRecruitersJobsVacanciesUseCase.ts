import { injectable, inject } from 'tsyringe';

import { AssociationsRecruitersJobsVacancies } from '../../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';
import { IListAssociationsRecruitersJobsVacancies } from '../../dtos/IAssociationsRecruitersJobsVacanciesDTO';
import { IAssociationsRecruitersJobsVacanciesRepository } from '../../repositories/IAssociationsRecruitersJobsVacanciesRepository';

@injectable()
class ListAssociationsRecruitersJobsVacanciesUseCase {
  constructor(
    @inject('AssociationsRecruitersJobsVacanciesRepository')
    private associationsRecruitersJobsVacanciesRepository: IAssociationsRecruitersJobsVacanciesRepository,
  ) {}

  public async execute(params: IListAssociationsRecruitersJobsVacancies): Promise<[AssociationsRecruitersJobsVacancies[], number]> {
    const associationsRecruitersJobsVacancies = await this.associationsRecruitersJobsVacanciesRepository.find(params);

    return associationsRecruitersJobsVacancies;
  }
}

export { ListAssociationsRecruitersJobsVacanciesUseCase };
