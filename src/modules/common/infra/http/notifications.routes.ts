import { Router } from 'express';

import { CreateNotificationController } from '../../usecases/CreateNotification/CreateNotificationController';
import { DeleteNotificationController } from '../../usecases/DeleteNotification/DeleteNotificationController';
import { ListNotificationsController } from '../../usecases/ListNotifications/ListNotificationsController';
import { ShowNotificationController } from '../../usecases/ShowNotification/ShowNotificationController';
import { UpdateNotificationController } from '../../usecases/UpdateNotification/UpdateNotificationController';

const notificationsRouter = Router();

notificationsRouter.get('/', ListNotificationsController.handle);
notificationsRouter.post('/', CreateNotificationController.handle);
notificationsRouter.get('/:id', ShowNotificationController.handle);
notificationsRouter.put('/:id', UpdateNotificationController.handle);
notificationsRouter.delete('/:id', DeleteNotificationController.handle);

export { notificationsRouter };
