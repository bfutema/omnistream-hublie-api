import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Profile } from '../../infra/typeorm/entities/Profile';
import { IShowProfile } from '../../dtos/IProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

@injectable()
class ShowProfileUseCase {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id }: IShowProfile): Promise<Profile> {
    const profile = await this.profilesRepository.findById({ id });

    if (!profile) {
      throw new AppError('Profile not found!', 404);
    }

    return profile;
  }
}

export { ShowProfileUseCase };
