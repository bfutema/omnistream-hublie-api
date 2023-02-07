import { injectable, inject } from 'tsyringe';

import { Notification } from '../../infra/typeorm/entities/Notification';
import { IListNotification } from '../../dtos/INotificationDTO';
import { INotificationsRepository } from '../../repositories/INotificationsRepository';

@injectable()
class ListNotificationUseCase {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute(params: IListNotification): Promise<[Notification[], number]> {
    const notifications = await this.notificationsRepository.find(params);

    return notifications;
  }
}

export { ListNotificationUseCase };
