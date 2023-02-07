import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListJobVacancyStatusUseCase } from '@modules/jobs_vacancies/usecases/ListJobVacancyStatuses/ListJobVacancyStatusesUseCase';

class ListJobVacancyStatusesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listJobVacancyStatusUseCase = container.resolve(ListJobVacancyStatusUseCase);

    const [jobvacancystatuses, total] = await listJobVacancyStatusUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: jobvacancystatuses,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListJobVacancyStatusesController();

export { INSTANCE as ListJobVacancyStatusesController };
