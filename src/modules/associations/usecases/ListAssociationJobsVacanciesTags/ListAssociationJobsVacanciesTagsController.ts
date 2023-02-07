import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAssociationJobsVacanciesTagsUseCase } from '@modules/associations/usecases/ListAssociationJobsVacanciesTags/ListAssociationJobsVacanciesTagsUseCase';

class ListAssociationJobsVacanciesTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAssociationJobsVacanciesTagsUseCase = container.resolve(ListAssociationJobsVacanciesTagsUseCase);

    const [associationjobsvacanciestags, total] = await listAssociationJobsVacanciesTagsUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: associationjobsvacanciestags,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAssociationJobsVacanciesTagsController();

export { INSTANCE as ListAssociationJobsVacanciesTagsController };
