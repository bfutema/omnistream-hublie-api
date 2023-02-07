import { Router } from 'express';

import { CreateJobVacancyNoteController } from '../../usecases/CreateJobVacancyNote/CreateJobVacancyNoteController';
import { DeleteJobVacancyNoteController } from '../../usecases/DeleteJobVacancyNote/DeleteJobVacancyNoteController';
import { ListJobVacancyNotesController } from '../../usecases/ListJobVacancyNotes/ListJobVacancyNotesController';
import { ShowJobVacancyNoteController } from '../../usecases/ShowJobVacancyNote/ShowJobVacancyNoteController';
import { UpdateJobVacancyNoteController } from '../../usecases/UpdateJobVacancyNote/UpdateJobVacancyNoteController';

const jobVacancyNotesRouter = Router();

jobVacancyNotesRouter.get('/', ListJobVacancyNotesController.handle);
jobVacancyNotesRouter.post('/', CreateJobVacancyNoteController.handle);
jobVacancyNotesRouter.get('/:id', ShowJobVacancyNoteController.handle);
jobVacancyNotesRouter.put('/:id', UpdateJobVacancyNoteController.handle);
jobVacancyNotesRouter.delete('/:id', DeleteJobVacancyNoteController.handle);

export { jobVacancyNotesRouter };
