import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { TestCandidateAnswer } from '../infra/typeorm/entities/TestCandidateAnswer';

export type ITestCandidateAnswersRepository = IBaseRepository<PrimitiveProperties<TestCandidateAnswer>>;
