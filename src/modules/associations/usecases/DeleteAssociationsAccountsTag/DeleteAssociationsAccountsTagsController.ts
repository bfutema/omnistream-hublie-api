import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAssociationsAccountsTagsUseCase } from '@modules/associations/usecases/DeleteAssociationsAccountsTag/DeleteAssociationsAccountsTagsUseCase';

class DeleteAssociationsAccountsTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAssociationsAccountsTagsUseCase = container.resolve(DeleteAssociationsAccountsTagsUseCase);

    await deleteAssociationsAccountsTagsUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAssociationsAccountsTagsController();

export { INSTANCE as DeleteAssociationsAccountsTagsController };
