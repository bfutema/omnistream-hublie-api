import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { JobVacancyStatus } from '../infra/typeorm/entities/JobVacancyStatus';

export type IJobVacancyStatusesRepository = IBaseRepository<PrimitiveProperties<JobVacancyStatus>>;
