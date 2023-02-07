import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Link } from '../infra/typeorm/entities/Link';

export type ILinksRepository = IBaseRepository<PrimitiveProperties<Link>>;
