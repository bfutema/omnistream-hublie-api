import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCandidateUseCase } from '@modules/candidates/usecases/UpdateCandidate/UpdateCandidateUseCase';

class UpdateCandidateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateCandidateUseCase = container.resolve(UpdateCandidateUseCase);

    const updatedCandidate = await updateCandidateUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedCandidate));
  }
}

const INSTANCE = new UpdateCandidateController();

export { INSTANCE as UpdateCandidateController };
