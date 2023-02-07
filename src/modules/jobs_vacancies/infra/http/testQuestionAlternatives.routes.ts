import { Router } from 'express';

import { CreateTestQuestionAlternativeController } from '../../usecases/CreateTestQuestionAlternative/CreateTestQuestionAlternativeController';
import { DeleteTestQuestionAlternativeController } from '../../usecases/DeleteTestQuestionAlternative/DeleteTestQuestionAlternativeController';
import { ListTestQuestionAlternativesController } from '../../usecases/ListTestQuestionAlternatives/ListTestQuestionAlternativesController';
import { ShowTestQuestionAlternativeController } from '../../usecases/ShowTestQuestionAlternative/ShowTestQuestionAlternativeController';
import { UpdateTestQuestionAlternativeController } from '../../usecases/UpdateTestQuestionAlternative/UpdateTestQuestionAlternativeController';

const testQuestionAlternativesRouter = Router();

testQuestionAlternativesRouter.get('/', ListTestQuestionAlternativesController.handle);
testQuestionAlternativesRouter.post('/', CreateTestQuestionAlternativeController.handle);
testQuestionAlternativesRouter.get('/:id', ShowTestQuestionAlternativeController.handle);
testQuestionAlternativesRouter.put('/:id', UpdateTestQuestionAlternativeController.handle);
testQuestionAlternativesRouter.delete('/:id', DeleteTestQuestionAlternativeController.handle);

export { testQuestionAlternativesRouter };
