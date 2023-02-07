import { Router } from 'express';

import { CreateAccountAvatarController } from '../../usecases/CreateAccountAvatar/CreateAccountAvatarController';
import { DeleteAccountAvatarController } from '../../usecases/DeleteAccountAvatar/DeleteAccountAvatarController';
import { ListAccountAvatarsController } from '../../usecases/ListAccountAvatars/ListAccountAvatarsController';
import { ShowAccountAvatarController } from '../../usecases/ShowAccountAvatar/ShowAccountAvatarController';
import { UpdateAccountAvatarController } from '../../usecases/UpdateAccountAvatar/UpdateAccountAvatarController';

const accountAvatarsRouter = Router();

accountAvatarsRouter.get('/', ListAccountAvatarsController.handle);
accountAvatarsRouter.post('/', CreateAccountAvatarController.handle);
accountAvatarsRouter.get('/:id', ShowAccountAvatarController.handle);
accountAvatarsRouter.put('/:id', UpdateAccountAvatarController.handle);
accountAvatarsRouter.delete('/:id', DeleteAccountAvatarController.handle);

export { accountAvatarsRouter };
