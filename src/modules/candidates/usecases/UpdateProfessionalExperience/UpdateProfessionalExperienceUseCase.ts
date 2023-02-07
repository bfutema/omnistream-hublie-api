import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ProfessionalExperience } from '../../infra/typeorm/entities/ProfessionalExperience';
import { IUpdateProfessionalExperience } from '../../dtos/IProfessionalExperienceDTO';
import { IProfessionalExperiencesRepository } from '../../repositories/IProfessionalExperiencesRepository';

@injectable()
class UpdateProfessionalExperienceUseCase {
  constructor(
    @inject('ProfessionalExperiencesRepository')
    private professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateProfessionalExperience): Promise<ProfessionalExperience> {
    const foundedProfessionalExperienceById = await this.professionalExperiencesRepository.findById({ id });

    if (!foundedProfessionalExperienceById) {
      throw new AppError('ProfessionalExperience not found!', 404);
    }

    await this.professionalExperiencesRepository.save({ ...foundedProfessionalExperienceById, ...rest });

    const updatedProfessionalExperience = await this.professionalExperiencesRepository.findById({ id });

    return updatedProfessionalExperience;
  }
}

export { UpdateProfessionalExperienceUseCase };
