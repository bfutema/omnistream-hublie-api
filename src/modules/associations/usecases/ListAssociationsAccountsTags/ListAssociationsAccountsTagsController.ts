import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAssociationsAccountsTagsUseCase } from '@modules/associations/usecases/ListAssociationsAccountsTags/ListAssociationsAccountsTagsUseCase';

class ListAssociationsAccountsTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAssociationsAccountsTagsUseCase = container.resolve(ListAssociationsAccountsTagsUseCase);

    const [associationsaccountstags, total] = await listAssociationsAccountsTagsUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: associationsaccountstags,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAssociationsAccountsTagsController();

export { INSTANCE as ListAssociationsAccountsTagsController };
