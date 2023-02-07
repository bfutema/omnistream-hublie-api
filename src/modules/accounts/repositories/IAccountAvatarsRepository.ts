import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AccountAvatar } from '../infra/typeorm/entities/AccountAvatar';

export type IAccountAvatarsRepository = IBaseRepository<PrimitiveProperties<AccountAvatar>>;
