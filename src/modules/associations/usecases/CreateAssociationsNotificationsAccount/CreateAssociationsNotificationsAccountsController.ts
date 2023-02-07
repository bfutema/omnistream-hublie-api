import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAssociationsNotificationsAccountsUseCase } from '@modules/associations/usecases/CreateAssociationsNotificationsAccount/CreateAssociationsNotificationsAccountsUseCase';

class CreateAssociationsNotificationsAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createAssociationsNotificationsAccountsUseCase = container.resolve(CreateAssociationsNotificationsAccountsUseCase);

    const createdAssociationsNotificationsAccounts = await createAssociationsNotificationsAccountsUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdAssociationsNotificationsAccounts));
  }
}

const INSTANCE = new CreateAssociationsNotificationsAccountsController();

export { INSTANCE as CreateAssociationsNotificationsAccountsController };
