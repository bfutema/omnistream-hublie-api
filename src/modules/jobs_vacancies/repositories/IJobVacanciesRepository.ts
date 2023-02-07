import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { JobVacancy } from '../infra/typeorm/entities/JobVacancy';

export type IJobVacanciesRepository = IBaseRepository<PrimitiveProperties<JobVacancy>>;
