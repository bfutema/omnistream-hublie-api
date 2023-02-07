import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Profile } from '../../infra/typeorm/entities/Profile';
import { IUpdateProfile } from '../../dtos/IProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

@injectable()
class UpdateProfileUseCase {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateProfile): Promise<Profile> {
    const foundedProfileById = await this.profilesRepository.findById({ id });

    if (!foundedProfileById) {
      throw new AppError('Profile not found!', 404);
    }

    await this.profilesRepository.save({ ...foundedProfileById, ...rest });

    const updatedProfile = await this.profilesRepository.findById({ id });

    return updatedProfile;
  }
}

export { UpdateProfileUseCase };
