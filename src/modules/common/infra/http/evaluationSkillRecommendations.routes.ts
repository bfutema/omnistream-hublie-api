import { Router } from 'express';

import { CreateEvaluationSkillRecommendationController } from '../../usecases/CreateEvaluationSkillRecommendation/CreateEvaluationSkillRecommendationController';
import { DeleteEvaluationSkillRecommendationController } from '../../usecases/DeleteEvaluationSkillRecommendation/DeleteEvaluationSkillRecommendationController';
import { ListEvaluationSkillRecommendationsController } from '../../usecases/ListEvaluationSkillRecommendations/ListEvaluationSkillRecommendationsController';
import { ShowEvaluationSkillRecommendationController } from '../../usecases/ShowEvaluationSkillRecommendation/ShowEvaluationSkillRecommendationController';
import { UpdateEvaluationSkillRecommendationController } from '../../usecases/UpdateEvaluationSkillRecommendation/UpdateEvaluationSkillRecommendationController';

const evaluationSkillRecommendationsRouter = Router();

evaluationSkillRecommendationsRouter.get('/', ListEvaluationSkillRecommendationsController.handle);
evaluationSkillRecommendationsRouter.post('/', CreateEvaluationSkillRecommendationController.handle);
evaluationSkillRecommendationsRouter.get('/:id', ShowEvaluationSkillRecommendationController.handle);
evaluationSkillRecommendationsRouter.put('/:id', UpdateEvaluationSkillRecommendationController.handle);
evaluationSkillRecommendationsRouter.delete('/:id', DeleteEvaluationSkillRecommendationController.handle);

export { evaluationSkillRecommendationsRouter };
