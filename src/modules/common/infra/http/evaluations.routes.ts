import { Router } from 'express';

import { CreateEvaluationController } from '../../usecases/CreateEvaluation/CreateEvaluationController';
import { DeleteEvaluationController } from '../../usecases/DeleteEvaluation/DeleteEvaluationController';
import { ListEvaluationsController } from '../../usecases/ListEvaluations/ListEvaluationsController';
import { ShowEvaluationController } from '../../usecases/ShowEvaluation/ShowEvaluationController';
import { UpdateEvaluationController } from '../../usecases/UpdateEvaluation/UpdateEvaluationController';

const evaluationsRouter = Router();

evaluationsRouter.get('/', ListEvaluationsController.handle);
evaluationsRouter.post('/', CreateEvaluationController.handle);
evaluationsRouter.get('/:id', ShowEvaluationController.handle);
evaluationsRouter.put('/:id', UpdateEvaluationController.handle);
evaluationsRouter.delete('/:id', DeleteEvaluationController.handle);

export { evaluationsRouter };
