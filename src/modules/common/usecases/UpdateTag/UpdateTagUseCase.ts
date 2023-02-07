import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Tag } from '../../infra/typeorm/entities/Tag';
import { IUpdateTag } from '../../dtos/ITagDTO';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class UpdateTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateTag): Promise<Tag> {
    const foundedTagById = await this.tagsRepository.findById({ id });

    if (!foundedTagById) {
      throw new AppError('Tag not found!', 404);
    }

    await this.tagsRepository.save({ ...foundedTagById, ...rest });

    const updatedTag = await this.tagsRepository.findById({ id });

    return updatedTag;
  }
}

export { UpdateTagUseCase };
