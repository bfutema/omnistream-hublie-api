import { injectable, inject } from 'tsyringe';

import { JobVacancy } from '../../infra/typeorm/entities/JobVacancy';
import { ICreateJobVacancy } from '../../dtos/IJobVacancyDTO';
import { IJobVacanciesRepository } from '../../repositories/IJobVacanciesRepository';

@injectable()
class CreateJobVacancyUseCase {
  constructor(
    @inject('JobVacanciesRepository')
    private jobVacanciesRepository: IJobVacanciesRepository,
  ) {}

  public async execute(data: ICreateJobVacancy): Promise<JobVacancy> {
    const { id } = await this.jobVacanciesRepository.create(data);

    const createdJobVacancy = await this.jobVacanciesRepository.findById({ id });

    return createdJobVacancy;
  }
}

export { CreateJobVacancyUseCase };
