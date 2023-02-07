import { getRepository } from 'typeorm';

import { ICurriculaRepository } from '@modules/accounts/repositories/ICurriculaRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Curriculum } from '../entities/Curriculum';

class CurriculaRepository
  extends BaseRepository<Curriculum>
  implements ICurriculaRepository {
    constructor() {
      super(getRepository(Curriculum));
    }
  }

export { CurriculaRepository };
