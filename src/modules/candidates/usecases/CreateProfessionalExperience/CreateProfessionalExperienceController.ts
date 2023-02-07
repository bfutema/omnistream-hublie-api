import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProfessionalExperienceUseCase } from '@modules/candidates/usecases/CreateProfessionalExperience/CreateProfessionalExperienceUseCase';

class CreateProfessionalExperienceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createProfessionalExperienceUseCase = container.resolve(CreateProfessionalExperienceUseCase);

    const createdProfessionalExperience = await createProfessionalExperienceUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdProfessionalExperience));
  }
}

const INSTANCE = new CreateProfessionalExperienceController();

export { INSTANCE as CreateProfessionalExperienceController };
