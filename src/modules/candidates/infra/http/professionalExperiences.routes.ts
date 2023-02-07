import { Router } from 'express';

import { CreateProfessionalExperienceController } from '../../usecases/CreateProfessionalExperience/CreateProfessionalExperienceController';
import { DeleteProfessionalExperienceController } from '../../usecases/DeleteProfessionalExperience/DeleteProfessionalExperienceController';
import { ListProfessionalExperiencesController } from '../../usecases/ListProfessionalExperiences/ListProfessionalExperiencesController';
import { ShowProfessionalExperienceController } from '../../usecases/ShowProfessionalExperience/ShowProfessionalExperienceController';
import { UpdateProfessionalExperienceController } from '../../usecases/UpdateProfessionalExperience/UpdateProfessionalExperienceController';

const professionalExperiencesRouter = Router();

professionalExperiencesRouter.get('/', ListProfessionalExperiencesController.handle);
professionalExperiencesRouter.post('/', CreateProfessionalExperienceController.handle);
professionalExperiencesRouter.get('/:id', ShowProfessionalExperienceController.handle);
professionalExperiencesRouter.put('/:id', UpdateProfessionalExperienceController.handle);
professionalExperiencesRouter.delete('/:id', DeleteProfessionalExperienceController.handle);

export { professionalExperiencesRouter };
