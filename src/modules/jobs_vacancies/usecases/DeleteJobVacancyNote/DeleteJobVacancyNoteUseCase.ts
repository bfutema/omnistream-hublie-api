import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteJobVacancyNote } from '../../dtos/IJobVacancyNoteDTO';
import { IJobVacancyNotesRepository } from '../../repositories/IJobVacancyNotesRepository';

@injectable()
class DeleteJobVacancyNoteUseCase {
  constructor(
    @inject('JobVacancyNotesRepository')
    private jobVacancyNotesRepository: IJobVacancyNotesRepository,
  ) {}

  public async execute({ id }: IDeleteJobVacancyNote): Promise<void> {
    const foundedJobVacancyNote = await this.jobVacancyNotesRepository.findById({ id });

    if (!foundedJobVacancyNote) {
      throw new AppError('JobVacancyNote not found!', 404);
    }

    await this.jobVacancyNotesRepository.delete(id);
  }
}

export { DeleteJobVacancyNoteUseCase };
