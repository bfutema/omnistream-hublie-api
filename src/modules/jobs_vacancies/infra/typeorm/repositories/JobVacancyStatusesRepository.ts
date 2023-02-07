import { getRepository } from 'typeorm';

import { IJobVacancyStatusesRepository } from '@modules/jobs_vacancies/repositories/IJobVacancyStatusesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { JobVacancyStatus } from '../entities/JobVacancyStatus';

class JobVacancyStatusesRepository
  extends BaseRepository<JobVacancyStatus>
  implements IJobVacancyStatusesRepository {
    constructor() {
      super(getRepository(JobVacancyStatus));
    }
  }

export { JobVacancyStatusesRepository };
