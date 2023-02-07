import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AssociationsNotificationsAccounts } from '../infra/typeorm/entities/AssociationsNotificationsAccounts';

export type IAssociationsNotificationsAccountsRepository = IBaseRepository<PrimitiveProperties<AssociationsNotificationsAccounts>>;
