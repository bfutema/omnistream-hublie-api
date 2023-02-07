import { injectable, inject } from 'tsyringe';

import { JobVacancyNote } from '../../infra/typeorm/entities/JobVacancyNote';
import { ICreateJobVacancyNote } from '../../dtos/IJobVacancyNoteDTO';
import { IJobVacancyNotesRepository } from '../../repositories/IJobVacancyNotesRepository';

@injectable()
class CreateJobVacancyNoteUseCase {
  constructor(
    @inject('JobVacancyNotesRepository')
    private jobVacancyNotesRepository: IJobVacancyNotesRepository,
  ) {}

  public async execute(data: ICreateJobVacancyNote): Promise<JobVacancyNote> {
    const { id } = await this.jobVacancyNotesRepository.create(data);

    const createdJobVacancyNote = await this.jobVacancyNotesRepository.findById({ id });

    return createdJobVacancyNote;
  }
}

export { CreateJobVacancyNoteUseCase };
