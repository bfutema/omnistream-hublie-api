import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsAccountsTags } from '../../infra/typeorm/entities/AssociationsAccountsTags';
import { IUpdateAssociationsAccountsTags } from '../../dtos/IAssociationsAccountsTagsDTO';
import { IAssociationsAccountsTagsRepository } from '../../repositories/IAssociationsAccountsTagsRepository';

@injectable()
class UpdateAssociationsAccountsTagsUseCase {
  constructor(
    @inject('AssociationsAccountsTagsRepository')
    private associationsAccountsTagsRepository: IAssociationsAccountsTagsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAssociationsAccountsTags): Promise<AssociationsAccountsTags> {
    const foundedAssociationsAccountsTagsById = await this.associationsAccountsTagsRepository.findById({ id });

    if (!foundedAssociationsAccountsTagsById) {
      throw new AppError('AssociationsAccountsTags not found!', 404);
    }

    await this.associationsAccountsTagsRepository.save({ ...foundedAssociationsAccountsTagsById, ...rest });

    const updatedAssociationsAccountsTags = await this.associationsAccountsTagsRepository.findById({ id });

    return updatedAssociationsAccountsTags;
  }
}

export { UpdateAssociationsAccountsTagsUseCase };
