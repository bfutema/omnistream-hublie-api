import { injectable, inject } from 'tsyringe';

import { AssociationJobsVacanciesTags } from '../../infra/typeorm/entities/AssociationJobsVacanciesTags';
import { IListAssociationJobsVacanciesTags } from '../../dtos/IAssociationJobsVacanciesTagsDTO';
import { IAssociationJobsVacanciesTagsRepository } from '../../repositories/IAssociationJobsVacanciesTagsRepository';

@injectable()
class ListAssociationJobsVacanciesTagsUseCase {
  constructor(
    @inject('AssociationJobsVacanciesTagsRepository')
    private associationJobsVacanciesTagsRepository: IAssociationJobsVacanciesTagsRepository,
  ) {}

  public async execute(params: IListAssociationJobsVacanciesTags): Promise<[AssociationJobsVacanciesTags[], number]> {
    const associationJobsVacanciesTags = await this.associationJobsVacanciesTagsRepository.find(params);

    return associationJobsVacanciesTags;
  }
}

export { ListAssociationJobsVacanciesTagsUseCase };
