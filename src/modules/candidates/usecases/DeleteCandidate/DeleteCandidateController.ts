import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCandidateUseCase } from '@modules/candidates/usecases/DeleteCandidate/DeleteCandidateUseCase';

class DeleteCandidateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCandidateUseCase = container.resolve(DeleteCandidateUseCase);

    await deleteCandidateUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteCandidateController();

export { INSTANCE as DeleteCandidateController };
