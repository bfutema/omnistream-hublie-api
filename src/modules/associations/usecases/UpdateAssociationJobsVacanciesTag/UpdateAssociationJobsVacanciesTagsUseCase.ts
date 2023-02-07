import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationJobsVacanciesTags } from '../../infra/typeorm/entities/AssociationJobsVacanciesTags';
import { IUpdateAssociationJobsVacanciesTags } from '../../dtos/IAssociationJobsVacanciesTagsDTO';
import { IAssociationJobsVacanciesTagsRepository } from '../../repositories/IAssociationJobsVacanciesTagsRepository';

@injectable()
class UpdateAssociationJobsVacanciesTagsUseCase {
  constructor(
    @inject('AssociationJobsVacanciesTagsRepository')
    private associationJobsVacanciesTagsRepository: IAssociationJobsVacanciesTagsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAssociationJobsVacanciesTags): Promise<AssociationJobsVacanciesTags> {
    const foundedAssociationJobsVacanciesTagsById = await this.associationJobsVacanciesTagsRepository.findById({ id });

    if (!foundedAssociationJobsVacanciesTagsById) {
      throw new AppError('AssociationJobsVacanciesTags not found!', 404);
    }

    await this.associationJobsVacanciesTagsRepository.save({ ...foundedAssociationJobsVacanciesTagsById, ...rest });

    const updatedAssociationJobsVacanciesTags = await this.associationJobsVacanciesTagsRepository.findById({ id });

    return updatedAssociationJobsVacanciesTags;
  }
}

export { UpdateAssociationJobsVacanciesTagsUseCase };
