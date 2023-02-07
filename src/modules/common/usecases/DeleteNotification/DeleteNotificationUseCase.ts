import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteNotification } from '../../dtos/INotificationDTO';
import { INotificationsRepository } from '../../repositories/INotificationsRepository';

@injectable()
class DeleteNotificationUseCase {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({ id }: IDeleteNotification): Promise<void> {
    const foundedNotification = await this.notificationsRepository.findById({ id });

    if (!foundedNotification) {
      throw new AppError('Notification not found!', 404);
    }

    await this.notificationsRepository.delete(id);
  }
}

export { DeleteNotificationUseCase };
