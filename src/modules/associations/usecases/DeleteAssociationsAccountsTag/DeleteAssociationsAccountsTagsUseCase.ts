import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAssociationsAccountsTags } from '../../dtos/IAssociationsAccountsTagsDTO';
import { IAssociationsAccountsTagsRepository } from '../../repositories/IAssociationsAccountsTagsRepository';

@injectable()
class DeleteAssociationsAccountsTagsUseCase {
  constructor(
    @inject('AssociationsAccountsTagsRepository')
    private associationsAccountsTagsRepository: IAssociationsAccountsTagsRepository,
  ) {}

  public async execute({ id }: IDeleteAssociationsAccountsTags): Promise<void> {
    const foundedAssociationsAccountsTags = await this.associationsAccountsTagsRepository.findById({ id });

    if (!foundedAssociationsAccountsTags) {
      throw new AppError('AssociationsAccountsTags not found!', 404);
    }

    await this.associationsAccountsTagsRepository.delete(id);
  }
}

export { DeleteAssociationsAccountsTagsUseCase };
