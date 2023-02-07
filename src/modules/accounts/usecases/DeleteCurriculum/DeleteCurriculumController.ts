import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCurriculumUseCase } from '@modules/accounts/usecases/DeleteCurriculum/DeleteCurriculumUseCase';

class DeleteCurriculumController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCurriculumUseCase = container.resolve(DeleteCurriculumUseCase);

    await deleteCurriculumUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteCurriculumController();

export { INSTANCE as DeleteCurriculumController };
