import { Router } from 'express';

import { CreateTestController } from '../../usecases/CreateTest/CreateTestController';
import { DeleteTestController } from '../../usecases/DeleteTest/DeleteTestController';
import { ListTestsController } from '../../usecases/ListTests/ListTestsController';
import { ShowTestController } from '../../usecases/ShowTest/ShowTestController';
import { UpdateTestController } from '../../usecases/UpdateTest/UpdateTestController';

const testsRouter = Router();

testsRouter.get('/', ListTestsController.handle);
testsRouter.post('/', CreateTestController.handle);
testsRouter.get('/:id', ShowTestController.handle);
testsRouter.put('/:id', UpdateTestController.handle);
testsRouter.delete('/:id', DeleteTestController.handle);

export { testsRouter };
