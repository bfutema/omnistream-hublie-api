import { getRepository } from 'typeorm';

import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Account } from '../entities/Account';

class AccountsRepository
  extends BaseRepository<Account>
  implements IAccountsRepository {
    constructor() {
      super(getRepository(Account));
    }
  }

export { AccountsRepository };
