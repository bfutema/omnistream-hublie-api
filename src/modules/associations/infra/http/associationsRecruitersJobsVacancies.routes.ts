import { Router } from 'express';

import { CreateAssociationsRecruitersJobsVacancyController } from '../../usecases/CreateAssociationsRecruitersJobsVacancy/CreateAssociationsRecruitersJobsVacancyController';
import { DeleteAssociationsRecruitersJobsVacancyController } from '../../usecases/DeleteAssociationsRecruitersJobsVacancy/DeleteAssociationsRecruitersJobsVacancyController';
import { ListAssociationsRecruitersJobsVacanciesController } from '../../usecases/ListAssociationsRecruitersJobsVacancies/ListAssociationsRecruitersJobsVacanciesController';
import { ShowAssociationsRecruitersJobsVacancyController } from '../../usecases/ShowAssociationsRecruitersJobsVacancy/ShowAssociationsRecruitersJobsVacancyController';
import { UpdateAssociationsRecruitersJobsVacancyController } from '../../usecases/UpdateAssociationsRecruitersJobsVacancy/UpdateAssociationsRecruitersJobsVacancyController';

const associationsRecruitersJobsVacanciesRouter = Router();

associationsRecruitersJobsVacanciesRouter.get('/', ListAssociationsRecruitersJobsVacanciesController.handle);
associationsRecruitersJobsVacanciesRouter.post('/', CreateAssociationsRecruitersJobsVacancyController.handle);
associationsRecruitersJobsVacanciesRouter.get('/:id', ShowAssociationsRecruitersJobsVacancyController.handle);
associationsRecruitersJobsVacanciesRouter.put('/:id', UpdateAssociationsRecruitersJobsVacancyController.handle);
associationsRecruitersJobsVacanciesRouter.delete('/:id', DeleteAssociationsRecruitersJobsVacancyController.handle);

export { associationsRecruitersJobsVacanciesRouter };
