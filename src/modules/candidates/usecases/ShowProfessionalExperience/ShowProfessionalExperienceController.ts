import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProfessionalExperienceUseCase } from '@modules/candidates/usecases/ShowProfessionalExperience/ShowProfessionalExperienceUseCase';

class ShowProfessionalExperienceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProfessionalExperienceUseCase = container.resolve(ShowProfessionalExperienceUseCase);

    const foundedProfessionalExperience = await showProfessionalExperienceUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedProfessionalExperience));
  }
}

const INSTANCE = new ShowProfessionalExperienceController();

export { INSTANCE as ShowProfessionalExperienceController };
