import { injectable, inject } from 'tsyringe';

import { Link } from '../../infra/typeorm/entities/Link';
import { ICreateLink } from '../../dtos/ILinkDTO';
import { ILinksRepository } from '../../repositories/ILinksRepository';

@injectable()
class CreateLinkUseCase {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute(data: ICreateLink): Promise<Link> {
    const { id } = await this.linksRepository.create(data);

    const createdLink = await this.linksRepository.findById({ id });

    return createdLink;
  }
}

export { CreateLinkUseCase };
