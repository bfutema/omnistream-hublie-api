import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListTagUseCase } from '@modules/common/usecases/ListTags/ListTagsUseCase';

class ListTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listTagUseCase = container.resolve(ListTagUseCase);

    const [tags, total] = await listTagUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: tags,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListTagsController();

export { INSTANCE as ListTagsController };
