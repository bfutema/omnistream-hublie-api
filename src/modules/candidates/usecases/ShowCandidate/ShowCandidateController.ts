import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCandidateUseCase } from '@modules/candidates/usecases/ShowCandidate/ShowCandidateUseCase';

class ShowCandidateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCandidateUseCase = container.resolve(ShowCandidateUseCase);

    const foundedCandidate = await showCandidateUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedCandidate));
  }
}

const INSTANCE = new ShowCandidateController();

export { INSTANCE as ShowCandidateController };
