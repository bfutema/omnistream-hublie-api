import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancyStatus } from '../../infra/typeorm/entities/JobVacancyStatus';
import { IUpdateJobVacancyStatus } from '../../dtos/IJobVacancyStatusDTO';
import { IJobVacancyStatusesRepository } from '../../repositories/IJobVacancyStatusesRepository';

@injectable()
class UpdateJobVacancyStatusUseCase {
  constructor(
    @inject('JobVacancyStatusesRepository')
    private jobVacancyStatusesRepository: IJobVacancyStatusesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateJobVacancyStatus): Promise<JobVacancyStatus> {
    const foundedJobVacancyStatusById = await this.jobVacancyStatusesRepository.findById({ id });

    if (!foundedJobVacancyStatusById) {
      throw new AppError('JobVacancyStatus not found!', 404);
    }

    await this.jobVacancyStatusesRepository.save({ ...foundedJobVacancyStatusById, ...rest });

    const updatedJobVacancyStatus = await this.jobVacancyStatusesRepository.findById({ id });

    return updatedJobVacancyStatus;
  }
}

export { UpdateJobVacancyStatusUseCase };
