import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowTestUseCase } from '@modules/jobs_vacancies/usecases/ShowTest/ShowTestUseCase';

class ShowTestController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTestUseCase = container.resolve(ShowTestUseCase);

    const foundedTest = await showTestUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedTest));
  }
}

const INSTANCE = new ShowTestController();

export { INSTANCE as ShowTestController };
