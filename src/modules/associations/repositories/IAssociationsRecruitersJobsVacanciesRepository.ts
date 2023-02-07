import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AssociationsRecruitersJobsVacancies } from '../infra/typeorm/entities/AssociationsRecruitersJobsVacancies';

export type IAssociationsRecruitersJobsVacanciesRepository = IBaseRepository<PrimitiveProperties<AssociationsRecruitersJobsVacancies>>;
