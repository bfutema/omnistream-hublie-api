import { Router } from 'express';

import { CreateTestQuestionController } from '../../usecases/CreateTestQuestion/CreateTestQuestionController';
import { DeleteTestQuestionController } from '../../usecases/DeleteTestQuestion/DeleteTestQuestionController';
import { ListTestQuestionsController } from '../../usecases/ListTestQuestions/ListTestQuestionsController';
import { ShowTestQuestionController } from '../../usecases/ShowTestQuestion/ShowTestQuestionController';
import { UpdateTestQuestionController } from '../../usecases/UpdateTestQuestion/UpdateTestQuestionController';

const testQuestionsRouter = Router();

testQuestionsRouter.get('/', ListTestQuestionsController.handle);
testQuestionsRouter.post('/', CreateTestQuestionController.handle);
testQuestionsRouter.get('/:id', ShowTestQuestionController.handle);
testQuestionsRouter.put('/:id', UpdateTestQuestionController.handle);
testQuestionsRouter.delete('/:id', DeleteTestQuestionController.handle);

export { testQuestionsRouter };
