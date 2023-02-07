import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListJobVacancyUseCase } from '@modules/jobs_vacancies/usecases/ListJobVacancies/ListJobVacanciesUseCase';

class ListJobVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listJobVacancyUseCase = container.resolve(ListJobVacancyUseCase);

    const [jobvacancies, total] = await listJobVacancyUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: jobvacancies,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListJobVacanciesController();

export { INSTANCE as ListJobVacanciesController };
