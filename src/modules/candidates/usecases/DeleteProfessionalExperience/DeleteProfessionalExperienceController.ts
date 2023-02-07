import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProfessionalExperienceUseCase } from '@modules/candidates/usecases/DeleteProfessionalExperience/DeleteProfessionalExperienceUseCase';

class DeleteProfessionalExperienceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProfessionalExperienceUseCase = container.resolve(DeleteProfessionalExperienceUseCase);

    await deleteProfessionalExperienceUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteProfessionalExperienceController();

export { INSTANCE as DeleteProfessionalExperienceController };
