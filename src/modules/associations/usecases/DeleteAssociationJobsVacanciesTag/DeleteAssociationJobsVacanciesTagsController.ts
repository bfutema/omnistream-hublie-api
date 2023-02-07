import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAssociationJobsVacanciesTagsUseCase } from '@modules/associations/usecases/DeleteAssociationJobsVacanciesTag/DeleteAssociationJobsVacanciesTagsUseCase';

class DeleteAssociationJobsVacanciesTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAssociationJobsVacanciesTagsUseCase = container.resolve(DeleteAssociationJobsVacanciesTagsUseCase);

    await deleteAssociationJobsVacanciesTagsUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAssociationJobsVacanciesTagsController();

export { INSTANCE as DeleteAssociationJobsVacanciesTagsController };
