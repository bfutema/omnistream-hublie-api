import { Router } from 'express';

import { CreateTagController } from '../../usecases/CreateTag/CreateTagController';
import { DeleteTagController } from '../../usecases/DeleteTag/DeleteTagController';
import { ListTagsController } from '../../usecases/ListTags/ListTagsController';
import { ShowTagController } from '../../usecases/ShowTag/ShowTagController';
import { UpdateTagController } from '../../usecases/UpdateTag/UpdateTagController';

const tagsRouter = Router();

tagsRouter.get('/', ListTagsController.handle);
tagsRouter.post('/', CreateTagController.handle);
tagsRouter.get('/:id', ShowTagController.handle);
tagsRouter.put('/:id', UpdateTagController.handle);
tagsRouter.delete('/:id', DeleteTagController.handle);

export { tagsRouter };
