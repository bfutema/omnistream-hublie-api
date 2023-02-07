import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Test } from '../infra/typeorm/entities/Test';

export type ITestsRepository = IBaseRepository<PrimitiveProperties<Test>>;
