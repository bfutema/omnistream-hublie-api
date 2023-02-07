import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { TestQuestionAlternative } from '../infra/typeorm/entities/TestQuestionAlternative';

export type ITestQuestionAlternativesRepository = IBaseRepository<PrimitiveProperties<TestQuestionAlternative>>;
