import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListAssociationsRecruitersJobsVacanciesUseCase } from '@modules/associations/usecases/ListAssociationsRecruitersJobsVacancies/ListAssociationsRecruitersJobsVacanciesUseCase';

class ListAssociationsRecruitersJobsVacanciesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listAssociationsRecruitersJobsVacanciesUseCase = container.resolve(ListAssociationsRecruitersJobsVacanciesUseCase);

    const [associationsrecruitersjobsvacancies, total] = await listAssociationsRecruitersJobsVacanciesUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: associationsrecruitersjobsvacancies,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListAssociationsRecruitersJobsVacanciesController();

export { INSTANCE as ListAssociationsRecruitersJobsVacanciesController };
