import { Router } from 'express';

import { CreateJobVacancyController } from '../../usecases/CreateJobVacancy/CreateJobVacancyController';
import { DeleteJobVacancyController } from '../../usecases/DeleteJobVacancy/DeleteJobVacancyController';
import { ListJobVacanciesController } from '../../usecases/ListJobVacancies/ListJobVacanciesController';
import { ShowJobVacancyController } from '../../usecases/ShowJobVacancy/ShowJobVacancyController';
import { UpdateJobVacancyController } from '../../usecases/UpdateJobVacancy/UpdateJobVacancyController';

const jobVacanciesRouter = Router();

jobVacanciesRouter.get('/', ListJobVacanciesController.handle);
jobVacanciesRouter.post('/', CreateJobVacancyController.handle);
jobVacanciesRouter.get('/:id', ShowJobVacancyController.handle);
jobVacanciesRouter.put('/:id', UpdateJobVacancyController.handle);
jobVacanciesRouter.delete('/:id', DeleteJobVacancyController.handle);

export { jobVacanciesRouter };
