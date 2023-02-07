import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Profile } from '../infra/typeorm/entities/Profile';

export type IProfilesRepository = IBaseRepository<PrimitiveProperties<Profile>>;
