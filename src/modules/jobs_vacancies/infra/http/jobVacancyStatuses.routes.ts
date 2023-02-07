import { Router } from 'express';

import { CreateJobVacancyStatuController } from '../../usecases/CreateJobVacancyStatu/CreateJobVacancyStatuController';
import { DeleteJobVacancyStatuController } from '../../usecases/DeleteJobVacancyStatu/DeleteJobVacancyStatuController';
import { ListJobVacancyStatusesController } from '../../usecases/ListJobVacancyStatuses/ListJobVacancyStatusesController';
import { ShowJobVacancyStatuController } from '../../usecases/ShowJobVacancyStatu/ShowJobVacancyStatuController';
import { UpdateJobVacancyStatuController } from '../../usecases/UpdateJobVacancyStatu/UpdateJobVacancyStatuController';

const jobVacancyStatusesRouter = Router();

jobVacancyStatusesRouter.get('/', ListJobVacancyStatusesController.handle);
jobVacancyStatusesRouter.post('/', CreateJobVacancyStatuController.handle);
jobVacancyStatusesRouter.get('/:id', ShowJobVacancyStatuController.handle);
jobVacancyStatusesRouter.put('/:id', UpdateJobVacancyStatuController.handle);
jobVacancyStatusesRouter.delete('/:id', DeleteJobVacancyStatuController.handle);

export { jobVacancyStatusesRouter };
