import { getRepository } from 'typeorm';

import { IRecruitersRepository } from '@modules/recruiters/repositories/IRecruitersRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Recruiter } from '../entities/Recruiter';

class RecruitersRepository
  extends BaseRepository<Recruiter>
  implements IRecruitersRepository {
    constructor() {
      super(getRepository(Recruiter));
    }
  }

export { RecruitersRepository };
