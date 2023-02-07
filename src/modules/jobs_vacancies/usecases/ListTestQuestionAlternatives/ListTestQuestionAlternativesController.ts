import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListTestQuestionAlternativeUseCase } from '@modules/jobs_vacancies/usecases/ListTestQuestionAlternatives/ListTestQuestionAlternativesUseCase';

class ListTestQuestionAlternativesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listTestQuestionAlternativeUseCase = container.resolve(ListTestQuestionAlternativeUseCase);

    const [testquestionalternatives, total] = await listTestQuestionAlternativeUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: testquestionalternatives,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListTestQuestionAlternativesController();

export { INSTANCE as ListTestQuestionAlternativesController };
