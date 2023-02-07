import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAssociationsAccountsTagsUseCase } from '@modules/associations/usecases/UpdateAssociationsAccountsTag/UpdateAssociationsAccountsTagsUseCase';

class UpdateAssociationsAccountsTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateAssociationsAccountsTagsUseCase = container.resolve(UpdateAssociationsAccountsTagsUseCase);

    const updatedAssociationsAccountsTags = await updateAssociationsAccountsTagsUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedAssociationsAccountsTags));
  }
}

const INSTANCE = new UpdateAssociationsAccountsTagsController();

export { INSTANCE as UpdateAssociationsAccountsTagsController };
