import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAccountAvatarUseCase } from '@modules/accounts/usecases/ListAccountAvatars/ListAccountAvatarsUseCase';

class ListAccountAvatarsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAccountAvatarUseCase = container.resolve(ListAccountAvatarUseCase);

    const [accountavatars, total] = await listAccountAvatarUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: accountavatars,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAccountAvatarsController();

export { INSTANCE as ListAccountAvatarsController };
