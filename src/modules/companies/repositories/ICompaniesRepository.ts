import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Company } from '../infra/typeorm/entities/Company';

export type ICompaniesRepository = IBaseRepository<PrimitiveProperties<Company>>;
