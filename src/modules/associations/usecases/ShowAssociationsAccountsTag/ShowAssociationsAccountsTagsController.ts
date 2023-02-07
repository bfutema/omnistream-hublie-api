import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAssociationsAccountsTagsUseCase } from '@modules/associations/usecases/ShowAssociationsAccountsTag/ShowAssociationsAccountsTagsUseCase';

class ShowAssociationsAccountsTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAssociationsAccountsTagsUseCase = container.resolve(ShowAssociationsAccountsTagsUseCase);

    const foundedAssociationsAccountsTags = await showAssociationsAccountsTagsUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedAssociationsAccountsTags));
  }
}

const INSTANCE = new ShowAssociationsAccountsTagsController();

export { INSTANCE as ShowAssociationsAccountsTagsController };
