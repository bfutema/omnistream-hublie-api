import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AssociationsAccountsTags } from '../infra/typeorm/entities/AssociationsAccountsTags';

export type IAssociationsAccountsTagsRepository = IBaseRepository<PrimitiveProperties<AssociationsAccountsTags>>;
