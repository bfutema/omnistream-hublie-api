import { injectable, inject } from 'tsyringe';

import { Tag } from '../../infra/typeorm/entities/Tag';
import { IListTag } from '../../dtos/ITagDTO';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class ListTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(params: IListTag): Promise<[Tag[], number]> {
    const tags = await this.tagsRepository.find(params);

    return tags;
  }
}

export { ListTagUseCase };
