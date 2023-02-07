import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancyStatus } from '../../infra/typeorm/entities/JobVacancyStatus';
import { IShowJobVacancyStatus } from '../../dtos/IJobVacancyStatusDTO';
import { IJobVacancyStatusesRepository } from '../../repositories/IJobVacancyStatusesRepository';

@injectable()
class ShowJobVacancyStatusUseCase {
  constructor(
    @inject('JobVacancyStatusesRepository')
    private jobVacancyStatusesRepository: IJobVacancyStatusesRepository,
  ) {}

  public async execute({ id }: IShowJobVacancyStatus): Promise<JobVacancyStatus> {
    const jobVacancyStatus = await this.jobVacancyStatusesRepository.findById({ id });

    if (!jobVacancyStatus) {
      throw new AppError('JobVacancyStatus not found!', 404);
    }

    return jobVacancyStatus;
  }
}

export { ShowJobVacancyStatusUseCase };
