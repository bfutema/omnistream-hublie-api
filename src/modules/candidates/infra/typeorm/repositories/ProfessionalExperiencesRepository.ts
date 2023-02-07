import { getRepository } from 'typeorm';

import { IProfessionalExperiencesRepository } from '@modules/candidates/repositories/IProfessionalExperiencesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { ProfessionalExperience } from '../entities/ProfessionalExperience';

class ProfessionalExperiencesRepository
  extends BaseRepository<ProfessionalExperience>
  implements IProfessionalExperiencesRepository {
    constructor() {
      super(getRepository(ProfessionalExperience));
    }
  }

export { ProfessionalExperiencesRepository };
