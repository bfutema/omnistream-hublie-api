import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAnswerTestUseCase } from '@modules/jobs_vacancies/usecases/ListAnswerTests/ListAnswerTestsUseCase';

class ListAnswerTestsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAnswerTestUseCase = container.resolve(ListAnswerTestUseCase);

    const [answertests, total] = await listAnswerTestUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: answertests,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAnswerTestsController();

export { INSTANCE as ListAnswerTestsController };
