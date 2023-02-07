import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAssociationsNotificationsAccountsUseCase } from '@modules/associations/usecases/UpdateAssociationsNotificationsAccount/UpdateAssociationsNotificationsAccountsUseCase';

class UpdateAssociationsNotificationsAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAssociationsNotificationsAccountsUseCase = container.resolve(UpdateAssociationsNotificationsAccountsUseCase);

    const updatedAssociationsNotificationsAccounts = await updateAssociationsNotificationsAccountsUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAssociationsNotificationsAccounts));
  }
}

const INSTANCE = new UpdateAssociationsNotificationsAccountsController();

export { INSTANCE as UpdateAssociationsNotificationsAccountsController };
