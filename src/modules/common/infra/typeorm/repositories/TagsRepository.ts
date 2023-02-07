import { getRepository } from 'typeorm';

import { ITagsRepository } from '@modules/commons/repositories/ITagsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Tag } from '../entities/Tag';

class TagsRepository
  extends BaseRepository<Tag>
  implements ITagsRepository {
    constructor() {
      super(getRepository(Tag));
    }
  }

export { TagsRepository };
