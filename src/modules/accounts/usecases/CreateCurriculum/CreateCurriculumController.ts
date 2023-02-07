import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCurriculumUseCase } from '@modules/accounts/usecases/CreateCurriculum/CreateCurriculumUseCase';

class CreateCurriculumController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createCurriculumUseCase = container.resolve(CreateCurriculumUseCase);

    const createdCurriculum = await createCurriculumUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdCurriculum));
  }
}

const INSTANCE = new CreateCurriculumController();

export { INSTANCE as CreateCurriculumController };
