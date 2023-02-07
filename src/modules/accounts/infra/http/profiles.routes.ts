import { Router } from 'express';

import { CreateProfileController } from '../../usecases/CreateProfile/CreateProfileController';
import { DeleteProfileController } from '../../usecases/DeleteProfile/DeleteProfileController';
import { ListProfilesController } from '../../usecases/ListProfiles/ListProfilesController';
import { ShowProfileController } from '../../usecases/ShowProfile/ShowProfileController';
import { UpdateProfileController } from '../../usecases/UpdateProfile/UpdateProfileController';

const profilesRouter = Router();

profilesRouter.get('/', ListProfilesController.handle);
profilesRouter.post('/', CreateProfileController.handle);
profilesRouter.get('/:id', ShowProfileController.handle);
profilesRouter.put('/:id', UpdateProfileController.handle);
profilesRouter.delete('/:id', DeleteProfileController.handle);

export { profilesRouter };
