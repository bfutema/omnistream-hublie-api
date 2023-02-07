import { injectable, inject } from 'tsyringe';

import { JobVacancyNote } from '../../infra/typeorm/entities/JobVacancyNote';
import { IListJobVacancyNote } from '../../dtos/IJobVacancyNoteDTO';
import { IJobVacancyNotesRepository } from '../../repositories/IJobVacancyNotesRepository';

@injectable()
class ListJobVacancyNoteUseCase {
  constructor(
    @inject('JobVacancyNotesRepository')
    private jobVacancyNotesRepository: IJobVacancyNotesRepository,
  ) {}

  public async execute(params: IListJobVacancyNote): Promise<[JobVacancyNote[], number]> {
    const jobVacancyNotes = await this.jobVacancyNotesRepository.find(params);

    return jobVacancyNotes;
  }
}

export { ListJobVacancyNoteUseCase };
