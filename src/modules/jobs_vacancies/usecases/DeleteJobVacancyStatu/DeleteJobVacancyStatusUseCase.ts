import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteJobVacancyStatus } from '../../dtos/IJobVacancyStatusDTO';
import { IJobVacancyStatusesRepository } from '../../repositories/IJobVacancyStatusesRepository';

@injectable()
class DeleteJobVacancyStatusUseCase {
  constructor(
    @inject('JobVacancyStatusesRepository')
    private jobVacancyStatusesRepository: IJobVacancyStatusesRepository,
  ) {}

  public async execute({ id }: IDeleteJobVacancyStatus): Promise<void> {
    const foundedJobVacancyStatus = await this.jobVacancyStatusesRepository.findById({ id });

    if (!foundedJobVacancyStatus) {
      throw new AppError('JobVacancyStatus not found!', 404);
    }

    await this.jobVacancyStatusesRepository.delete(id);
  }
}

export { DeleteJobVacancyStatusUseCase };
