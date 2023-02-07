import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Link } from '../../infra/typeorm/entities/Link';
import { IShowLink } from '../../dtos/ILinkDTO';
import { ILinksRepository } from '../../repositories/ILinksRepository';

@injectable()
class ShowLinkUseCase {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute({ id }: IShowLink): Promise<Link> {
    const link = await this.linksRepository.findById({ id });

    if (!link) {
      throw new AppError('Link not found!', 404);
    }

    return link;
  }
}

export { ShowLinkUseCase };
