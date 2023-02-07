import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListJobVacancyNoteUseCase } from '@modules/jobs_vacancies/usecases/ListJobVacancyNotes/ListJobVacancyNotesUseCase';

class ListJobVacancyNotesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listJobVacancyNoteUseCase = container.resolve(ListJobVacancyNoteUseCase);

    const [jobvacancynotes, total] = await listJobVacancyNoteUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: jobvacancynotes,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListJobVacancyNotesController();

export { INSTANCE as ListJobVacancyNotesController };
