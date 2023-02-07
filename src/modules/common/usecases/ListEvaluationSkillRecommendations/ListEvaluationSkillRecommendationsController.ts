import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListEvaluationSkillRecommendationUseCase } from '@modules/common/usecases/ListEvaluationSkillRecommendations/ListEvaluationSkillRecommendationsUseCase';

class ListEvaluationSkillRecommendationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listEvaluationSkillRecommendationUseCase = container.resolve(ListEvaluationSkillRecommendationUseCase);

    const [evaluationskillrecommendations, total] = await listEvaluationSkillRecommendationUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: evaluationskillrecommendations,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListEvaluationSkillRecommendationsController();

export { INSTANCE as ListEvaluationSkillRecommendationsController };
