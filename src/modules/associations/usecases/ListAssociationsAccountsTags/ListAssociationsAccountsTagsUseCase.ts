import { injectable, inject } from 'tsyringe';

import { AssociationsAccountsTags } from '../../infra/typeorm/entities/AssociationsAccountsTags';
import { IListAssociationsAccountsTags } from '../../dtos/IAssociationsAccountsTagsDTO';
import { IAssociationsAccountsTagsRepository } from '../../repositories/IAssociationsAccountsTagsRepository';

@injectable()
class ListAssociationsAccountsTagsUseCase {
  constructor(
    @inject('AssociationsAccountsTagsRepository')
    private associationsAccountsTagsRepository: IAssociationsAccountsTagsRepository,
  ) {}

  public async execute(params: IListAssociationsAccountsTags): Promise<[AssociationsAccountsTags[], number]> {
    const associationsAccountsTags = await this.associationsAccountsTagsRepository.find(params);

    return associationsAccountsTags;
  }
}

export { ListAssociationsAccountsTagsUseCase };
