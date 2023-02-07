import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Tag } from '../../infra/typeorm/entities/Tag';
import { IShowTag } from '../../dtos/ITagDTO';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class ShowTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ id }: IShowTag): Promise<Tag> {
    const tag = await this.tagsRepository.findById({ id });

    if (!tag) {
      throw new AppError('Tag not found!', 404);
    }

    return tag;
  }
}

export { ShowTagUseCase };
