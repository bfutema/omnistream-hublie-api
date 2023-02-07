import { getRepository } from 'typeorm';

import { IAssociationsAccountsTagsRepository } from '@modules/associations/repositories/IAssociationsAccountsTagsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AssociationsAccountsTags } from '../entities/AssociationsAccountsTags';

class AssociationsAccountsTagsRepository
  extends BaseRepository<AssociationsAccountsTags>
  implements IAssociationsAccountsTagsRepository {
    constructor() {
      super(getRepository(AssociationsAccountsTags));
    }
  }

export { AssociationsAccountsTagsRepository };
