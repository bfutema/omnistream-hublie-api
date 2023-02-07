import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AssociationJobsVacanciesTags } from '../infra/typeorm/entities/AssociationJobsVacanciesTags';

export type IAssociationJobsVacanciesTagsRepository = IBaseRepository<PrimitiveProperties<AssociationJobsVacanciesTags>>;
