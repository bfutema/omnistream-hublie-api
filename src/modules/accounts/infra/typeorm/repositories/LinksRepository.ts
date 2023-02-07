import { getRepository } from 'typeorm';

import { ILinksRepository } from '@modules/accounts/repositories/ILinksRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Link } from '../entities/Link';

class LinksRepository
  extends BaseRepository<Link>
  implements ILinksRepository {
    constructor() {
      super(getRepository(Link));
    }
  }

export { LinksRepository };
