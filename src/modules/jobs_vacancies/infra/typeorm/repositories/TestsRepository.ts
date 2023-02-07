import { getRepository } from 'typeorm';

import { ITestsRepository } from '@modules/jobs_vacancies/repositories/ITestsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Test } from '../entities/Test';

class TestsRepository
  extends BaseRepository<Test>
  implements ITestsRepository {
    constructor() {
      super(getRepository(Test));
    }
  }

export { TestsRepository };
