import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateJobVacancyNoteUseCase } from '@modules/jobs_vacancies/usecases/UpdateJobVacancyNote/UpdateJobVacancyNoteUseCase';

class UpdateJobVacancyNoteController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateJobVacancyNoteUseCase = container.resolve(UpdateJobVacancyNoteUseCase);

    const updatedJobVacancyNote = await updateJobVacancyNoteUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedJobVacancyNote));
  }
}

const INSTANCE = new UpdateJobVacancyNoteController();

export { INSTANCE as UpdateJobVacancyNoteController };
