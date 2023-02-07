import { getRepository } from 'typeorm';

import { IEvaluationsRepository } from '@modules/commons/repositories/IEvaluationsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Evaluation } from '../entities/Evaluation';

class EvaluationsRepository
  extends BaseRepository<Evaluation>
  implements IEvaluationsRepository {
    constructor() {
      super(getRepository(Evaluation));
    }
  }

export { EvaluationsRepository };
