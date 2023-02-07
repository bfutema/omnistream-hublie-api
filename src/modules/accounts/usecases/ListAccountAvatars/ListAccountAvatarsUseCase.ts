import { injectable, inject } from 'tsyringe';

import { AccountAvatar } from '../../infra/typeorm/entities/AccountAvatar';
import { IListAccountAvatar } from '../../dtos/IAccountAvatarDTO';
import { IAccountAvatarsRepository } from '../../repositories/IAccountAvatarsRepository';

@injectable()
class ListAccountAvatarUseCase {
  constructor(
    @inject('AccountAvatarsRepository')
    private accountAvatarsRepository: IAccountAvatarsRepository,
  ) {}

  public async execute(params: IListAccountAvatar): Promise<[AccountAvatar[], number]> {
    const accountAvatars = await this.accountAvatarsRepository.find(params);

    return accountAvatars;
  }
}

export { ListAccountAvatarUseCase };
