import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ProfessionalExperience } from '../../infra/typeorm/entities/ProfessionalExperience';
import { IShowProfessionalExperience } from '../../dtos/IProfessionalExperienceDTO';
import { IProfessionalExperiencesRepository } from '../../repositories/IProfessionalExperiencesRepository';

@injectable()
class ShowProfessionalExperienceUseCase {
  constructor(
    @inject('ProfessionalExperiencesRepository')
    private professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}

  public async execute({ id }: IShowProfessionalExperience): Promise<ProfessionalExperience> {
    const professionalExperience = await this.professionalExperiencesRepository.findById({ id });

    if (!professionalExperience) {
      throw new AppError('ProfessionalExperience not found!', 404);
    }

    return professionalExperience;
  }
}

export { ShowProfessionalExperienceUseCase };
