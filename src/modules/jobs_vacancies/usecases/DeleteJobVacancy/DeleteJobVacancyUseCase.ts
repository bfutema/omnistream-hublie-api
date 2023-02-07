import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteJobVacancy } from '../../dtos/IJobVacancyDTO';
import { IJobVacanciesRepository } from '../../repositories/IJobVacanciesRepository';

@injectable()
class DeleteJobVacancyUseCase {
  constructor(
    @inject('JobVacanciesRepository')
    private jobVacanciesRepository: IJobVacanciesRepository,
  ) {}

  public async execute({ id }: IDeleteJobVacancy): Promise<void> {
    const foundedJobVacancy = await this.jobVacanciesRepository.findById({ id });

    if (!foundedJobVacancy) {
      throw new AppError('JobVacancy not found!', 404);
    }

    await this.jobVacanciesRepository.delete(id);
  }
}

export { DeleteJobVacancyUseCase };
