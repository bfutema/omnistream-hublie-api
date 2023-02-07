import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowTagUseCase } from '@modules/common/usecases/ShowTag/ShowTagUseCase';

class ShowTagController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTagUseCase = container.resolve(ShowTagUseCase);

    const foundedTag = await showTagUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedTag));
  }
}

const INSTANCE = new ShowTagController();

export { INSTANCE as ShowTagController };
