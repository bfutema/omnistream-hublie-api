import { getRepository } from 'typeorm';

import { INotificationsRepository } from '@modules/commons/repositories/INotificationsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Notification } from '../entities/Notification';

class NotificationsRepository
  extends BaseRepository<Notification>
  implements INotificationsRepository {
    constructor() {
      super(getRepository(Notification));
    }
  }

export { NotificationsRepository };
