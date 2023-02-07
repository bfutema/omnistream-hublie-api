import { getRepository } from 'typeorm';

import { IAnswerTestsRepository } from '@modules/jobs_vacancies/repositories/IAnswerTestsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AnswerTest } from '../entities/AnswerTest';

class AnswerTestsRepository
  extends BaseRepository<AnswerTest>
  implements IAnswerTestsRepository {
    constructor() {
      super(getRepository(AnswerTest));
    }
  }

export { AnswerTestsRepository };
