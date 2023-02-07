import { getRepository } from 'typeorm';

import { IAssociationJobsVacanciesTagsRepository } from '@modules/associations/repositories/IAssociationJobsVacanciesTagsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { AssociationJobsVacanciesTags } from '../entities/AssociationJobsVacanciesTags';

class AssociationJobsVacanciesTagsRepository
  extends BaseRepository<AssociationJobsVacanciesTags>
  implements IAssociationJobsVacanciesTagsRepository {
    constructor() {
      super(getRepository(AssociationJobsVacanciesTags));
    }
  }

export { AssociationJobsVacanciesTagsRepository };
