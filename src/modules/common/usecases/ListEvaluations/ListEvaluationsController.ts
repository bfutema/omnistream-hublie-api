import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListEvaluationUseCase } from '@modules/common/usecases/ListEvaluations/ListEvaluationsUseCase';

class ListEvaluationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listEvaluationUseCase = container.resolve(ListEvaluationUseCase);

    const [evaluations, total] = await listEvaluationUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: evaluations,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListEvaluationsController();

export { INSTANCE as ListEvaluationsController };
