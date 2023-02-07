import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAssociationJobsVacanciesTags } from '../../dtos/IAssociationJobsVacanciesTagsDTO';
import { IAssociationJobsVacanciesTagsRepository } from '../../repositories/IAssociationJobsVacanciesTagsRepository';

@injectable()
class DeleteAssociationJobsVacanciesTagsUseCase {
  constructor(
    @inject('AssociationJobsVacanciesTagsRepository')
    private associationJobsVacanciesTagsRepository: IAssociationJobsVacanciesTagsRepository,
  ) {}

  public async execute({ id }: IDeleteAssociationJobsVacanciesTags): Promise<void> {
    const foundedAssociationJobsVacanciesTags = await this.associationJobsVacanciesTagsRepository.findById({ id });

    if (!foundedAssociationJobsVacanciesTags) {
      throw new AppError('AssociationJobsVacanciesTags not found!', 404);
    }

    await this.associationJobsVacanciesTagsRepository.delete(id);
  }
}

export { DeleteAssociationJobsVacanciesTagsUseCase };
