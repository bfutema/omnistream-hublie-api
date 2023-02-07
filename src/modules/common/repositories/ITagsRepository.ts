import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Tag } from '../infra/typeorm/entities/Tag';

export type ITagsRepository = IBaseRepository<PrimitiveProperties<Tag>>;
