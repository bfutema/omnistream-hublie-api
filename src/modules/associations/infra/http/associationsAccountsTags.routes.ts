import { Router } from 'express';

import { CreateAssociationsAccountsTagController } from '../../usecases/CreateAssociationsAccountsTag/CreateAssociationsAccountsTagController';
import { DeleteAssociationsAccountsTagController } from '../../usecases/DeleteAssociationsAccountsTag/DeleteAssociationsAccountsTagController';
import { ListAssociationsAccountsTagsController } from '../../usecases/ListAssociationsAccountsTags/ListAssociationsAccountsTagsController';
import { ShowAssociationsAccountsTagController } from '../../usecases/ShowAssociationsAccountsTag/ShowAssociationsAccountsTagController';
import { UpdateAssociationsAccountsTagController } from '../../usecases/UpdateAssociationsAccountsTag/UpdateAssociationsAccountsTagController';

const associationsAccountsTagsRouter = Router();

associationsAccountsTagsRouter.get('/', ListAssociationsAccountsTagsController.handle);
associationsAccountsTagsRouter.post('/', CreateAssociationsAccountsTagController.handle);
associationsAccountsTagsRouter.get('/:id', ShowAssociationsAccountsTagController.handle);
associationsAccountsTagsRouter.put('/:id', UpdateAssociationsAccountsTagController.handle);
associationsAccountsTagsRouter.delete('/:id', DeleteAssociationsAccountsTagController.handle);

export { associationsAccountsTagsRouter };
