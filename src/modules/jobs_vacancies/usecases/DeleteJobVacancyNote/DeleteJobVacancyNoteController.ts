import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteJobVacancyNoteUseCase } from '@modules/jobs_vacancies/usecases/DeleteJobVacancyNote/DeleteJobVacancyNoteUseCase';

class DeleteJobVacancyNoteController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteJobVacancyNoteUseCase = container.resolve(DeleteJobVacancyNoteUseCase);

    await deleteJobVacancyNoteUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteJobVacancyNoteController();

export { INSTANCE as DeleteJobVacancyNoteController };
