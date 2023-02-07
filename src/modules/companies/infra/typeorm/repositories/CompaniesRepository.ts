import { getRepository } from 'typeorm';

import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Company } from '../entities/Company';

class CompaniesRepository
  extends BaseRepository<Company>
  implements ICompaniesRepository {
    constructor() {
      super(getRepository(Company));
    }
  }

export { CompaniesRepository };
