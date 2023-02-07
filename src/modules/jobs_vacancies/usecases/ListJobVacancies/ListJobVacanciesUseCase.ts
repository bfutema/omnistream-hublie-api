import { injectable, inject } from 'tsyringe';

import { JobVacancy } from '../../infra/typeorm/entities/JobVacancy';
import { IListJobVacancy } from '../../dtos/IJobVacancyDTO';
import { IJobVacanciesRepository } from '../../repositories/IJobVacanciesRepository';

@injectable()
class ListJobVacancyUseCase {
  constructor(
    @inject('JobVacanciesRepository')
    private jobVacanciesRepository: IJobVacanciesRepository,
  ) {}

  public async execute(params: IListJobVacancy): Promise<[JobVacancy[], number]> {
    const jobVacancies = await this.jobVacanciesRepository.find(params);

    return jobVacancies;
  }
}

export { ListJobVacancyUseCase };
