import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListCandidateUseCase } from '@modules/candidates/usecases/ListCandidates/ListCandidatesUseCase';

class ListCandidatesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listCandidateUseCase = container.resolve(ListCandidateUseCase);

    const [candidates, total] = await listCandidateUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: candidates,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListCandidatesController();

export { INSTANCE as ListCandidatesController };
