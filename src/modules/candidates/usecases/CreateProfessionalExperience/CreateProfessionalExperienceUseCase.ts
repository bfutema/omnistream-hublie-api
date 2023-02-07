import { injectable, inject } from 'tsyringe';

import { ProfessionalExperience } from '../../infra/typeorm/entities/ProfessionalExperience';
import { ICreateProfessionalExperience } from '../../dtos/IProfessionalExperienceDTO';
import { IProfessionalExperiencesRepository } from '../../repositories/IProfessionalExperiencesRepository';

@injectable()
class CreateProfessionalExperienceUseCase {
  constructor(
    @inject('ProfessionalExperiencesRepository')
    private professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}

  public async execute(data: ICreateProfessionalExperience): Promise<ProfessionalExperience> {
    const { id } = await this.professionalExperiencesRepository.create(data);

    const createdProfessionalExperience = await this.professionalExperiencesRepository.findById({ id });

    return createdProfessionalExperience;
  }
}

export { CreateProfessionalExperienceUseCase };
