import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Notification } from '../../infra/typeorm/entities/Notification';
import { IShowNotification } from '../../dtos/INotificationDTO';
import { INotificationsRepository } from '../../repositories/INotificationsRepository';

@injectable()
class ShowNotificationUseCase {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({ id }: IShowNotification): Promise<Notification> {
    const notification = await this.notificationsRepository.findById({ id });

    if (!notification) {
      throw new AppError('Notification not found!', 404);
    }

    return notification;
  }
}

export { ShowNotificationUseCase };
