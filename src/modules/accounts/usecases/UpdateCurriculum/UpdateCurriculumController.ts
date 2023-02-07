import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCurriculumUseCase } from '@modules/accounts/usecases/UpdateCurriculum/UpdateCurriculumUseCase';

class UpdateCurriculumController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateCurriculumUseCase = container.resolve(UpdateCurriculumUseCase);

    const updatedCurriculum = await updateCurriculumUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedCurriculum));
  }
}

const INSTANCE = new UpdateCurriculumController();

export { INSTANCE as UpdateCurriculumController };
