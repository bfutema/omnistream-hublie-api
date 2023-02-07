import { PrimitiveProperties } from '@shared/contracts/IGeneric';
import { IBaseRepository } from '@shared/infra/typeorm/repositories/IBaseRepository';

import { Curriculum } from '../infra/typeorm/entities/Curriculum';

export type ICurriculaRepository = IBaseRepository<PrimitiveProperties<Curriculum>>;
