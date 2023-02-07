import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { JobVacancyNote } from '../infra/typeorm/entities/JobVacancyNote';

export type IJobVacancyNotesRepository = IBaseRepository<PrimitiveProperties<JobVacancyNote>>;
