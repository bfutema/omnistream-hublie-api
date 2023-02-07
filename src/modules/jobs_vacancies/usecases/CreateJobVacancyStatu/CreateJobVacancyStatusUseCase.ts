import { injectable, inject } from 'tsyringe';

import { JobVacancyStatus } from '../../infra/typeorm/entities/JobVacancyStatus';
import { ICreateJobVacancyStatus } from '../../dtos/IJobVacancyStatusDTO';
import { IJobVacancyStatusesRepository } from '../../repositories/IJobVacancyStatusesRepository';

@injectable()
class CreateJobVacancyStatusUseCase {
  constructor(
    @inject('JobVacancyStatusesRepository')
    private jobVacancyStatusesRepository: IJobVacancyStatusesRepository,
  ) {}

  public async execute(data: ICreateJobVacancyStatus): Promise<JobVacancyStatus> {
    const { id } = await this.jobVacancyStatusesRepository.create(data);

    const createdJobVacancyStatus = await this.jobVacancyStatusesRepository.findById({ id });

    return createdJobVacancyStatus;
  }
}

export { CreateJobVacancyStatusUseCase };
