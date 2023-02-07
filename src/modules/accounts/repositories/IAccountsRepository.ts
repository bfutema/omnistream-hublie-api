import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Account } from '../infra/typeorm/entities/Account';

export type IAccountsRepository = IBaseRepository<PrimitiveProperties<Account>>;
