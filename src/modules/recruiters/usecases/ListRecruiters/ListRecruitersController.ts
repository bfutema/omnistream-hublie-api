import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListRecruiterUseCase } from '@modules/recruiters/usecases/ListRecruiters/ListRecruitersUseCase';

class ListRecruitersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listRecruiterUseCase = container.resolve(ListRecruiterUseCase);

    const [recruiters, total] = await listRecruiterUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: recruiters,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListRecruitersController();

export { INSTANCE as ListRecruitersController };
