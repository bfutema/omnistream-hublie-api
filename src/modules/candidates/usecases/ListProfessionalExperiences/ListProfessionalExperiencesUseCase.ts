import { injectable, inject } from 'tsyringe';

import { ProfessionalExperience } from '../../infra/typeorm/entities/ProfessionalExperience';
import { IListProfessionalExperience } from '../../dtos/IProfessionalExperienceDTO';
import { IProfessionalExperiencesRepository } from '../../repositories/IProfessionalExperiencesRepository';

@injectable()
class ListProfessionalExperienceUseCase {
  constructor(
    @inject('ProfessionalExperiencesRepository')
    private professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}

  public async execute(params: IListProfessionalExperience): Promise<[ProfessionalExperience[], number]> {
    const professionalExperiences = await this.professionalExperiencesRepository.find(params);

    return professionalExperiences;
  }
}

export { ListProfessionalExperienceUseCase };
