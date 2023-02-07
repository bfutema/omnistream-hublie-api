import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancyNote } from '../../infra/typeorm/entities/JobVacancyNote';
import { IShowJobVacancyNote } from '../../dtos/IJobVacancyNoteDTO';
import { IJobVacancyNotesRepository } from '../../repositories/IJobVacancyNotesRepository';

@injectable()
class ShowJobVacancyNoteUseCase {
  constructor(
    @inject('JobVacancyNotesRepository')
    private jobVacancyNotesRepository: IJobVacancyNotesRepository,
  ) {}

  public async execute({ id }: IShowJobVacancyNote): Promise<JobVacancyNote> {
    const jobVacancyNote = await this.jobVacancyNotesRepository.findById({ id });

    if (!jobVacancyNote) {
      throw new AppError('JobVacancyNote not found!', 404);
    }

    return jobVacancyNote;
  }
}

export { ShowJobVacancyNoteUseCase };
