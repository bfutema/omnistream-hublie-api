import { getRepository } from 'typeorm';

import { ITestCandidateAnswersRepository } from '@modules/jobs_vacancies/repositories/ITestCandidateAnswersRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { TestCandidateAnswer } from '../entities/TestCandidateAnswer';

class TestCandidateAnswersRepository
  extends BaseRepository<TestCandidateAnswer>
  implements ITestCandidateAnswersRepository {
    constructor() {
      super(getRepository(TestCandidateAnswer));
    }
  }

export { TestCandidateAnswersRepository };
