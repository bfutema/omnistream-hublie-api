import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteProfessionalExperience } from '../../dtos/IProfessionalExperienceDTO';
import { IProfessionalExperiencesRepository } from '../../repositories/IProfessionalExperiencesRepository';

@injectable()
class DeleteProfessionalExperienceUseCase {
  constructor(
    @inject('ProfessionalExperiencesRepository')
    private professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}

  public async execute({ id }: IDeleteProfessionalExperience): Promise<void> {
    const foundedProfessionalExperience = await this.professionalExperiencesRepository.findById({ id });

    if (!foundedProfessionalExperience) {
      throw new AppError('ProfessionalExperience not found!', 404);
    }

    await this.professionalExperiencesRepository.delete(id);
  }
}

export { DeleteProfessionalExperienceUseCase };
