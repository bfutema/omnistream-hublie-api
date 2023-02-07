import { injectable, inject } from 'tsyringe';

import { Curriculum } from '../../infra/typeorm/entities/Curriculum';
import { ICreateCurriculum } from '../../dtos/ICurriculumDTO';
import { ICurriculaRepository } from '../../repositories/ICurriculaRepository';

@injectable()
class CreateCurriculumUseCase {
  constructor(
    @inject('CurriculaRepository')
    private curriculaRepository: ICurriculaRepository,
  ) {}

  public async execute(data: ICreateCurriculum): Promise<Curriculum> {
    const { id } = await this.curriculaRepository.create(data);

    const createdCurriculum = await this.curriculaRepository.findById({ id });

    return createdCurriculum;
  }
}

export { CreateCurriculumUseCase };
