import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteNotificationUseCase } from '@modules/common/usecases/DeleteNotification/DeleteNotificationUseCase';

class DeleteNotificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteNotificationUseCase = container.resolve(DeleteNotificationUseCase);

    await deleteNotificationUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteNotificationController();

export { INSTANCE as DeleteNotificationController };
