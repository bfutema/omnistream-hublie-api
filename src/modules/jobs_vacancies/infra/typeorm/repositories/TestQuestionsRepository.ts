import { getRepository } from 'typeorm';

import { ITestQuestionsRepository } from '@modules/jobs_vacancies/repositories/ITestQuestionsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { TestQuestion } from '../entities/TestQuestion';

class TestQuestionsRepository
  extends BaseRepository<TestQuestion>
  implements ITestQuestionsRepository {
    constructor() {
      super(getRepository(TestQuestion));
    }
  }

export { TestQuestionsRepository };
