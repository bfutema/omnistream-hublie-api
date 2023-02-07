import { getRepository } from 'typeorm';

import { ICandidatesRepository } from '@modules/candidates/repositories/ICandidatesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Candidate } from '../entities/Candidate';

class CandidatesRepository
  extends BaseRepository<Candidate>
  implements ICandidatesRepository {
    constructor() {
      super(getRepository(Candidate));
    }
  }

export { CandidatesRepository };
