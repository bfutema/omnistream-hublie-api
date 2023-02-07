import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteLinkUseCase } from '@modules/accounts/usecases/DeleteLink/DeleteLinkUseCase';

class DeleteLinkController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteLinkUseCase = container.resolve(DeleteLinkUseCase);

    await deleteLinkUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteLinkController();

export { INSTANCE as DeleteLinkController };
