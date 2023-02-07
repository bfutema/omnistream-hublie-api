import { injectable, inject } from 'tsyringe';

import { Profile } from '../../infra/typeorm/entities/Profile';
import { ICreateProfile } from '../../dtos/IProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

@injectable()
class CreateProfileUseCase {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) {}

  public async execute(data: ICreateProfile): Promise<Profile> {
    const { id } = await this.profilesRepository.create(data);

    const createdProfile = await this.profilesRepository.findById({ id });

    return createdProfile;
  }
}

export { CreateProfileUseCase };
