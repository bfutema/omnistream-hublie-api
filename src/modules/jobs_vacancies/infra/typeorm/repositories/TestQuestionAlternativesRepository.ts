import { getRepository } from 'typeorm';

import { ITestQuestionAlternativesRepository } from '@modules/jobs_vacancies/repositories/ITestQuestionAlternativesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { TestQuestionAlternative } from '../entities/TestQuestionAlternative';

class TestQuestionAlternativesRepository
  extends BaseRepository<TestQuestionAlternative>
  implements ITestQuestionAlternativesRepository {
    constructor() {
      super(getRepository(TestQuestionAlternative));
    }
  }

export { TestQuestionAlternativesRepository };
