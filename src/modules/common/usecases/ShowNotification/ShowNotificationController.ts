import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowNotificationUseCase } from '@modules/common/usecases/ShowNotification/ShowNotificationUseCase';

class ShowNotificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showNotificationUseCase = container.resolve(ShowNotificationUseCase);

    const foundedNotification = await showNotificationUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedNotification));
  }
}

const INSTANCE = new ShowNotificationController();

export { INSTANCE as ShowNotificationController };
