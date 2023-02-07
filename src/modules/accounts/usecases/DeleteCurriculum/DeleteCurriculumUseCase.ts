import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteCurriculum } from '../../dtos/ICurriculumDTO';
import { ICurriculaRepository } from '../../repositories/ICurriculaRepository';

@injectable()
class DeleteCurriculumUseCase {
  constructor(
    @inject('CurriculaRepository')
    private curriculaRepository: ICurriculaRepository,
  ) {}

  public async execute({ id }: IDeleteCurriculum): Promise<void> {
    const foundedCurriculum = await this.curriculaRepository.findById({ id });

    if (!foundedCurriculum) {
      throw new AppError('Curriculum not found!', 404);
    }

    await this.curriculaRepository.delete(id);
  }
}

export { DeleteCurriculumUseCase };
