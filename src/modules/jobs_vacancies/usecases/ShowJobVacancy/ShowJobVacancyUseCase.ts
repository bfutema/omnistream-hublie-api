import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancy } from '../../infra/typeorm/entities/JobVacancy';
import { IShowJobVacancy } from '../../dtos/IJobVacancyDTO';
import { IJobVacanciesRepository } from '../../repositories/IJobVacanciesRepository';

@injectable()
class ShowJobVacancyUseCase {
  constructor(
    @inject('JobVacanciesRepository')
    private jobVacanciesRepository: IJobVacanciesRepository,
  ) {}

  public async execute({ id }: IShowJobVacancy): Promise<JobVacancy> {
    const jobVacancy = await this.jobVacanciesRepository.findById({ id });

    if (!jobVacancy) {
      throw new AppError('JobVacancy not found!', 404);
    }

    return jobVacancy;
  }
}

export { ShowJobVacancyUseCase };
