import { injectable, inject } from 'tsyringe';

import { JobVacancyStatus } from '../../infra/typeorm/entities/JobVacancyStatus';
import { IListJobVacancyStatus } from '../../dtos/IJobVacancyStatusDTO';
import { IJobVacancyStatusesRepository } from '../../repositories/IJobVacancyStatusesRepository';

@injectable()
class ListJobVacancyStatusUseCase {
  constructor(
    @inject('JobVacancyStatusesRepository')
    private jobVacancyStatusesRepository: IJobVacancyStatusesRepository,
  ) {}

  public async execute(params: IListJobVacancyStatus): Promise<[JobVacancyStatus[], number]> {
    const jobVacancyStatuses = await this.jobVacancyStatusesRepository.find(params);

    return jobVacancyStatuses;
  }
}

export { ListJobVacancyStatusUseCase };
