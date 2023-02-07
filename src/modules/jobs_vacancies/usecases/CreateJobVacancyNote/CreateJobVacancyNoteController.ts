import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateJobVacancyNoteUseCase } from '@modules/jobs_vacancies/usecases/CreateJobVacancyNote/CreateJobVacancyNoteUseCase';

class CreateJobVacancyNoteController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createJobVacancyNoteUseCase = container.resolve(CreateJobVacancyNoteUseCase);

    const createdJobVacancyNote = await createJobVacancyNoteUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdJobVacancyNote));
  }
}

const INSTANCE = new CreateJobVacancyNoteController();

export { INSTANCE as CreateJobVacancyNoteController };
