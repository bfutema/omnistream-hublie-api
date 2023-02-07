import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAssociationsNotificationsAccountsUseCase } from '@modules/associations/usecases/ShowAssociationsNotificationsAccount/ShowAssociationsNotificationsAccountsUseCase';

class ShowAssociationsNotificationsAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAssociationsNotificationsAccountsUseCase = container.resolve(ShowAssociationsNotificationsAccountsUseCase);

    const foundedAssociationsNotificationsAccounts = await showAssociationsNotificationsAccountsUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAssociationsNotificationsAccounts));
  }
}

const INSTANCE = new ShowAssociationsNotificationsAccountsController();

export { INSTANCE as ShowAssociationsNotificationsAccountsController };
