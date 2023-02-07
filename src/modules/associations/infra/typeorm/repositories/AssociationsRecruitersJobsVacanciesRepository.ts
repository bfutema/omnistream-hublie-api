import { getRepository } from 'typeorm';

import { IAssociationsRecruitersJobsVacanciesRepository } from '@modules/associations/repositories/IAssociationsRecruitersJobsVacanciesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AssociationsRecruitersJobsVacancies } from '../entities/AssociationsRecruitersJobsVacancies';

class AssociationsRecruitersJobsVacanciesRepository
  extends BaseRepository<AssociationsRecruitersJobsVacancies>
  implements IAssociationsRecruitersJobsVacanciesRepository {
    constructor() {
      super(getRepository(AssociationsRecruitersJobsVacancies));
    }
  }

export { AssociationsRecruitersJobsVacanciesRepository };
