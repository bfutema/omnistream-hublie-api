import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateNotificationUseCase } from '@modules/common/usecases/UpdateNotification/UpdateNotificationUseCase';

class UpdateNotificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateNotificationUseCase = container.resolve(UpdateNotificationUseCase);

    const updatedNotification = await updateNotificationUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedNotification));
  }
}

const INSTANCE = new UpdateNotificationController();

export { INSTANCE as UpdateNotificationController };
