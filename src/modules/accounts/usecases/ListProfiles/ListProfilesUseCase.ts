import { injectable, inject } from 'tsyringe';

import { Profile } from '../../infra/typeorm/entities/Profile';
import { IListProfile } from '../../dtos/IProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

@injectable()
class ListProfileUseCase {
  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfilesRepository,
  ) {}

  public async execute(params: IListProfile): Promise<[Profile[], number]> {
    const profiles = await this.profilesRepository.find(params);

    return profiles;
  }
}

export { ListProfileUseCase };
