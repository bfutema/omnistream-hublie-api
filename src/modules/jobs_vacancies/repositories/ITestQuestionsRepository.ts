import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { TestQuestion } from '../infra/typeorm/entities/TestQuestion';

export type ITestQuestionsRepository = IBaseRepository<PrimitiveProperties<TestQuestion>>;
