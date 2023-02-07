import { Router } from 'express';

import { CreateCandidateController } from '../../usecases/CreateCandidate/CreateCandidateController';
import { DeleteCandidateController } from '../../usecases/DeleteCandidate/DeleteCandidateController';
import { ListCandidatesController } from '../../usecases/ListCandidates/ListCandidatesController';
import { ShowCandidateController } from '../../usecases/ShowCandidate/ShowCandidateController';
import { UpdateCandidateController } from '../../usecases/UpdateCandidate/UpdateCandidateController';

const candidatesRouter = Router();

candidatesRouter.get('/', ListCandidatesController.handle);
candidatesRouter.post('/', CreateCandidateController.handle);
candidatesRouter.get('/:id', ShowCandidateController.handle);
candidatesRouter.put('/:id', UpdateCandidateController.handle);
candidatesRouter.delete('/:id', DeleteCandidateController.handle);

export { candidatesRouter };
