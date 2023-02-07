import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProfessionalExperienceUseCase } from '@modules/candidates/usecases/UpdateProfessionalExperience/UpdateProfessionalExperienceUseCase';

class UpdateProfessionalExperienceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateProfessionalExperienceUseCase = container.resolve(UpdateProfessionalExperienceUseCase);

    const updatedProfessionalExperience = await updateProfessionalExperienceUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedProfessionalExperience));
  }
}

const INSTANCE = new UpdateProfessionalExperienceController();

export { INSTANCE as UpdateProfessionalExperienceController };
