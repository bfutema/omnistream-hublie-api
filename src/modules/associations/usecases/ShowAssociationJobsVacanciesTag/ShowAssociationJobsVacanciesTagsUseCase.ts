import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationJobsVacanciesTags } from '../../infra/typeorm/entities/AssociationJobsVacanciesTags';
import { IShowAssociationJobsVacanciesTags } from '../../dtos/IAssociationJobsVacanciesTagsDTO';
import { IAssociationJobsVacanciesTagsRepository } from '../../repositories/IAssociationJobsVacanciesTagsRepository';

@injectable()
class ShowAssociationJobsVacanciesTagsUseCase {
  constructor(
    @inject('AssociationJobsVacanciesTagsRepository')
    private associationJobsVacanciesTagsRepository: IAssociationJobsVacanciesTagsRepository,
  ) {}

  public async execute({ id }: IShowAssociationJobsVacanciesTags): Promise<AssociationJobsVacanciesTags> {
    const associationJobsVacanciesTags = await this.associationJobsVacanciesTagsRepository.findById({ id });

    if (!associationJobsVacanciesTags) {
      throw new AppError('AssociationJobsVacanciesTags not found!', 404);
    }

    return associationJobsVacanciesTags;
  }
}

export { ShowAssociationJobsVacanciesTagsUseCase };
