import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListConnectionUseCase } from '@modules/accounts/usecases/ListConnections/ListConnectionsUseCase';

class ListConnectionsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listConnectionUseCase = container.resolve(ListConnectionUseCase);

    const [connections, total] = await listConnectionUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: connections,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListConnectionsController();

export { INSTANCE as ListConnectionsController };
