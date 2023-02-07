import { injectable, inject } from 'tsyringe';

import { Link } from '../../infra/typeorm/entities/Link';
import { IListLink } from '../../dtos/ILinkDTO';
import { ILinksRepository } from '../../repositories/ILinksRepository';

@injectable()
class ListLinkUseCase {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute(params: IListLink): Promise<[Link[], number]> {
    const links = await this.linksRepository.find(params);

    return links;
  }
}

export { ListLinkUseCase };
