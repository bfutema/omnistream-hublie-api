import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Curriculum } from '../../infra/typeorm/entities/Curriculum';
import { IUpdateCurriculum } from '../../dtos/ICurriculumDTO';
import { ICurriculaRepository } from '../../repositories/ICurriculaRepository';

@injectable()
class UpdateCurriculumUseCase {
  constructor(
    @inject('CurriculaRepository')
    private curriculaRepository: ICurriculaRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateCurriculum): Promise<Curriculum> {
    const foundedCurriculumById = await this.curriculaRepository.findById({ id });

    if (!foundedCurriculumById) {
      throw new AppError('Curriculum not found!', 404);
    }

    await this.curriculaRepository.save({ ...foundedCurriculumById, ...rest });

    const updatedCurriculum = await this.curriculaRepository.findById({ id });

    return updatedCurriculum;
  }
}

export { UpdateCurriculumUseCase };
