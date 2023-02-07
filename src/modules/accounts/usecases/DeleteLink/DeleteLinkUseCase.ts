import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteLink } from '../../dtos/ILinkDTO';
import { ILinksRepository } from '../../repositories/ILinksRepository';

@injectable()
class DeleteLinkUseCase {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute({ id }: IDeleteLink): Promise<void> {
    const foundedLink = await this.linksRepository.findById({ id });

    if (!foundedLink) {
      throw new AppError('Link not found!', 404);
    }

    await this.linksRepository.delete(id);
  }
}

export { DeleteLinkUseCase };
