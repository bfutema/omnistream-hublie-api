import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Link } from '../../infra/typeorm/entities/Link';
import { IUpdateLink } from '../../dtos/ILinkDTO';
import { ILinksRepository } from '../../repositories/ILinksRepository';

@injectable()
class UpdateLinkUseCase {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateLink): Promise<Link> {
    const foundedLinkById = await this.linksRepository.findById({ id });

    if (!foundedLinkById) {
      throw new AppError('Link not found!', 404);
    }

    await this.linksRepository.save({ ...foundedLinkById, ...rest });

    const updatedLink = await this.linksRepository.findById({ id });

    return updatedLink;
  }
}

export { UpdateLinkUseCase };
