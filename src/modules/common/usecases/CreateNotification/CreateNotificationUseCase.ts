import { injectable, inject } from 'tsyringe';

import { Notification } from '../../infra/typeorm/entities/Notification';
import { ICreateNotification } from '../../dtos/INotificationDTO';
import { INotificationsRepository } from '../../repositories/INotificationsRepository';

@injectable()
class CreateNotificationUseCase {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute(data: ICreateNotification): Promise<Notification> {
    const { id } = await this.notificationsRepository.create(data);

    const createdNotification = await this.notificationsRepository.findById({ id });

    return createdNotification;
  }
}

export { CreateNotificationUseCase };
