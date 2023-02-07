import { injectable, inject } from 'tsyringe';

import { Tag } from '../../infra/typeorm/entities/Tag';
import { ICreateTag } from '../../dtos/ITagDTO';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class CreateTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(data: ICreateTag): Promise<Tag> {
    const { id } = await this.tagsRepository.create(data);

    const createdTag = await this.tagsRepository.findById({ id });

    return createdTag;
  }
}

export { CreateTagUseCase };
