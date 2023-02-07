import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { JobVacancyNote } from '../../infra/typeorm/entities/JobVacancyNote';
import { IUpdateJobVacancyNote } from '../../dtos/IJobVacancyNoteDTO';
import { IJobVacancyNotesRepository } from '../../repositories/IJobVacancyNotesRepository';

@injectable()
class UpdateJobVacancyNoteUseCase {
  constructor(
    @inject('JobVacancyNotesRepository')
    private jobVacancyNotesRepository: IJobVacancyNotesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateJobVacancyNote): Promise<JobVacancyNote> {
    const foundedJobVacancyNoteById = await this.jobVacancyNotesRepository.findById({ id });

    if (!foundedJobVacancyNoteById) {
      throw new AppError('JobVacancyNote not found!', 404);
    }

    await this.jobVacancyNotesRepository.save({ ...foundedJobVacancyNoteById, ...rest });

    const updatedJobVacancyNote = await this.jobVacancyNotesRepository.findById({ id });

    return updatedJobVacancyNote;
  }
}

export { UpdateJobVacancyNoteUseCase };
