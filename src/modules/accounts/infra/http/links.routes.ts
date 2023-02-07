import { Router } from 'express';

import { CreateLinkController } from '../../usecases/CreateLink/CreateLinkController';
import { DeleteLinkController } from '../../usecases/DeleteLink/DeleteLinkController';
import { ListLinksController } from '../../usecases/ListLinks/ListLinksController';
import { ShowLinkController } from '../../usecases/ShowLink/ShowLinkController';
import { UpdateLinkController } from '../../usecases/UpdateLink/UpdateLinkController';

const linksRouter = Router();

linksRouter.get('/', ListLinksController.handle);
linksRouter.post('/', CreateLinkController.handle);
linksRouter.get('/:id', ShowLinkController.handle);
linksRouter.put('/:id', UpdateLinkController.handle);
linksRouter.delete('/:id', DeleteLinkController.handle);

export { linksRouter };
