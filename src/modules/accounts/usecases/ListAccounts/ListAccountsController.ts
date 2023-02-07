import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAccountUseCase } from '@modules/accounts/usecases/ListAccounts/ListAccountsUseCase';

class ListAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAccountUseCase = container.resolve(ListAccountUseCase);

    const [accounts, total] = await listAccountUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: accounts,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAccountsController();

export { INSTANCE as ListAccountsController };
