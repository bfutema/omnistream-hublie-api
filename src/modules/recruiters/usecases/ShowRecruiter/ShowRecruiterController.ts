import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowRecruiterUseCase } from '@modules/recruiters/usecases/ShowRecruiter/ShowRecruiterUseCase';

class ShowRecruiterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showRecruiterUseCase = container.resolve(ShowRecruiterUseCase);

    const foundedRecruiter = await showRecruiterUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedRecruiter));
  }
}

const INSTANCE = new ShowRecruiterController();

export { INSTANCE as ShowRecruiterController };
