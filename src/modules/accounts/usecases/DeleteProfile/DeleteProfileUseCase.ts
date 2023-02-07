import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteProfile } from '../../dtos/IProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

@injectable()
class DeleteProfileUseCase {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) {}

  public async execute({ id }: IDeleteProfile): Promise<void> {
    const foundedProfile = await this.profilesRepository.findById({ id });

    if (!foundedProfile) {
      throw new AppError('Profile not found!', 404);
    }

    await this.profilesRepository.delete(id);
  }
}

export { DeleteProfileUseCase };
