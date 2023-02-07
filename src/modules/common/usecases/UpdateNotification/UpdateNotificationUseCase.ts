import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Notification } from '../../infra/typeorm/entities/Notification';
import { IUpdateNotification } from '../../dtos/INotificationDTO';
import { INotificationsRepository } from '../../repositories/INotificationsRepository';

@injectable()
class UpdateNotificationUseCase {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateNotification): Promise<Notification> {
    const foundedNotificationById = await this.notificationsRepository.findById({ id });

    if (!foundedNotificationById) {
      throw new AppError('Notification not found!', 404);
    }

    await this.notificationsRepository.save({ ...foundedNotificationById, ...rest });

    const updatedNotification = await this.notificationsRepository.findById({ id });

    return updatedNotification;
  }
}

export { UpdateNotificationUseCase };
