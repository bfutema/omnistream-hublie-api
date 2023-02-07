import { getRepository } from 'typeorm';

import { IAssociationsNotificationsAccountsRepository } from '@modules/associations/repositories/IAssociationsNotificationsAccountsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AssociationsNotificationsAccounts } from '../entities/AssociationsNotificationsAccounts';

class AssociationsNotificationsAccountsRepository
  extends BaseRepository<AssociationsNotificationsAccounts>
  implements IAssociationsNotificationsAccountsRepository {
    constructor() {
      super(getRepository(AssociationsNotificationsAccounts));
    }
  }

export { AssociationsNotificationsAccountsRepository };
