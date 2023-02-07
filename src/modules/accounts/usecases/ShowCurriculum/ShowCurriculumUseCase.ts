import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Curriculum } from '../../infra/typeorm/entities/Curriculum';
import { IShowCurriculum } from '../../dtos/ICurriculumDTO';
import { ICurriculaRepository } from '../../repositories/ICurriculaRepository';

@injectable()
class ShowCurriculumUseCase {
  constructor(
    @inject('CurriculaRepository')
    private curriculaRepository: ICurriculaRepository,
  ) {}

  public async execute({ id }: IShowCurriculum): Promise<Curriculum> {
    const curriculum = await this.curriculaRepository.findById({ id });

    if (!curriculum) {
      throw new AppError('Curriculum not found!', 404);
    }

    return curriculum;
  }
}

export { ShowCurriculumUseCase };
