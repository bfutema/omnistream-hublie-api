import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCandidateUseCase } from '@modules/candidates/usecases/CreateCandidate/CreateCandidateUseCase';

class CreateCandidateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createCandidateUseCase = container.resolve(CreateCandidateUseCase);

    const createdCandidate = await createCandidateUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdCandidate));
  }
}

const INSTANCE = new CreateCandidateController();

export { INSTANCE as CreateCandidateController };
