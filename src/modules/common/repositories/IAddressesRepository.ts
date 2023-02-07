import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Address } from '../infra/typeorm/entities/Address';

export type IAddressesRepository = IBaseRepository<PrimitiveProperties<Address>>;
