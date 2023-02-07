import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListCurriculumUseCase } from '@modules/accounts/usecases/ListCurricula/ListCurriculaUseCase';

class ListCurriculaController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listCurriculumUseCase = container.resolve(ListCurriculumUseCase);

    const [curricula, total] = await listCurriculumUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: curricula,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListCurriculaController();

export { INSTANCE as ListCurriculaController };
