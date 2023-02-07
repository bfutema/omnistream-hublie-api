import { getRepository } from 'typeorm';

import { IAccountAvatarsRepository } from '@modules/accounts/repositories/IAccountAvatarsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AccountAvatar } from '../entities/AccountAvatar';

class AccountAvatarsRepository
  extends BaseRepository<AccountAvatar>
  implements IAccountAvatarsRepository {
    constructor() {
      super(getRepository(AccountAvatar));
    }
  }

export { AccountAvatarsRepository };
