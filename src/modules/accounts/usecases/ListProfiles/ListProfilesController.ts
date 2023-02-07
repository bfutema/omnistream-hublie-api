import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListProfileUseCase } from '@modules/accounts/usecases/ListProfiles/ListProfilesUseCase';

class ListProfilesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listProfileUseCase = container.resolve(ListProfileUseCase);

    const [profiles, total] = await listProfileUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: profiles,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListProfilesController();

export { INSTANCE as ListProfilesController };
