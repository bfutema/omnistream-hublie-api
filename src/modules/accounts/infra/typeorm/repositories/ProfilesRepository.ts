import { getRepository } from 'typeorm';

import { IProfilesRepository } from '@modules/accounts/repositories/IProfilesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Profile } from '../entities/Profile';

class ProfilesRepository
  extends BaseRepository<Profile>
  implements IProfilesRepository {
    constructor() {
      super(getRepository(Profile));
    }
  }

export { ProfilesRepository };
