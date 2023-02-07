import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { ProfessionalExperience } from '../infra/typeorm/entities/ProfessionalExperience';

export type IProfessionalExperiencesRepository = IBaseRepository<PrimitiveProperties<ProfessionalExperience>>;
