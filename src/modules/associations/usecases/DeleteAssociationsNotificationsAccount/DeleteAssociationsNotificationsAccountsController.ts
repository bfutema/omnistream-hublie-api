import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAssociationsNotificationsAccountsUseCase } from '@modules/associations/usecases/DeleteAssociationsNotificationsAccount/DeleteAssociationsNotificationsAccountsUseCase';

class DeleteAssociationsNotificationsAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAssociationsNotificationsAccountsUseCase = container.resolve(DeleteAssociationsNotificationsAccountsUseCase);

    await deleteAssociationsNotificationsAccountsUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteAssociationsNotificationsAccountsController();

export { INSTANCE as DeleteAssociationsNotificationsAccountsController };
