import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Notification } from '../infra/typeorm/entities/Notification';

export type INotificationsRepository = IBaseRepository<PrimitiveProperties<Notification>>;
