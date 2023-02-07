import { injectable, inject } from 'tsyringe';

import { Curriculum } from '../../infra/typeorm/entities/Curriculum';
import { IListCurriculum } from '../../dtos/ICurriculumDTO';
import { ICurriculaRepository } from '../../repositories/ICurriculaRepository';

@injectable()
class ListCurriculumUseCase {
  constructor(
    @inject('CurriculaRepository')
    private curriculaRepository: ICurriculaRepository,
  ) {}

  public async execute(params: IListCurriculum): Promise<[Curriculum[], number]> {
    const curricula = await this.curriculaRepository.find(params);

    return curricula;
  }
}

export { ListCurriculumUseCase };
