import { injectable, inject } from 'tsyringe';

import { AssociationJobsVacanciesTags } from '../../infra/typeorm/entities/AssociationJobsVacanciesTags';
import { ICreateAssociationJobsVacanciesTags } from '../../dtos/IAssociationJobsVacanciesTagsDTO';
import { IAssociationJobsVacanciesTagsRepository } from '../../repositories/IAssociationJobsVacanciesTagsRepository';

@injectable()
class CreateAssociationJobsVacanciesTagsUseCase {
  constructor(
    @inject('AssociationJobsVacanciesTagsRepository')
    private associationJobsVacanciesTagsRepository: IAssociationJobsVacanciesTagsRepository,
  ) {}

  public async execute(data: ICreateAssociationJobsVacanciesTags): Promise<AssociationJobsVacanciesTags> {
    const { id } = await this.associationJobsVacanciesTagsRepository.create(data);

    const createdAssociationJobsVacanciesTags = await this.associationJobsVacanciesTagsRepository.findById({ id });

    return createdAssociationJobsVacanciesTags;
  }
}

export { CreateAssociationJobsVacanciesTagsUseCase };
