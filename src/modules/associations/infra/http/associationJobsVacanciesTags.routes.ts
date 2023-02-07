import { Router } from 'express';

import { CreateAssociationJobsVacanciesTagController } from '../../usecases/CreateAssociationJobsVacanciesTag/CreateAssociationJobsVacanciesTagController';
import { DeleteAssociationJobsVacanciesTagController } from '../../usecases/DeleteAssociationJobsVacanciesTag/DeleteAssociationJobsVacanciesTagController';
import { ListAssociationJobsVacanciesTagsController } from '../../usecases/ListAssociationJobsVacanciesTags/ListAssociationJobsVacanciesTagsController';
import { ShowAssociationJobsVacanciesTagController } from '../../usecases/ShowAssociationJobsVacanciesTag/ShowAssociationJobsVacanciesTagController';
import { UpdateAssociationJobsVacanciesTagController } from '../../usecases/UpdateAssociationJobsVacanciesTag/UpdateAssociationJobsVacanciesTagController';

const associationJobsVacanciesTagsRouter = Router();

associationJobsVacanciesTagsRouter.get('/', ListAssociationJobsVacanciesTagsController.handle);
associationJobsVacanciesTagsRouter.post('/', CreateAssociationJobsVacanciesTagController.handle);
associationJobsVacanciesTagsRouter.get('/:id', ShowAssociationJobsVacanciesTagController.handle);
associationJobsVacanciesTagsRouter.put('/:id', UpdateAssociationJobsVacanciesTagController.handle);
associationJobsVacanciesTagsRouter.delete('/:id', DeleteAssociationJobsVacanciesTagController.handle);

export { associationJobsVacanciesTagsRouter };
