import { getRepository } from 'typeorm';

import { IJobVacanciesRepository } from '@modules/jobs_vacancies/repositories/IJobVacanciesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { JobVacancy } from '../entities/JobVacancy';

class JobVacanciesRepository
  extends BaseRepository<JobVacancy>
  implements IJobVacanciesRepository {
    constructor() {
      super(getRepository(JobVacancy));
    }
  }

export { JobVacanciesRepository };
