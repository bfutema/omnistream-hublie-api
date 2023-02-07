import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Candidate } from '../infra/typeorm/entities/Candidate';

export type ICandidatesRepository = IBaseRepository<PrimitiveProperties<Candidate>>;
