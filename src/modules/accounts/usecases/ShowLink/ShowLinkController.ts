import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowLinkUseCase } from '@modules/accounts/usecases/ShowLink/ShowLinkUseCase';

class ShowLinkController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showLinkUseCase = container.resolve(ShowLinkUseCase);

    const foundedLink = await showLinkUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedLink));
  }
}

const INSTANCE = new ShowLinkController();

export { INSTANCE as ShowLinkController };
