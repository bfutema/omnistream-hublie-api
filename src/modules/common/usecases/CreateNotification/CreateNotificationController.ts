import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateNotificationUseCase } from '@modules/common/usecases/CreateNotification/CreateNotificationUseCase';

class CreateNotificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createNotificationUseCase = container.resolve(CreateNotificationUseCase);

    const createdNotification = await createNotificationUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdNotification));
  }
}

const INSTANCE = new CreateNotificationController();

export { INSTANCE as CreateNotificationController };
