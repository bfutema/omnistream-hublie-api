import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListLinkUseCase } from '@modules/accounts/usecases/ListLinks/ListLinksUseCase';

class ListLinksController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listLinkUseCase = container.resolve(ListLinkUseCase);

    const [links, total] = await listLinkUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: links,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListLinksController();

export { INSTANCE as ListLinksController };
