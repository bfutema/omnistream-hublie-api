import { getRepository } from 'typeorm';

import { IJobVacancyNotesRepository } from '@modules/jobs_vacancies/repositories/IJobVacancyNotesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { JobVacancyNote } from '../entities/JobVacancyNote';

class JobVacancyNotesRepository
  extends BaseRepository<JobVacancyNote>
  implements IJobVacancyNotesRepository {
    constructor() {
      super(getRepository(JobVacancyNote));
    }
  }

export { JobVacancyNotesRepository };
