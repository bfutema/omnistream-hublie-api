import { Router } from 'express';

import { CreateCurriculumController } from '../../usecases/CreateCurriculum/CreateCurriculumController';
import { DeleteCurriculumController } from '../../usecases/DeleteCurriculum/DeleteCurriculumController';
import { ListCurriculaController } from '../../usecases/ListCurricula/ListCurriculaController';
import { ShowCurriculumController } from '../../usecases/ShowCurriculum/ShowCurriculumController';
import { UpdateCurriculumController } from '../../usecases/UpdateCurriculum/UpdateCurriculumController';

const curriculaRouter = Router();

curriculaRouter.get('/', ListCurriculaController.handle);
curriculaRouter.post('/', CreateCurriculumController.handle);
curriculaRouter.get('/:id', ShowCurriculumController.handle);
curriculaRouter.put('/:id', UpdateCurriculumController.handle);
curriculaRouter.delete('/:id', DeleteCurriculumController.handle);

export { curriculaRouter };
