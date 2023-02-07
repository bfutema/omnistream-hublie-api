import { Router } from 'express';

import { CreateAssociationsNotificationsAccountController } from '../../usecases/CreateAssociationsNotificationsAccount/CreateAssociationsNotificationsAccountController';
import { DeleteAssociationsNotificationsAccountController } from '../../usecases/DeleteAssociationsNotificationsAccount/DeleteAssociationsNotificationsAccountController';
import { ListAssociationsNotificationsAccountsController } from '../../usecases/ListAssociationsNotificationsAccounts/ListAssociationsNotificationsAccountsController';
import { ShowAssociationsNotificationsAccountController } from '../../usecases/ShowAssociationsNotificationsAccount/ShowAssociationsNotificationsAccountController';
import { UpdateAssociationsNotificationsAccountController } from '../../usecases/UpdateAssociationsNotificationsAccount/UpdateAssociationsNotificationsAccountController';

const associationsNotificationsAccountsRouter = Router();

associationsNotificationsAccountsRouter.get('/', ListAssociationsNotificationsAccountsController.handle);
associationsNotificationsAccountsRouter.post('/', CreateAssociationsNotificationsAccountController.handle);
associationsNotificationsAccountsRouter.get('/:id', ShowAssociationsNotificationsAccountController.handle);
associationsNotificationsAccountsRouter.put('/:id', UpdateAssociationsNotificationsAccountController.handle);
associationsNotificationsAccountsRouter.delete('/:id', DeleteAssociationsNotificationsAccountController.handle);

export { associationsNotificationsAccountsRouter };
