import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListTestUseCase } from '@modules/jobs_vacancies/usecases/ListTests/ListTestsUseCase';

class ListTestsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listTestUseCase = container.resolve(ListTestUseCase);

    const [tests, total] = await listTestUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: tests,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListTestsController();

export { INSTANCE as ListTestsController };
