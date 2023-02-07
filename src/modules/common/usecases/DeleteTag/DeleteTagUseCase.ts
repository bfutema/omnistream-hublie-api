import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteTag } from '../../dtos/ITagDTO';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class DeleteTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ id }: IDeleteTag): Promise<void> {
    const foundedTag = await this.tagsRepository.findById({ id });

    if (!foundedTag) {
      throw new AppError('Tag not found!', 404);
    }

    await this.tagsRepository.delete(id);
  }
}

export { DeleteTagUseCase };
