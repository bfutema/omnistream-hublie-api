import { Router } from 'express';

import { CreateAddresController } from '../../usecases/CreateAddres/CreateAddresController';
import { DeleteAddresController } from '../../usecases/DeleteAddres/DeleteAddresController';
import { ListAddressesController } from '../../usecases/ListAddresses/ListAddressesController';
import { ShowAddresController } from '../../usecases/ShowAddres/ShowAddresController';
import { UpdateAddresController } from '../../usecases/UpdateAddres/UpdateAddresController';

const addressesRouter = Router();

addressesRouter.get('/', ListAddressesController.handle);
addressesRouter.post('/', CreateAddresController.handle);
addressesRouter.get('/:id', ShowAddresController.handle);
addressesRouter.put('/:id', UpdateAddresController.handle);
addressesRouter.delete('/:id', DeleteAddresController.handle);

export { addressesRouter };
