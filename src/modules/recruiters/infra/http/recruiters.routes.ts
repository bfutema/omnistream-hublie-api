import { Router } from 'express';

import { CreateRecruiterController } from '../../usecases/CreateRecruiter/CreateRecruiterController';
import { DeleteRecruiterController } from '../../usecases/DeleteRecruiter/DeleteRecruiterController';
import { ListRecruitersController } from '../../usecases/ListRecruiters/ListRecruitersController';
import { ShowRecruiterController } from '../../usecases/ShowRecruiter/ShowRecruiterController';
import { UpdateRecruiterController } from '../../usecases/UpdateRecruiter/UpdateRecruiterController';

const recruitersRouter = Router();

recruitersRouter.get('/', ListRecruitersController.handle);
recruitersRouter.post('/', CreateRecruiterController.handle);
recruitersRouter.get('/:id', ShowRecruiterController.handle);
recruitersRouter.put('/:id', UpdateRecruiterController.handle);
recruitersRouter.delete('/:id', DeleteRecruiterController.handle);

export { recruitersRouter };
