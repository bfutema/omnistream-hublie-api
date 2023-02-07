import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsAccountsTags } from '../../infra/typeorm/entities/AssociationsAccountsTags';
import { IShowAssociationsAccountsTags } from '../../dtos/IAssociationsAccountsTagsDTO';
import { IAssociationsAccountsTagsRepository } from '../../repositories/IAssociationsAccountsTagsRepository';

@injectable()
class ShowAssociationsAccountsTagsUseCase {
  constructor(
    @inject('AssociationsAccountsTagsRepository')
    private associationsAccountsTagsRepository: IAssociationsAccountsTagsRepository,
  ) {}

  public async execute({ id }: IShowAssociationsAccountsTags): Promise<AssociationsAccountsTags> {
    const associationsAccountsTags = await this.associationsAccountsTagsRepository.findById({ id });

    if (!associationsAccountsTags) {
      throw new AppError('AssociationsAccountsTags not found!', 404);
    }

    return associationsAccountsTags;
  }
}

export { ShowAssociationsAccountsTagsUseCase };
