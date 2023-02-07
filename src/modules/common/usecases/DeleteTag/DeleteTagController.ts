import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTagUseCase } from '@modules/common/usecases/DeleteTag/DeleteTagUseCase';

class DeleteTagController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTagUseCase = container.resolve(DeleteTagUseCase);

    await deleteTagUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteTagController();

export { INSTANCE as DeleteTagController };
