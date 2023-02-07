import { Router } from 'express';

import { CreateConnectionController } from '../../usecases/CreateConnection/CreateConnectionController';
import { DeleteConnectionController } from '../../usecases/DeleteConnection/DeleteConnectionController';
import { ListConnectionsController } from '../../usecases/ListConnections/ListConnectionsController';
import { ShowConnectionController } from '../../usecases/ShowConnection/ShowConnectionController';
import { UpdateConnectionController } from '../../usecases/UpdateConnection/UpdateConnectionController';

const connectionsRouter = Router();

connectionsRouter.get('/', ListConnectionsController.handle);
connectionsRouter.post('/', CreateConnectionController.handle);
connectionsRouter.get('/:id', ShowConnectionController.handle);
connectionsRouter.put('/:id', UpdateConnectionController.handle);
connectionsRouter.delete('/:id', DeleteConnectionController.handle);

export { connectionsRouter };
