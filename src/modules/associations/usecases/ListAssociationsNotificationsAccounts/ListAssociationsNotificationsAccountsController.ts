import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAssociationsNotificationsAccountsUseCase } from '@modules/associations/usecases/ListAssociationsNotificationsAccounts/ListAssociationsNotificationsAccountsUseCase';

class ListAssociationsNotificationsAccountsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAssociationsNotificationsAccountsUseCase = container.resolve(ListAssociationsNotificationsAccountsUseCase);

    const [associationsnotificationsaccounts, total] = await listAssociationsNotificationsAccountsUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: associationsnotificationsaccounts,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAssociationsNotificationsAccountsController();

export { INSTANCE as ListAssociationsNotificationsAccountsController };
