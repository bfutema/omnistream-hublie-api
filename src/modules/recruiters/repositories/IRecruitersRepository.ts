import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Recruiter } from '../infra/typeorm/entities/Recruiter';

export type IRecruitersRepository = IBaseRepository<PrimitiveProperties<Recruiter>>;
