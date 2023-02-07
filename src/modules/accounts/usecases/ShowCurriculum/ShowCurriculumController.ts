import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCurriculumUseCase } from '@modules/accounts/usecases/ShowCurriculum/ShowCurriculumUseCase';

class ShowCurriculumController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCurriculumUseCase = container.resolve(ShowCurriculumUseCase);

    const foundedCurriculum = await showCurriculumUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedCurriculum));
  }
}

const INSTANCE = new ShowCurriculumController();

export { INSTANCE as ShowCurriculumController };
