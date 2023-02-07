import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Evaluation } from '../infra/typeorm/entities/Evaluation';

export type IEvaluationsRepository = IBaseRepository<PrimitiveProperties<Evaluation>>;
