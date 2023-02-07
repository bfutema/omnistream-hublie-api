import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { AnswerTest } from '../infra/typeorm/entities/AnswerTest';

export type IAnswerTestsRepository = IBaseRepository<PrimitiveProperties<AnswerTest>>;
