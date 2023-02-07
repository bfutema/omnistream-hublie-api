import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListCompanyUseCase } from '@modules/companies/usecases/ListCompanies/ListCompaniesUseCase';

class ListCompaniesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listCompanyUseCase = container.resolve(ListCompanyUseCase);

    const [companies, total] = await listCompanyUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: companies,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListCompaniesController();

export { INSTANCE as ListCompaniesController };
