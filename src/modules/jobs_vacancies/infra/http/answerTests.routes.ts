import { Router } from 'express';

import { CreateAnswerTestController } from '../../usecases/CreateAnswerTest/CreateAnswerTestController';
import { DeleteAnswerTestController } from '../../usecases/DeleteAnswerTest/DeleteAnswerTestController';
import { ListAnswerTestsController } from '../../usecases/ListAnswerTests/ListAnswerTestsController';
import { ShowAnswerTestController } from '../../usecases/ShowAnswerTest/ShowAnswerTestController';
import { UpdateAnswerTestController } from '../../usecases/UpdateAnswerTest/UpdateAnswerTestController';

const answerTestsRouter = Router();

answerTestsRouter.get('/', ListAnswerTestsController.handle);
answerTestsRouter.post('/', CreateAnswerTestController.handle);
answerTestsRouter.get('/:id', ShowAnswerTestController.handle);
answerTestsRouter.put('/:id', UpdateAnswerTestController.handle);
answerTestsRouter.delete('/:id', DeleteAnswerTestController.handle);

export { answerTestsRouter };
