import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancy } from '../../infra/typeorm/entities/JobVacancy';
import { IUpdateJobVacancy } from '../../dtos/IJobVacancyDTO';
import { IJobVacanciesRepository } from '../../repositories/IJobVacanciesRepository';

@injectable()
class UpdateJobVacancyUseCase {
  constructor(
    @inject('JobVacanciesRepository')
    private jobVacanciesRepository: IJobVacanciesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateJobVacancy): Promise<JobVacancy> {
    const foundedJobVacancyById = await this.jobVacanciesRepository.findById({ id });

    if (!foundedJobVacancyById) {
      throw new AppError('JobVacancy not found!', 404);
    }

    await this.jobVacanciesRepository.save({ ...foundedJobVacancyById, ...rest });

    const updatedJobVacancy = await this.jobVacanciesRepository.findById({ id });

    return updatedJobVacancy;
  }
}

export { UpdateJobVacancyUseCase };
