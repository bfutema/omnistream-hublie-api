import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Connection } from '../infra/typeorm/entities/Connection';

export type IConnectionsRepository = IBaseRepository<PrimitiveProperties<Connection>>;
