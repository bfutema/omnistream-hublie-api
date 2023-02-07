import { Router } from 'express';

import { CreateAccountController } from '../../usecases/CreateAccount/CreateAccountController';
import { DeleteAccountController } from '../../usecases/DeleteAccount/DeleteAccountController';
import { ListAccountsController } from '../../usecases/ListAccounts/ListAccountsController';
import { ShowAccountController } from '../../usecases/ShowAccount/ShowAccountController';
import { UpdateAccountController } from '../../usecases/UpdateAccount/UpdateAccountController';

const accountsRouter = Router();

accountsRouter.get('/', ListAccountsController.handle);
accountsRouter.post('/', CreateAccountController.handle);
accountsRouter.get('/:id', ShowAccountController.handle);
accountsRouter.put('/:id', UpdateAccountController.handle);
accountsRouter.delete('/:id', DeleteAccountController.handle);

export { accountsRouter };
