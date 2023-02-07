import { Router } from 'express';

import { CreateTestCandidateAnswerController } from '../../usecases/CreateTestCandidateAnswer/CreateTestCandidateAnswerController';
import { DeleteTestCandidateAnswerController } from '../../usecases/DeleteTestCandidateAnswer/DeleteTestCandidateAnswerController';
import { ListTestCandidateAnswersController } from '../../usecases/ListTestCandidateAnswers/ListTestCandidateAnswersController';
import { ShowTestCandidateAnswerController } from '../../usecases/ShowTestCandidateAnswer/ShowTestCandidateAnswerController';
import { UpdateTestCandidateAnswerController } from '../../usecases/UpdateTestCandidateAnswer/UpdateTestCandidateAnswerController';

const testCandidateAnswersRouter = Router();

testCandidateAnswersRouter.get('/', ListTestCandidateAnswersController.handle);
testCandidateAnswersRouter.post('/', CreateTestCandidateAnswerController.handle);
testCandidateAnswersRouter.get('/:id', ShowTestCandidateAnswerController.handle);
testCandidateAnswersRouter.put('/:id', UpdateTestCandidateAnswerController.handle);
testCandidateAnswersRouter.delete('/:id', DeleteTestCandidateAnswerController.handle);

export { testCandidateAnswersRouter };
