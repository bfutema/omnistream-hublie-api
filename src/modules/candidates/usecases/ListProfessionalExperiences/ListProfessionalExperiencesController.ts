import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListProfessionalExperienceUseCase } from '@modules/candidates/usecases/ListProfessionalExperiences/ListProfessionalExperiencesUseCase';

class ListProfessionalExperiencesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listProfessionalExperienceUseCase = container.resolve(ListProfessionalExperienceUseCase);

    const [professionalexperiences, total] = await listProfessionalExperienceUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: professionalexperiences,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListProfessionalExperiencesController();

export { INSTANCE as ListProfessionalExperiencesController };
