import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListTestCandidateAnswerUseCase } from '@modules/jobs_vacancies/usecases/ListTestCandidateAnswers/ListTestCandidateAnswersUseCase';

class ListTestCandidateAnswersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listTestCandidateAnswerUseCase = container.resolve(ListTestCandidateAnswerUseCase);

    const [testcandidateanswers, total] = await listTestCandidateAnswerUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: testcandidateanswers,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListTestCandidateAnswersController();

export { INSTANCE as ListTestCandidateAnswersController };
