import { injectable, inject } from 'tsyringe';

import { AssociationsAccountsTags } from '../../infra/typeorm/entities/AssociationsAccountsTags';
import { ICreateAssociationsAccountsTags } from '../../dtos/IAssociationsAccountsTagsDTO';
import { IAssociationsAccountsTagsRepository } from '../../repositories/IAssociationsAccountsTagsRepository';

@injectable()
class CreateAssociationsAccountsTagsUseCase {
  constructor(
    @inject('AssociationsAccountsTagsRepository')
    private associationsAccountsTagsRepository: IAssociationsAccountsTagsRepository,
  ) {}

  public async execute(data: ICreateAssociationsAccountsTags): Promise<AssociationsAccountsTags> {
    const { id } = await this.associationsAccountsTagsRepository.create(data);

    const createdAssociationsAccountsTags = await this.associationsAccountsTagsRepository.findById({ id });

    return createdAssociationsAccountsTags;
  }
}

export { CreateAssociationsAccountsTagsUseCase };
